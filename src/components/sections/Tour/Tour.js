import React from 'react';
import styles from './Tour.module.css';

const Tour = props => {
	let fakeData = [
		{
			id: 1,
			city: 'Manchester',
			venue: 'Manchester Arena',
			date: '05/11/2019'
		},
		{
			id: 2,
			city: 'Manchester',
			venue: 'Manchester Arena',
			date: '05/11/2019'
		},
		{
			id: 3,
			city: 'Manchester',
			venue: 'Manchester Arena',
			date: '05/11/2019'
		}
	];

	const dates = fakeData.map(date => {
		return (
			<div key={date.id} className={styles.tourdate}>
				<h4>{date.city}</h4>
				<h4>{date.venue}</h4>
				<h4>{date.date}</h4>
				<hr></hr>
			</div>
		);
	});

	return (
		<div id="tour" className={styles.tour}>
			<h1 className={styles.title}>TOUR DATES</h1>
			<div className={styles.tourdates}>{dates}</div>
		</div>
	);
};

export default Tour;
