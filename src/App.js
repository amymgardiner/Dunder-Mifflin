import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Team from './components/Team'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path="/about" element={<About />}/>
			<Route path="/team" element={<Team />}/>
		</Routes>
	);
}

export default App;
