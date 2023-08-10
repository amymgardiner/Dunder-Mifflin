import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Tools
import Slider from "react-slick";

// images and video
import TaiChi from '../assets/img/office-580.webp';
import HoldUp from '../assets/img/office_standoff-2knmi1e.jpg';
import Nonsense from '../assets/img/l-intro-1599689234-ftr.jpg';
import Pose from '../assets/img/60369185bed5c50011a2c48a.webp';
import Dinner from '../assets/img/bdv4x4hliafqtjww5utc.webp';
import Halloween from '../assets/img/best-the-office-halloween-episodes-ever-906-1570557915.jpg';
import Yay from '../assets/img/l-intro-1665071886.jpg';
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
				<h1 className="py-16 font-sans text-4xl font-semibold text-center">The People Person's Paper People</h1>
			</header>

			<div className="pt-4 pb-20 about--staff-photos wrapper">
				<div className="grid grid-cols-4 text-center">
					<div>
						<img src={Michael} alt="Michael Scott" class=""></img>
						<p>Michael Scott</p>
					</div>
					<div>
						<img src={Dwight} alt="Dwight Schrute" class=""></img>
						<p>Dwight Schrute</p>
					</div>
					<div>
						<img src={Pam} alt="Pam Beesly Halpert" class=""></img>
						<p>Pam Beesly Halpert</p>
					</div>
					<div>
						<img src={Jim} alt="Jim Halpert" class=""></img>
						<p>Jim Halpert</p>
					</div>
				</div>
				<div className="grid grid-cols-4 text-center">
					<div>
						<img src={Andy} alt="Andy Bernard" class=""></img>
						<p>Andy Bernard</p>
					</div>
					<div>
						<img src={Daryyl} alt="Darryl Philbin" class=""></img>
						<p>Darryl Philbin</p>
					</div>
					<div>
						<img src={Kelly} alt="Kelly Kapoor" class=""></img>
						<p>Kelly Kapoor</p>
					</div>
					<div>
						<img src={Ryan} alt="Ryan Howard" class=""></img>
						<p>Ryan Howard</p>
					</div>
				</div>
				<div className="grid grid-cols-4 text-center">
					<div>
						<img src={Phyllis} alt="Phyllis Vance" class=""></img>
						<p>Phyllis Vance</p>
					</div>
					<div>
						<img src={Stanley} alt="Stanley Hudson" class=""></img>
						<p>Stanley Hudson</p>
					</div>
					<div>
						<img src={Meredith} alt="Meredith Palmer" class=""></img>
						<p>Meredith Palmer</p>
					</div>
					<div>
						<img src={Creed} alt="Creed Bratton" class=""></img>
						<p>Creed Bratton</p>
					</div>
				</div>
				<div className="grid grid-cols-4 text-center">
					<div>
						<img src={Angela} alt="Angela Martin" class=""></img>
						<p>Angela Martin</p>
					</div>
					<div>
						<img src={Oscar} alt="Oscar Martinez" class=""></img>
						<p>Oscar Martinez</p>
					</div>
					<div>
						<img src={Kevin} alt="Kevin Malone" class=""></img>
						<p>Kevin Malone</p>
					</div>
					<div>
						<img src={Toby} alt="Toby Flenderson" class=""></img>
						<p>Toby Flenderson</p>
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
						<img src={TaiChi} alt="Dwight leading staff in tai chi" class=""></img>
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
						<img src={Yay} alt="Dunder Mifflin staff cheering at work" class=""></img>
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