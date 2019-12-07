import React from 'react';
import styles from './Music.module.css';

const Music = () => {
	return (
		<div id="music" className={styles.music}>
			<h1 className="title">MUSIC</h1>

			{/* <iframe
				className={styles.spotify}
				src="https://open.spotify.com/embed/artist/5ECmcgWxIJ16yXrZ9ZoHe7"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
				title="oaths"
			></iframe> */}

			<iframe
				className={styles.youtube}
				title="oathsvideo"
				src="https://www.youtube.com/embed/wdOJEqmgRYE"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default Music;
