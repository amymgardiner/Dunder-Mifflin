import React from 'react'

// Components
import Navbar from './Navbar'
// import Footer from './Footer'

// Tools
import Slider from "react-slick";

// images and video
import TaiChi from '../assets/img/office-580.webp'
import HoldUp from '../assets/img/office_standoff-2knmi1e.jpg'
import Nonsense from '../assets/img/l-intro-1599689234-ftr.jpg'
import Pose from '../assets/img/60369185bed5c50011a2c48a.webp'
import Dinner from '../assets/img/bdv4x4hliafqtjww5utc.webp'
import Halloween from '../assets/img/best-the-office-halloween-episodes-ever-906-1570557915.jpg'
import Yay from '../assets/img/l-intro-1665071886.jpg'
import Dundies from '../assets/img/MV5BMjc2NjUxYTUtMzliMi00ZWE3LWFkNmYtYmU0NjA3OGE2NzcwXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg'
import JimPam from '../assets/img/MV5BMzVkN2RhMTctZGNkYS00MzdlLTk4YzEtMjlkODAzZGRmMDkzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'

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

			<div>
			 <Slider {...settings}>
			 	<div>
				 	<img src={Pose} alt="Manager Michael Scott and staff" class=""></img>
				</div>
				<div>
					<img src={Dinner} alt="Dunder Mifflin staff out to dinner" class=""></img>
				</div>
				<div>
					<img src={TaiChi} alt="Dwight leading staff in tai chi" class=""></img>
				</div>
				<div>
					<img src={HoldUp} alt="Staff playing Belles, Bourbon, and Bullets" class=""></img>
				</div>
				<div>
					<img src={Nonsense} alt="6 days since the office's last nonse" class=""></img>
				</div>
				<div>
					<img src={Halloween} alt="Staff at office Halloween party" class=""></img>
				</div>
				<div>
					<img src={Yay} alt="Dunder Mifflin staff cheering at work" class=""></img>
				</div>
				<div>
					<img src={Dundies} alt="Michael Scott presenting the Dunder Mifflin Dundie Awards" class=""></img>
				</div>
				<div>
					<img src={JimPam} alt="Office romance" class=""></img>
				</div>
			 </Slider>
			</div>

		</main>
	)
}

export default About