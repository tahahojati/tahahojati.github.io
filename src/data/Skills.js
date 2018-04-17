import Chance from 'chance';
const chance = new Chance();
const Colors = [
	['#d99cd1', '#c99cd1', '#b99cd1', '#a99cd1'],
	['#403030', '#f97a7a'],
	['#31a50d', '#d1b022', '#74482a'],
	['#ffd077', '#3bc4c7', '#05508a', '#ff4e69', '#461e47'],
];
const Skills = [
	{text: "Honesty", weight: 10},
	{text: "Software", weight: 5},
	{text: "Genius", weight: 2},
	{text: "Creativity", weight: 1},
];

const pickRandomFont = function(){
	const fonts = [
							'Abril Fatface',
							'Annie Use Your Telescope',
							'Anton',
							'Bahiana',
							'Baloo Bhaijaan',
							'Barrio',
							'Finger Paint',
							'Fredericka the Great',
							'Gloria Hallelujah',
							'Indie Flower',
							'Life Savers',
							'Londrina Sketch',
							'Lora',
							'Love Ya Like A Sister',
							'Merienda',
							'Nothing You Could Do',
							'Pacifico',
							'Quicksand',
							'Righteous',
							'Sacramento',
							'Shadows Into Light',
						];
	return chance.pickone(fonts);
};
const pickRandomColor = function(scheme){
	scheme = scheme || 0; 
	if(scheme < 0 || scheme >= Colors.length)
		scheme = 0;

	return chance.pickone(Colors[scheme]);
};
const pickRandomColorScheme = function(){
	return chance.integer({min: 0, max: Colors.length-1});
};

const pickRandomRotation = function(){
	const rotations = [0, 7/8,	3/4, 1/8, 3/4, 7/8];
	return chance.pickone(rotations);
};



export {
	Skills,
	pickRandomColor,
	pickRandomColorScheme,
	pickRandomFont,
	pickRandomRotation,
};