import React from 'react';
import styles from './TopNav.module.css';
import logo from './oaths_logo_white.webp';
const TopNav = () => {
	return (
		<nav>
			<div className={styles.TopNav}>
				<span>
					<a className={styles.navLink} href="#videos">
						VIDEOS
					</a>
					<a className={styles.navLink} href="#music">
						MUSIC
					</a>
				</span>
				<span>
					<a href="#/" className={styles.brand}>
						<img alt="logo" className={styles.logo} src={logo} />
					</a>
				</span>
				<span>
					<a className={styles.navLink} href="#tour">
						TOUR
					</a>
					<a className={styles.navLink} href="#merch">
						MERCH
					</a>
				</span>
			</div>
		</nav>
	);
};

export default TopNav;
