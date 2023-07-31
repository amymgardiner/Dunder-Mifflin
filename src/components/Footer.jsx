import React from 'react'
import { BsInstagram, BsTiktok, BsLinkedin, BsFacebook } from "react-icons/bs";

const Navbar = () => {
	return (
		<footer className="bg-dark-blue">
			<h2 className="font-serif tracking-wider text-white uppercase">Contact Us</h2>
			<div className="grid grid-cols-3">
				<div>
					<h3 className="font-serif tracking-wider text-white uppercase">Address</h3>
					<div className="flex flex-col">
						<p className="font-serif tracking-wider text-white">Scranton Business Park</p>
						<p className="font-serif tracking-wider text-white">1725 Slough Avenue</p>
						<p className="font-serif tracking-wider text-white">Scranton, PA, 18505</p>
					</div>
				</div>
				<div>
					<h3 className="font-serif tracking-wider text-white uppercase">Social</h3>
					<div className="flex">
						<a href="https://www.linkedin.com/company/dunder-mifflin-scranton/" target="_blank" rel="noopener noreferrer" className="text-white"><BsLinkedin/></a>
						<a href="https://www.instagram.com/theoffice/" target="_blank" rel="noopener noreferrer" className="text-white"><BsInstagram/></a>
						<a href="https://www.tiktok.com/@theoffice" target="_blank" rel="noopener noreferrer" className="text-white"><BsTiktok/></a>
						<a href="https://www.facebook.com/TheOfficeTV/" target="_blank" rel="noopener noreferrer" className="text-white"><BsFacebook/></a>
					</div>
				</div>
				<div>
					<h3 className="font-serif tracking-wider text-white uppercase">Careers</h3>
					<div className="flex flex-col">
						<p className="font-serif tracking-wider text-white">Open Positions</p>
						<button className="button--secondary">Apply</button>
						<p className="font-serif tracking-wider text-white">Internships</p>
						<button className="button--secondary">Apply</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Navbar