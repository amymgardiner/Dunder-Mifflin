import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {

	return (

		<main>

		<Navbar/>

			<header className="wrapper">
				<h1 className="pt-20 pb-8 font-sans text-4xl font-semibold text-center">Welcome to Dunder Mifflin Paper Co!</h1>
				<p>At Dunder Mifflin, we believe in the power of paper to connect, create, and inspire. Since our founding, we've been dedicated to providing top-quality paper products to businesses of all sizes, from the bustling corporate office to the cozy home workspace. Our commitment to excellence and innovation has made us a trusted name in the paper industry.</p>
			</header>

			<section className="about--hero-image"></section>
			
			<section>
				<h2>Our Story</h2>
				<p>Founded in 1949, Dunder Mifflin has a rich history of serving the paper needs of communities across the nation. From our humble beginnings as a local paper supplier, we've grown into a leading provider of paper and office products, with a presence in [Number] states. Over the years, we've adapted to the changing landscape of business and technology, but our core values remain the same: quality, reliability, and exceptional customer service.</p>
			</section>
			
		<Footer/>

		</main>
	)
}

export default About