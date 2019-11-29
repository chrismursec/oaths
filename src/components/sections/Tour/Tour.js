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
		const dates = this.state.dummyData.map(date => {
			return (
				<div className={styles.tourDateContainer}>
					<div key={date.id} className={styles.tourdate}>
						<div className={styles.tourDateInfo}>
							<p
								className={`${styles.tourDateText} ${styles.date}`}
							>
								{date.date}
							</p>

							<p
								className={`${styles.tourDateText} ${styles.city}`}
							>
								{date.city}
							</p>
							<p
								className={`${styles.tourDateText} ${styles.venue}`}
							>
								{date.venue}
							</p>
						</div>
						<div className={styles.tourButtons}>
							<a
								href="lol"
								className={`${styles.eventButton} ${styles.saleButton}`}
							>
								On Sale
							</a>
							<a
								href="lol"
								className={`${styles.eventButton} ${styles.rsvpButton}`}
							>
								RSVP
							</a>
						</div>
					</div>

					<hr />
				</div>
			);
		});
		return (
			<div id="tour" className={styles.tour}>
				<h1 className={styles.title}>TOUR DATES</h1>
				<div className={styles.tourdates}>{dates}</div>
			</div>
		);
	}
}

export default Tour;
