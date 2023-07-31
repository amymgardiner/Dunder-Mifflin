import React from 'react'
import { BiDownArrow } from "react-icons/bi";
import Logo from '../assets/img/Dunder_Mifflin,_Inc.svg'

const Navbar = () => {
	return (
		<nav className="flex items-center gap-16 main--navbar bg-navy-blue">
			<div>
				<img src={Logo} alt="Hammermill Copy Plus Copy Paper" className="w-36"></img>
			</div>
			<div className="flex gap-16">
				<div>
					<h2 className="font-serif text-2xl tracking-wider text-white uppercase hvr-grow">About</h2>
				</div>
				<div>
					<h2 className="font-serif text-2xl tracking-wider text-white uppercase hvr-grow">Our Team</h2>
				</div>
				<div>
					<h2 className="font-serif text-2xl tracking-wider text-white uppercase hvr-grow">Partnerships</h2>
				</div>
				<div className="hvr-grow">
					<div className="flex items-center gap-2">
						<h2 className="font-serif text-2xl tracking-wider text-white uppercase">Shop </h2>
						<p className="text-xl text-white"><BiDownArrow/></p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar