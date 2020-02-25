import React from 'react';
import styles from './Video.module.css';

const Video = () => {
	return (
		<div id="videos" className={`${styles.videos} section`}>
			<h1 className="title">Videos</h1>
			<iframe
				className={styles.youtube}
				title="oathsvideo"
				src="https://www.youtube.com/embed/ZZBLHdq4TSg"
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default Video;
