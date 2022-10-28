import React from 'react';
import styles from './MasonryItem.module.css'

const MasonryItem = ({ text, text2, name, location }) => {

	return (
		<div className={`${styles.testimonial} `} >
			<p>{text}</p>
			<p>{text2}</p>
			{/* <h6>{name}</h6> */}
			<p style={{ marginBottom: 0 }}><strong>{name}</strong></p>
			<p style={{ marginBottom: 0, color: '#134E88', fontWeight: 700 }}>{location}</p>
		</div>
	);
};

export default MasonryItem;