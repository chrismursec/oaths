import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebookSquare,
	faInstagram,
	faYoutube,
	faSpotify
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://www.facebook.com/OathsUK/"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faFacebookSquare} />
			</a>
			<a
				href="https://twitter.com/Oathsuk"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faTwitter} />
			</a>
			<a
				href="https://www.instagram.com/oaths_uk/"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faInstagram} />
			</a>
			<a
				href="https://www.youtube.com/user/OathsOfficial"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faYoutube} />
			</a>
			<a
				href="https://open.spotify.com/artist/5ECmcgWxIJ16yXrZ9ZoHe7"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faSpotify} />
			</a>
		</footer>
	);
};

export default Footer;
