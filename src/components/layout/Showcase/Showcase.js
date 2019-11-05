import React from 'react';
import styles from './Showcase.module.css';
// import banner from './0.jpg';
import banner from './oaths.jpeg';

const Showcase = props => {
	return (
		<div className={styles.showcase} id="/">
			<img
				alt="full band shot"
				className={styles.banner}
				src={banner}
			></img>
		</div>
	);
};

export default Showcase;
