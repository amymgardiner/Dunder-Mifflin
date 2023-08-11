import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Tools
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';

// Images
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

const Team = () => {

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
			
			{/* header */}
			<header className="wrapper">
				<h1 className="pt-20 pb-8 font-sans text-4xl font-semibold text-center md:text-3xl">The People Person's Paper People</h1>
			</header>

			{/* employee grid */}
			<section className="pt-4 pb-32 sm:pb-20 about--staff-photos wrapper">
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Michael} alt="Michael Scott"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Michael Scott</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Regional Manager</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Dwight} alt="Dwight Schrute"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Dwight Schrute</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Assistant to the Regional Manager</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Pam} alt="Pam Beesly Halpert"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Pam Beesly Halpert</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Office Administrator</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Daryyl} alt="Darryl Philbin"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Darryl Philbin</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Shipping Manager</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Jim} alt="Jim Halpert"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Jim Halpert</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Sales Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Andy} alt="Andy Bernard"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Andy Bernard</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Sales Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Phyllis} alt="Phyllis Vance"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Phyllis Vance</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Sales Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Stanley} alt="Stanley Hudson"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Stanley Hudson</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Sales Department</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Kelly} alt="Kelly Kapoor"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Kelly Kapoor</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Customer Service</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Ryan} alt="Ryan Howard"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Ryan Howard</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Temp</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Meredith} alt="Meredith Palmer"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Meredith Palmer</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Supplier Relations</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Creed} alt="Creed Bratton"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Creed Bratton</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Quality Assurance</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-8 text-center md:grid-cols-2 md:gap-y-8">
					<div className="max-w-[18.75rem]">
						<img src={Angela} alt="Angela Martin"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Angela Martin</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Head of Accounting</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Oscar} alt="Oscar Martinez"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Oscar Martinez</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Accounting Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Kevin} alt="Kevin Malone"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Kevin Malone</p>
						<p className="text-base font-default text-dark-blue sm:text-sm">Accounting Department</p>
					</div>
					<div className="max-w-[18.75rem]">
						<img src={Toby} alt="Toby Flenderson"></img>
						<p className="font-sans text-xl font-semibold sm:text-base">Toby Flenderson</p>
						<p className="text-base sm:text-sm font-default text-dark-blue">Human Resource Manager</p>
					</div>
				</div>
			</section>

			{/* slider */}
			<section className="px-8 py-16 sm:px-2 bg-sky-blue about--staff-slider">
				<ScrollAnimation animateIn="bounce" animateOnce={true}>
					<h2 className="mb-8 font-sans text-3xl font-semibold text-center md:text-2xl text-dark-blue">
						Joyful Moments at Dunder Mifflin
					</h2>
				</ScrollAnimation>
				<div className="pt-1.5">
				<Slider {...settings}>
					<div className="slider--card">
						<img src={Pose} alt="Manager Michael Scott and staff"></img>
					</div>
					<div className="slider--card">
						<img src={Dinner} alt="Dunder Mifflin staff out to dinner"></img>
					</div>
					<div className="slider--card">
						<img src={HoldUp} alt="Staff playing Belles, Bourbon, and Bullets"></img>
					</div>
					<div className="slider--card">
						<img src={Nonsense} alt="6 days since the office's last nonse"></img>
					</div>
					<div className="slider--card">
						<img src={Halloween} alt="Staff at office Halloween party"></img>
					</div>
					<div className="slider--card">
						<img src={Dundies} alt="Michael Scott presenting the Dunder Mifflin Dundie Awards"></img>
					</div>
					<div className="slider--card">
						<img src={JimPam} alt="Office romance"></img>
					</div>
				</Slider>
				</div>
			</section>
			
		<Footer/>

		</main>
	)
}

export default Team