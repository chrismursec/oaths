import React from 'react';
import styles from './Showcase.module.css';
import desktopBanner from './teasergif.gif';
import mobileBanner from './banner-image.webp';
import withSizes from 'react-sizes';

const Showcase = ({ isMobile }) => {
	const desktopShowcase = () => {
		return (
			<div className={styles.container}>
				<img
					alt="full band shot"
					className={styles.banner}
					src={desktopBanner}
				></img>
				{/* <h3 className={styles.tag}>New Single ALONE Out Now</h3> */}
			</div>
		);
	};

	const mobileShowcase = () => {
		return (
			<img
				alt="full band shot"
				className={styles.banner}
				src={mobileBanner}
			></img>
		);
	};

	return (
		<div className={styles.showcase} id="/">
			{isMobile ? mobileShowcase() : desktopShowcase()}
		</div>
	);
};
const mapSizesToProps = ({ width }) => ({
	isMobile: width < 480
});

export default withSizes(mapSizesToProps)(Showcase);
