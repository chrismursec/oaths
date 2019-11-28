import React, { Component } from 'react';
import styles from './Merch.module.css';

class Merch extends Component {
	state = {
		bigCartelURl: 'https://oaths.bigcartel.com/',
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
				<div>
					<img
						alt={merchItem.description}
						className={styles.merchItemImage}
						src={merchItem.images[0].secure_url}
					/>
					<p>{merchItem.name}</p>
				</div>
			);
		});

		return (
			<div id="merch" className={styles.merch}>
				<h1 className={styles.title}>Merch</h1>

				<div className={styles.merchList}>{merch}</div>
			</div>
		);
	}
}
export default Merch;
