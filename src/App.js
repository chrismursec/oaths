import React from 'react';
import './App.css';
import TopNav from './components/layout/TopNav/TopNav';
import Footer from './components/layout/Footer/Footer';
import Showcase from './components/layout/Showcase/Showcase';
import Tour from './components/sections/Tour/Tour';
import Music from './components/sections/Music/Music';
import Merch from './components/sections/Merch/Merch';

function App() {
	return (
		<div className="App">
			<TopNav></TopNav>
			<Showcase></Showcase>

			<div className="sections">
				<Music></Music>
				<Tour></Tour>
				<Merch></Merch>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
