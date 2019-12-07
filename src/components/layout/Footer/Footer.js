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
	const footerItems = [
		{
			name: 'Twitter',
			url: 'https://twitter.com/Oathsuk',
			icon: faTwitter
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/oaths_uk/',
			icon: faInstagram
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/OathsUK/',
			icon: faFacebookSquare
		},

		{
			name: 'Youtube',
			url: 'https://www.youtube.com/user/OathsOfficial',
			icon: faYoutube
		},
		{
			name: 'Spotify',
			url: 'https://open.spotify.com/artist/5ECmcgWxIJ16yXrZ9ZoHe7',
			icon: faSpotify
		},
		{
			name: 'Apple Music',
			url: 'https://music.apple.com/gb/artist/oaths/839068357',
			icon: faApple
		},
		{
			name: 'Google Play',
			url:
				'https://play.google.com/store/music/artist/%C3%98ATHS?id=Astyll66m33etnqlsnakzksgaai&hl=en',
			icon: faGooglePlay
		}
	];
	let icons = footerItems.map(footerItem => {
		return (
			<a
				key={footerItem.name}
				href={footerItem.url}
				className={styles.fontawesomeicon}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={footerItem.icon} />
			</a>
		);
	});

	return <footer className={styles.footer}>{icons}</footer>;
};

export default Footer;
