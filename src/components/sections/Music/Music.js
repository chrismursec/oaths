import React from 'react';
import styles from './Music.module.css';

const Music = () => {
	return (
		<div id="music" className={`${styles.music} section`}>
			<h1 className="title">MUSIC</h1>

			<iframe
				className={styles.spotify}
				src="https://open.spotify.com/embed/artist/5ECmcgWxIJ16yXrZ9ZoHe7"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
				title="oaths"
			></iframe>
		</div>
	);
};

export default Music;
