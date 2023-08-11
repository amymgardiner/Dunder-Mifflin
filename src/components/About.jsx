import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {

	return (

		<main>

		<Navbar/>

			<header className="wrapper">
				<div className="px-32 py-20 md:px-0">
					<h1 className="font-sans text-4xl font-semibold text-center md:text-3xl">Welcome to Dunder Mifflin Paper Co!</h1>
					<p className="pt-8 text-xl leading-loose font-default md:text-lg">At Dunder Mifflin, we believe in the power of paper to connect, create, and inspire. Since our founding, we've been dedicated to providing top-quality paper products to businesses of all sizes, from the bustling corporate office to the cozy home workspace. Our commitment to excellence and innovation has made us a trusted name in the paper industry.</p>
				</div>
			</header>

			<section className="about--hero-image"></section>
			
			<section className="wrapper bg-light-blue">
				<div className="px-32 py-20 md:px-0">
					<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Our Story</h2>
					<p className="pt-8 text-xl leading-loose font-default md:text-lg">Founded in 1949, Dunder Mifflin has a rich history of serving the paper needs of communities across the nation. From our humble beginnings as a local paper supplier, we've grown into a leading provider of paper and office products, with a presence in New Hampshire, New York, Ohio, and Pennsylvania. Over the years, we've adapted to the changing landscape of business and technology, but our core values remain the same: quality, reliability, and exceptional customer service.</p>
				</div>
			</section>

			<section className="wrapper">
				<div className="grid grid-cols-3 gap-12">
					
					<div className="border-4 border-black rounded-2xl">
						<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">What Sets Us Apart</h2>
						<p className="pt-8 text-xl leading-loose font-default md:text-lg">Dunder Mifflin is more than just a paper company; we're a partner in your success. We understand that the right paper can make a difference in your projects, presentations, and everyday office tasks. That's why we offer a diverse range of paper products, from standard office supplies to specialty papers designed to meet the unique needs of creative professionals.</p>
					</div>

					<div className="border-4 border-black rounded-2xl">
						<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Our Team</h2>
						<p className="pt-8 text-xl leading-loose font-default md:text-lg">Our dedicated team is the backbone of our company. From our passionate sales representatives to our efficient distribution network, every member of the Dunder Mifflin family is committed to delivering the best paper solutions for your business. We pride ourselves on fostering a culture of collaboration, innovation, and continuous improvement.</p>
					</div>

					<div className="border-4 border-black rounded-2xl">
						<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Community Engagement</h2>
						<p className="pt-8 text-xl leading-loose font-default md:text-lg">At Dunder Mifflin, we believe in giving back to the communities that have supported us throughout our journey. We actively participate in local initiatives, environmental conservation efforts, and educational programs, striving to make a positive impact wherever we operate.</p>
					</div>

				</div>
			</section>

			<section className="wrapper bg-light-blue">
				<div className="px-32 py-20 md:px-0">
					<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Get in Touch</h2>
					<p className="pt-8 text-xl leading-loose font-default md:text-lg">Whether you're looking for high-quality paper products, personalized service, or a reliable partner for your paper needs, Dunder Mifflin is here for you. We invite you to explore our wide range of products, get to know our team, and experience the difference of working with a company that truly values your success.</p>
				</div>
			</section>
			
		<Footer/>

		</main>
	)
}

export default About