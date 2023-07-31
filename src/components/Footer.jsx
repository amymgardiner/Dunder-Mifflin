import React from 'react'
import { BsInstagram, BsTiktok, BsLinkedin, BsFacebook } from "react-icons/bs";
import Logo from '../assets/img/Dunder_Mifflin,_Inc.svg'

const Navbar = () => {
	return (
		<footer className="flex justify-between px-16 py-8 bg-navy-blue md:px-8 md:flex-col md:justify-center">
			<div className="flex items-center justify-center md:mb-2">
				<img src={Logo} alt="Hammermill Copy Plus Copy Paper" className="w-36"></img>
			</div>
			<div className="flex gap-20 lg:gap-8 md:justify-center">
				<div>
					<h2 className="mb-4 font-serif text-xl tracking-wider text-white uppercase">Address</h2>
					<div className="flex flex-col">
						<p className="font-serif text-lg tracking-wider text-white">Scranton Business Park</p>
						<p className="font-serif text-lg tracking-wider text-white">1725 Slough Avenue</p>
						<p className="font-serif text-lg tracking-wider text-white">Scranton, PA, 18505</p>
					</div>
				</div>
				<div>
					<h2 className="mb-4 font-serif text-xl tracking-wider text-white uppercase">Careers</h2>
					<div className="flex flex-col">
						<p className="font-serif text-lg tracking-wider text-white">Open Positions</p>
						<p className="font-serif text-lg tracking-wider text-white">Internships</p>
					</div>
				</div>
				<div>
					<h2 className="mb-4 font-serif text-xl tracking-wider text-white uppercase">Social</h2>
					<div className="flex flex-wrap gap-8 lg:gap-4">
						<a href="https://www.linkedin.com/company/dunder-mifflin-scranton/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hvr-grow"><BsLinkedin/></a>
						<a href="https://www.instagram.com/theoffice/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hvr-grow"><BsInstagram/></a>
						<a href="https://www.tiktok.com/@theoffice" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hvr-grow"><BsTiktok/></a>
						<a href="https://www.facebook.com/TheOfficeTV/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hvr-grow"><BsFacebook/></a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Navbar