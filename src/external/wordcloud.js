import * as d3 from 'd3-3'; 
// import * as d3Cloud from 'd3-cloud';
window.d3 = d3;
// console.log(d3);

class WordCloud {
    constructor(element = d3.select('body')){
        this.element = element; 
        this.fill = d3.scale.category20();
        //Construct the word cloud's SVG element
        this.svg = d3.select(element).append("svg");
        this.svg.attr("width", 500)
            .attr("height", 500)
            // .merge(this.svg)
            .append("g")
            .attr("transform", "translate(250,250)");

    }
    //Draw the word cloud
    draw(words) {
        window.cloud = this; 
        // this.svg = d3.select(this.svg[0][0]);
        var cloud = this.svg.selectAll("g text")
                        .data(words, function(d) { return d.text; });
        const self = this; 
        //Entering words
        cloud = cloud.enter()
            .append("text")
            .style("font-family", "Impact")
            .style("fill", function(d, i) {return self.fill(i); })
            .attr("text-anchor", "middle")
            .attr('font-size', 1)
            .text(function(d) {return d.text; });
            // .merge(cloud);

        //Entering and existing words
        cloud.transition()
                .duration(600)
                .style("font-size", function(d) { console.log( d); return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("fill-opacity", 1);

        //Exiting words
        cloud.exit()
            .transition()
                .duration(200)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 1)
                .remove();
    }

    update(words){


        //Use the module pattern to encapsulate the visualisation code. We'll
        // expose only the parts that need to be public.

            //Recompute the word cloud for a new set of words. This method will
            // asycnhronously call draw when the layout has been computed.
            //The outside world will need to call this function, so make it part
        // of the WordCloud return value.
            d3.layout.cloud().size([500, 500])
                .words(words)
                .padding(5)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Impact")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();
        
    

    }
}

//Some sample data - http://en.wikiquote.org/wiki/Opening_lines
var words = [
    "Feliz Cumpleaños Deisy, sabes que te quiero muchísimo, un fuerte abrazo"
]

//Prepare one of the sample sentences by removing punctuation,
// creating an array of words and computing a random size attribute.
function getWords(i) {
    return words[i]
            .replace(/[!\.,:;\?]/g, '')
            .split(' ')
            .map(function(d) {
                return {text: d, size: 10 + Math.random() * 60};
            })
}

//This method tells the word cloud to redraw with a new set of words.
//In reality the new words would probably come from a server request,
// user input or some other source.
function showNewWords(vis, i) {
    i = i || 0;

    vis.update(getWords(i ++ % words.length))
    setTimeout(function() { showNewWords(vis, i + 1)}, 2000)
}

//Create a new instance of the word cloud visualisation.
//var myWordCloud = WordCloud('body');

//Start cycling through the demo data
//showNewWords(myWordCloud);

export  {
    WordCloud,
    // showNewWords,
    // getWords,
};
