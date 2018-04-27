//require all images under assets/projects
// let pp = require('../assets/projects/farmsafe_proto1.png');
const requireImages = require.context('../assets/projects/', true);
//console.log(pp);

function projectGenerator(id, name){
	return {
		id: id,
		title: name,
		subtitle: '(Second place winner of Hawaii Agricultural Hackathon (Agathon, Feb 2018))',
		img: 'img/farmsafe_proto1.png',
		bigimg: 'img/farmsafe_big.jpg', 
		github: 'https://github.com/tahahojati/FarmSafe_Agathon_2018_2',
		frameworks:['android'],
		description: "This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.",
		slides:[
			{
				textHtml: "<h2>Introduction and Design</h2> <p>This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.</p>" 
				+ "<p>The app is meant to address an essential issue in the Hawaii Farms.  Every year, a population of farmers and laborers immigrate to Hawaii.  These individuals frequently do not speak English and are not familiar to the American standards of farming.  Currently, there is no affordable way to educate these farmers.  Moreover, department of Agriculture does not have a dependable way to assure that a new farmer is familiar with regulations.  This can lead to food safety issues due to inadequate adherence to safety standards among other issues. </p>"
				+"<p>We chose to develop an application that can teach farmers about Agricultural methods and standards in a variety of languages. We chose the mobile platform over web/desktop as we understood that the app must be available to farmers in the field without any network connection.  Moreover, we wanted a simple design that is mostly self explanatory.  The pictures below show our prototype created using proto.io</p>",
				objectHtml: '<img src="../assets/farmsafe_proto1.png" class="img-responsive"/> ',
				objectData: [
					requireImages('./farmsafe_proto1.png'), 
					requireImages('./farmsafe_proto2.png'), 
					requireImages('./farmsafe_proto3.png'), 
				],
				layoutComponent: 'ModalViewImgLeft',
				objectComponent: 'ModalViewImgImgSlideshow',
			},
		]		
		
	};

}

const projects = [
	projectGenerator(1, "farmsafe"), 
	projectGenerator(2, "opihi"),
	projectGenerator(3, "aashto"),
	projectGenerator(4, "ristorante"),
	projectGenerator(5, "coffeehonolulu"),
	projectGenerator(6, "frogger"),
];

export {projects};