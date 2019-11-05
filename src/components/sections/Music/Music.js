import React from 'react';
import styles from './Music.module.css';

const Music = props => {
	return (
		<div id="music" className={styles.music}>
			<h1>MUSIC</h1>
			<iframe
				className={styles.youtube}
				title="oathsvideo"
				src="https://www.youtube.com/embed/wdOJEqmgRYE"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<iframe
				className={styles.spotify}
				src="https://open.spotify.com/embed/artist/5ECmcgWxIJ16yXrZ9ZoHe7"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
				title="oaths"
			></iframe>
		</div>
	);
};

export default Music;
