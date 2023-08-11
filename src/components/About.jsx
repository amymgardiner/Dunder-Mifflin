import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Tools
import ScrollAnimation from 'react-animate-on-scroll';

// Images
import ContactSVG from '../assets/img/undraw_everywhere_together_re_xe5a.svg'

const About = () => {

	return (

		<main>

		<Navbar/>

			{/* header */}
			<header className="wrapper">
				<div className="px-32 py-20 md:px-0">
					<h1 className="font-sans text-4xl font-semibold text-center md:text-3xl">Welcome to Dunder Mifflin Paper Co!</h1>
					<p className="pt-8 text-xl leading-loose font-default md:text-lg">At Dunder Mifflin, we believe in the power of paper to connect, create, and inspire. Since our founding, we've been dedicated to providing top-quality paper products to businesses of all sizes, from the bustling corporate office to the cozy home workspace. Our commitment to excellence and innovation has made us a trusted name in the paper industry.</p>
				</div>
			</header>

			{/* full-width picture */}
			<section className="about--hero-image"></section>

			{/* main section with cards */}
			<section className="py-32 md:py-20 wrapper about--grid-section">

				<div className="px-32 pb-20 md:pb-12 md:px-0">
					<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Our Story</h2>
					<p className="pt-8 text-xl leading-loose font-default md:text-lg">Founded in 1949, Dunder Mifflin has a rich history of serving the paper needs of communities across the nation. From our humble beginnings as a local paper supplier, we've grown into a leading provider of paper and office products, with a presence in New Hampshire, New York, Ohio, and Pennsylvania. Over the years, we've adapted to the changing landscape of business and technology, but our core values remain the same: quality, reliability, and exceptional customer service.</p>
				</div>

				{/* cards */}
				<div className="grid grid-cols-3 gap-12 md:grid-cols-1">
					
					<div className="p-8 border-2 border-dark-blue rounded-2xl">
						<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">What Sets Us Apart</h2>
						<p className="pt-8 text-xl leading-loose font-default md:text-lg">Dunder Mifflin is more than just a paper company; we're a partner in your success. We understand that the right paper can make a difference in your projects, presentations, and everyday office tasks. That's why we offer a diverse range of paper products, from standard office supplies to specialty papers designed to meet the unique needs of creative professionals.</p>
					</div>

					<div className="p-8 border-2 border-dark-blue rounded-2xl">
						<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Our Team</h2>
						<p className="pt-8 text-xl leading-loose font-default md:text-lg">Our dedicated team is the backbone of our company. From our passionate sales representatives to our efficient distribution network, every member of the Dunder Mifflin family is committed to delivering the best paper solutions for your business. We pride ourselves on fostering a culture of collaboration, innovation, and continuous improvement.</p>
					</div>

					<div className="p-8 border-2 border-dark-blue rounded-2xl">
						<h2 className="font-sans text-3xl font-semibold text-center md:text-2xl">Community Engagement</h2>
						<p className="pt-8 text-xl leading-loose font-default md:text-lg">At Dunder Mifflin, we believe in giving back to the communities that have supported us throughout our journey. We actively participate in local initiatives, environmental conservation efforts, and educational programs, striving to make a positive impact wherever we operate.</p>
					</div>

				</div>
			</section>

			{/* ending section */}
			<summary className="flex flex-col items-center justify-center py-20 home--supplies wrapper">
					<div className="grid grid-cols-2 gap-16 px-10 mt-12 md:mt-4 md:grid-cols-1 md:px-0">
						<div className="max-w-[95%] md:max-w-[100%] md:px-8 sm:!px-0 bg-light-blue flex items-center rounded-2xl">
							<ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
								<div className="p-8 sm:p-6">
									<h2 className="pb-6 font-sans text-3xl font-semibold text-center md:text-2xl">Get in Touch</h2>
									<p className="text-xl leading-loose md:text-lg font-default">Whether you're looking for high-quality paper products, personalized service, or a reliable partner for your paper needs, Dunder Mifflin is here for you. We invite you to explore our wide range of products, get to know our team, and experience the difference of working with a company that truly values your success.</p>
								</div>
							</ScrollAnimation>
						</div>
						<div className="flex items-center">
							<ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
								<div>
									<img src={ContactSVG} alt="Illustration of woman at a printer" className="max-h-96 aspect-[5/3]"></img>
								</div>
							</ScrollAnimation>
						</div>
					</div>
			</summary>
			
		<Footer/>

		</main>
	)
}

export default About