require('../assets/about-slideshow/1.jpg');
require('../assets/about-slideshow/2.jpg');

const Slideshow = {
	rootPath: '/dist/',
	images: [
		{
			src: '1.jpg',
			color: 'rgba(255,0,0,0.5)',
			caption: {
				heading: 'AT&T Hackathon 2018',
				text: 'Winner of best IoT solution.  We designed a theft prevention device for farms using Android, Particle Photon, Google Firebase and Node.js'
			}
		}, {
			src: '2.jpg',
			color: 'rgba(0,0,255,0.5)',
			caption: {
				heading: 'AT&T Hackathon 2018',
				text: 'Winner of best IoT solution.  We designed a theft prevention device for farms using Android, Particle Photon, Google Firebase and Node.js'
			}
		},

	]
};






export {
	Slideshow,

};