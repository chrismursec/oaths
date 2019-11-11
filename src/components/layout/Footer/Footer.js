import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebookSquare,
	faInstagram,
	faYoutube,
	faSpotify,
	faGooglePlay,
	faApple
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
			<a
				href="https://play.google.com/store/music/artist/%C3%98ATHS?id=Astyll66m33etnqlsnakzksgaai&hl=en"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGooglePlay} />
			</a>
			<a
				href="https://music.apple.com/gb/artist/oaths/839068357"
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faApple} />
			</a>
		</footer>
	);
};

export default Footer;
