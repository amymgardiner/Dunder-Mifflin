import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Tools
import Slider from "react-slick";

// images and video
import HoldUp from '../assets/img/holdup.webp';
import Nonsense from '../assets/img/l-intro-1599689234-ftr.jpg';
import Pose from '../assets/img/60369185bed5c50011a2c48a.webp';
import Dinner from '../assets/img/bdv4x4hliafqtjww5utc.webp';
import Halloween from '../assets/img/best-the-office-halloween-episodes-ever-906-1570557915.jpg';
import Dundies from '../assets/img/MV5BMjc2NjUxYTUtMzliMi00ZWE3LWFkNmYtYmU0NjA3OGE2NzcwXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg';
import JimPam from '../assets/img/MV5BMzVkN2RhMTctZGNkYS00MzdlLTk4YzEtMjlkODAzZGRmMDkzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg';
import Andy from '../assets/img/andy.jpeg';
import Angela from '../assets/img/angela.jpeg';
import Creed from '../assets/img/creed.jpeg';
import Daryyl from '../assets/img/darryl.jpeg';
import Dwight from '../assets/img/dwight.jpeg';
import Jim from '../assets/img/jim.jpeg';
import Kelly from '../assets/img/kelly.jpeg';
import Kevin from '../assets/img/kevin.jpeg';
import Meredith from '../assets/img/meredith.jpeg';
import Michael from '../assets/img/michael.jpeg';
import Oscar from '../assets/img/oscar.jpeg';
import Pam from '../assets/img/pam.jpeg';
import Phyllis from '../assets/img/phyllis.jpeg';
import Ryan from '../assets/img/ryan.jpeg';
import Stanley from '../assets/img/stanley.jpeg';
import Toby from '../assets/img/toby.jpeg';

const About = () => {

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };

	return (

		<main>

		<Navbar/>

			<header>
				<h1 className="pt-20 pb-8 font-sans text-4xl font-semibold text-center">The People Person's Paper People</h1>
			</header>

			<div className="pt-4 pb-32 sm:pb-20 about--staff-photos wrapper">
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Michael} alt="Michael Scott" class=""></img>
						<p className="font-sans text-xl font-semibold">Michael Scott</p>
						<p className="text-base font-default text-dark-blue">Regional Manager</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Dwight} alt="Dwight Schrute" class=""></img>
						<p className="font-sans text-xl font-semibold">Dwight Schrute</p>
						<p className="text-base font-default text-dark-blue">Assistant to the Regional Manager</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Pam} alt="Pam Beesly Halpert" class=""></img>
						<p className="font-sans text-xl font-semibold">Pam Beesly Halpert</p>
						<p className="text-base font-default text-dark-blue">Office Administrator</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Daryyl} alt="Darryl Philbin" class=""></img>
						<p className="font-sans text-xl font-semibold">Darryl Philbin</p>
						<p className="text-base font-default text-dark-blue">Shipping Manager</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Jim} alt="Jim Halpert" class=""></img>
						<p className="font-sans text-xl font-semibold">Jim Halpert</p>
						<p className="text-base font-default text-dark-blue">Sales Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Andy} alt="Andy Bernard" class=""></img>
						<p className="font-sans text-xl font-semibold">Andy Bernard</p>
						<p className="text-base font-default text-dark-blue">Sales Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Phyllis} alt="Phyllis Vance" class=""></img>
						<p className="font-sans text-xl font-semibold">Phyllis Vance</p>
						<p className="text-base font-default text-dark-blue">Sales Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Stanley} alt="Stanley Hudson" class=""></img>
						<p className="font-sans text-xl font-semibold">Stanley Hudson</p>
						<p className="text-base font-default text-dark-blue">Sales Department</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Kelly} alt="Kelly Kapoor" class=""></img>
						<p className="font-sans text-xl font-semibold">Kelly Kapoor</p>
						<p className="text-base font-default text-dark-blue">Customer Service Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Ryan} alt="Ryan Howard" class=""></img>
						<p className="font-sans text-xl font-semibold">Ryan Howard</p>
						<p className="text-base font-default text-dark-blue">Temp</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Meredith} alt="Meredith Palmer" class=""></img>
						<p className="font-sans text-xl font-semibold">Meredith Palmer</p>
						<p className="text-base font-default text-dark-blue">Supplier Relations</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Creed} alt="Creed Bratton" class=""></img>
						<p className="font-sans text-xl font-semibold">Creed Bratton</p>
						<p className="text-base font-default text-dark-blue">Quality Assurance</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Angela} alt="Angela Martin" class=""></img>
						<p className="font-sans text-xl font-semibold">Angela Martin</p>
						<p className="text-base font-default text-dark-blue">Head of Accounting</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Oscar} alt="Oscar Martinez" class=""></img>
						<p className="font-sans text-xl font-semibold">Oscar Martinez</p>
						<p className="text-base font-default text-dark-blue">Accounting Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Kevin} alt="Kevin Malone" class=""></img>
						<p className="font-sans text-xl font-semibold">Kevin Malone</p>
						<p className="text-base font-default text-dark-blue">Accounting Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Toby} alt="Toby Flenderson" class=""></img>
						<p className="font-sans text-xl font-semibold">Toby Flenderson</p>
						<p className="text-base font-default text-dark-blue">Human Resource Manager</p>
					</div>
				</div>
			</div>

			<div className="px-8 py-16 bg-sky-blue about--staff-slider">
				<div className="pt-1.5">
				<Slider {...settings}>
					<div className="slider--card">
						<img src={Pose} alt="Manager Michael Scott and staff" class=""></img>
					</div>
					<div className="slider--card">
						<img src={Dinner} alt="Dunder Mifflin staff out to dinner" class=""></img>
					</div>
					<div className="slider--card">
						<img src={HoldUp} alt="Staff playing Belles, Bourbon, and Bullets" class=""></img>
					</div>
					<div className="slider--card">
						<img src={Nonsense} alt="6 days since the office's last nonse" class=""></img>
					</div>
					<div className="slider--card">
						<img src={Halloween} alt="Staff at office Halloween party" class=""></img>
					</div>
					<div className="slider--card">
						<img src={Dundies} alt="Michael Scott presenting the Dunder Mifflin Dundie Awards" class=""></img>
					</div>
					<div className="slider--card">
						<img src={JimPam} alt="Office romance" class=""></img>
					</div>
				</Slider>
				</div>
			</div>
			
		<Footer/>

		</main>
	)
}

export default About