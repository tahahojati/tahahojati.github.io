import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';




export default [
	{
		path: '/',
		name: 'home',
		component: Home
	},	{
		path: '/about',
		name: 'about',
		component: About
	},	{
		path: '/skills',
		name: 'skills',
		component: Skills
	},	{
		path: '/portfolio',
		name: 'portfolio',
		component: Portfolio
	},	{
		path: '/contact',
		name: 'contact',
		component: Contact
	},

];