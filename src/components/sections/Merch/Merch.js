import React, { Component } from 'react';
import styles from './Merch.module.css';

class Merch extends Component {
	state = {
		bigCartelURL: 'https://oaths.bigcartel.com/',
		merchData: []
	};

	componentDidMount() {
		fetch('https://api.bigcartel.com/oaths/products.json')
			.then(response => response.json())
			.then(data => this.setState({ merchData: data }));
	}

	render() {
		const merch = this.state.merchData.map(merchItem => {
			return (
				<div className={styles.merchContainer} key={merchItem.id}>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`${this.state.bigCartelURL}${merchItem.url}`}
						className={styles.merchLink}
					>
						<img
							alt={merchItem.description}
							className={styles.merchItemImage}
							src={merchItem.images[0].secure_url}
						/>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`${this.state.bigCartelURL}${merchItem.url}`}
						className={styles.merchLink}
					>
						<p>{merchItem.name}</p>
						<p>
							{merchItem.status === 'sold-out'
								? 'Sold Out'
								: 'In Stock'}
						</p>
					</a>
				</div>
			);
		});

		return (
			<div id="merch" className={styles.merch}>
				<h1 className="title">Merch</h1>

				<div className={styles.merchList}>{merch}</div>
			</div>
		);
	}
}
export default Merch;
