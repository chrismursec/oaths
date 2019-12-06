import React, { Component } from 'react';
import styles from './Tour.module.css';

class Tour extends Component {
	state = {
		dummyData: [
			{
				id: 1,
				city: 'Manchester',
				venue: 'Manchester Arena',
				date: 'Thursday, November 28'
			},
			{
				id: 2,
				city: 'Manchester',
				venue: 'Manchester Arena',
				date: 'Friday, November 29'
			},
			{
				id: 3,
				city: 'Manchester',
				venue: 'Manchester Arena',
				date: 'Saturday, November 30'
			}
		]
	};

	render() {
		// const dates = this.state.dummyData.map(date => {
		// 	return (
		// 		<div className={styles.tourDateContainer}>
		// 			<div key={date.id} className={styles.tourdate}>
		// 				<div className={styles.tourDateInfo}>
		// 					<p
		// 						className={`${styles.tourDateText} ${styles.date}`}
		// 					>
		// 						{date.date}
		// 					</p>

		// 					<p
		// 						className={`${styles.tourDateText} ${styles.city}`}
		// 					>
		// 						{date.city}
		// 					</p>
		// 					<p
		// 						className={`${styles.tourDateText} ${styles.venue}`}
		// 					>
		// 						{date.venue}
		// 					</p>
		// 				</div>
		// 				<div className={styles.tourButtons}>
		// 					<a
		// 						href="lol"
		// 						className={`${styles.eventButton} ${styles.saleButton}`}
		// 					>
		// 						On Sale
		// 					</a>
		// 					<a
		// 						href="lol"
		// 						className={`${styles.eventButton} ${styles.rsvpButton}`}
		// 					>
		// 						RSVP
		// 					</a>
		// 				</div>
		// 			</div>

		// 			<hr />
		// 		</div>
		// 	);
		// });
		return (
			<div id="tour" className={styles.tour}>
				<h1 className={styles.title}>TOUR DATES</h1>
				<div
					className={styles.bandsintownwidget}
					class="bit-widget-initializer"
					data-artist-name="oaths"
					data-display-local-dates="false"
					data-display-past-dates="true"
					data-auto-style="true"
					data-text-color="#FFFFFF"
					data-link-color="#535c68"
					data-background-color="rgba(0,0,0,0)"
					data-display-limit="5"
					data-display-start-time="false"
					data-link-text-color="#FFFFFF"
					data-display-lineup="false"
					data-display-play-my-city="true"
					data-separator-color="rgba(124,124,124,0.25)"
				></div>
			</div>
		);
	}
}

export default Tour;
