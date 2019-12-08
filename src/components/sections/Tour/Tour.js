import React from 'react';
import styles from './Tour.module.css';

const Tour = () => {
	return (
		<div id="tour" className={`${styles.tour} section`}>
			<h1 className="title">TOUR DATES</h1>

			<div className={styles.container}>
				<div
					rel="noopener"
					className={`${styles.bandsintownwidget} bit-widget-initializer`}
					data-artist-name="oaths"
					data-display-local-dates="false"
					data-display-past-dates="true"
					data-auto-style="false"
					data-text-color="#FFFFFF"
					data-link-color="#535c68"
					data-background-color="rgba(0,0,0,0)"
					data-display-limit="5"
					data-display-start-time="false"
					data-link-text-color="#FFFFFF"
					data-display-lineup="false"
					data-display-play-my-city="true"
					data-separator-color="rgba(124,124,124,0.25)"
					data-font="Alata"
				></div>
			</div>
		</div>
	);
};

export default Tour;
