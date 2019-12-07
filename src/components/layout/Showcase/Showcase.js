import React from 'react';
import styles from './Showcase.module.css';
import banner from './vapeb.jpg';
// import banner from './oaths.jpeg';

const Showcase = () => {
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
