import Chance from 'chance';
const chance = new Chance();
const Colors = [
	['#ffd077', '#3bc4c7', '#05508a', '#ff4e69', '#461e47'],
	['#000000', '#f17272', '#f1c7c7', '#c0d051' ],
	['#4de81c', '#d1b022', '#74482a'],
];
const Skills = [
	{text: "Angular", weight: 10},
	{text: "Vue", weight: 10},
	{text: "Zend", weight: 7},
	{text: "Android", weight: 10},
	{text: "AWS", weight: 5},
	{text: "Google Cloud", weight: 5},
	{text: "Python", weight: 2},
	{text: "C/C++", weight: 2},
	{text: "Java", weight: 2},
	{text: ".Net", weight: 5},
	{text: "Full Stack", weight: 6},
	{text: "Embedded", weight: 2},
	{text: "PHP", weight: 2},
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