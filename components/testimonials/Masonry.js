import React from 'react';
import Masonry from 'react-masonry-css';
import MasonryItem from './MasonryItem';
import styles from './Masonry.module.css';

const testimonials = [
	{
		text: "BIG Thanks to you and the team for the amazing job you did!  The flat is absolutely beautiful, and I couldn't be happier :)",
		text2: "",
		name: "Mrs M Nielsen",
		location: "Putney"
	},
	{
		text: "The workmen from Vale were polite, clean, efficient, and respectful that I was working on my computer while they worked, thanks a lot!",
		text2: "",
		name: "Mr G Sherman",
		location: "Twickenham"
	},
	{
		text: "Great job renovating the flat, kitchen and bathrooms looks fantastic!",
		text2: "",
		name: "Mr S Lee",
		location: "Richmond Upon Thames"
	},
	{
		text: "Thanks for your team's hard work, great to have a finished job on time!",
		text2: "",
		name: "Mr K Johnson",
		location: "Hampton Wick"
	},

	{
		text: "New boiler is working great, thanks for replacing at such short notice, it was going to be a very cold few days!",
		text2: "",
		name: "Mrs B Tinbergen",
		location: "Richmond Upon Thames"
	},
	{
		text: "Dear Vale, thanks as always for your prompt and fabulous service",
		text2: "",
		name: "Mrs Watts",
		location: "Kingston Upon Thames"
	},
	{
		text: "Thank you for the excellent standard of work ",
		text2: "",
		name: "Mrs J Barry",
		location: "Teddington"
	},
	{
		text: "I'm really glad you were recommended to us, a big thanks to the whole team for their great work!",
		text2: "",
		name: "Mrs C Issacs",
		location: "Richmond Upon Thames"
	},
	{
		text: "Thank you for the excellent work done in the property!",
		text2: "",
		name: "Mr T Constantinidis",
		location: "Surrey"
	},
	{
		text: "Thanks so much for your attention to my heating and attentiveness to me!",
		text2: "",
		name: "Mrs V Hartley",
		location: "Surbiton"
	},
	{
		text: "Thanks again for another good job!",
		text2: "",
		name: "Mr M Huggon",
		location: "New Malden"
	},
	{
		text: "Thank you for carrying the work so promptly.",
		text2: "",
		name: "Mr Jenkins",
		location: "Isleworth"
	},
	{
		text: "I hope I may call upon your prompt services again.",
		text2: "",
		name: "Mrs Wickers",
		location: "Wimbledon"
	},
	{
		text: "Thank you so much for completing the work so successfully for me!",
		text2: "",
		name: "Mr D Chedgy",
		location: "Kingston Upon Thames"
	},
	{
		text: "Thanks for an amazing job on replacing the doors, new ones look amazing.",
		text2: "",
		name: "Ms A Lett",
		location: "Richmond Upon Thames"
	},
	{
		text: "Thank you for sorting me out yet again.",
		text2: "",
		name: "Mrs P Cannell",
		location: "Teddington"
	},
	{
		text: "Thanks to you and your team, who clearly impressed the tenant whilst on site",
		text2: "",
		name: "Mr Bredelt",
		location: "Raynes Park"
	},
	{
		text: "Thank you very much indeed for doing such great work!",
		text2: "",
		name: "Mr M Robson",
		location: "Brentford"
	},
	{
		text: "We would like to take this opportunity to say thank you so much for resolving all the many problems we've had this year.",
		text2: "",
		name: "Mr N Damji",
		location: "Putney"
	},
	{
		text: "Thank you very much for your excellent work on our bathroom.",
		text2: "",
		name: "Ms B Patient",
		location: "Worcester Park"
	},
	{
		text: "Many thanks for getting my repair done so quickly!",
		text2: "",
		name: "Mrs G Grant",
		location: "Kingston Upon Thames"
	},
	{
		text: "You're a star! Thanks for getting this sorted so quickly.",
		text2: "",
		name: "Ms B Stewart",
		location: "Twickenham"
	},
	{
		text: "Adrian did an amazing job on the shower, thanks so much!",
		text2: "",
		name: "Mrs C Calascione",
		location: "Kingston Upon Thames"
	},
	{
		text: "I went over to Feltham today and had a look around, it all looks so nice and fresh, thank you!",
		text2: "",
		name: "Ms K Vann",
		location: "Isleworth"
	},
	{
		text: "Thank you Mark for going the extra mile and getting the place looking great!",
		text2: "",
		name: "Mrs C Delattre",
		location: "Teddington"
	},
	{
		text: "The works look fantastic as always! Thank you!",
		text2: "",
		name: "Ms I Murton",
		location: "Sunbury"
	},
	{
		text: "Excellent work over at the flat, new bathroom looks amazing!",
		text2: "",
		name: "Mr I Oddie",
		location: "Richmond Upon Thames"
	},
	{
		text: "For the last decade or so if I have any problems in any of my properties I simply call Vale and they have always got the job done on time and within budget. I wish everything worked like this!",
		text2: "",
		name: "Ben Roberts",
		location: "Wimbledon"
	},
]



const items = testimonials.map((individualItem, index) =>
	<MasonryItem text={individualItem.text} name={individualItem.name} text2={individualItem.text2} location={individualItem.location} key={index} />
);

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
	<li key={number.toString()}>
		{number}
	</li>
);

const breakpointColumnsObj = {
	default: 3,
	768: 2,
	576: 1
};


const Masonary = () => {
	return (
		<div>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className={styles['my-masonry-grid']}
				columnClassName={styles['my-masonry-grid_column']}>
				{/* array of JSX items */}
				{items}
			</Masonry>
		</div>
	);
};

export default Masonary;
