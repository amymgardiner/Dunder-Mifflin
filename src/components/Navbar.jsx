import React, { useState } from 'react';
import { BiDownArrow } from "react-icons/bi";
import Logo from '../assets/img/Dunder_Mifflin,_Inc.svg'

const Navbar = () => {

	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  	};

	return (
		<nav className="flex items-center gap-16 md:gap-2 main--navbar bg-navy-blue wrapper md:flex-col md:pb-4">
			<div>
				<img src={Logo} alt="Hammermill Copy Plus Copy Paper" className="w-36"></img>
			</div>
			<div className="flex gap-16 lg:gap-10 md:!gap-8 main--navbar-links">
				<div>
					<h2 className="font-serif text-2xl tracking-wider text-white uppercase md:text-xl hvr-grow">About</h2>
				</div>
				<div>
					<h2 className="font-serif text-2xl tracking-wider text-white uppercase md:text-xl hvr-grow">Our Team</h2>
				</div>
				<div>
					<h2 className="font-serif text-2xl tracking-wider text-white uppercase md:text-xl hvr-grow">Partnerships</h2>
				</div>
				<div className="dropdown" onClick={toggleDropdown}>
					<div className="hvr-grow">
						<div className="flex items-center gap-2">
							<h2 className="font-serif text-2xl tracking-wider text-white uppercase md:text-xl">Shop </h2>
							<p className="text-xl text-white md:text-lg"><BiDownArrow/></p>
						</div>
					</div>
					<div className={`dropdown-content ${isDropdownVisible ? 'visible' : 'hidden'}`}>
						<div className="flex dropdown-content--text">
							<p className="mt-2 font-serif text-xl tracking-wider hvr-grow md:text-lg">Paper</p>
							<p className="mt-2 font-serif text-xl tracking-wider hvr-grow md:text-lg">Office Supplies</p>
							<p className="mt-2 font-serif text-xl tracking-wider hvr-grow md:text-lg">Printers & Copiers</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar