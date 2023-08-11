import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Images
import One from '../assets/img/9023668_number_circle_one_fill_icon.svg'
import Two from '../assets/img/9023576_number_circle_two_fill_icon.svg'
import Three from '../assets/img/9023759_number_circle_three_fill_icon.svg'
import Four from '../assets/img/9023575_number_circle_four_fill_icon.svg'

const Partnerships = () => {

	return (

		<main>

		<Navbar/>

			{/* header */}
			<header className="wrapper">
				<h1 className="pt-20 pb-12 font-sans text-4xl font-semibold text-center md:text-3xl text-dark-blue">Unlock Your Business's Full Potential with Dunder Mifflin Partnership Tiers</h1>
			</header>

			<section className="wrapper">
				<div className="grid grid-cols-4 gap-8 lg:grid-cols-2 sm:!grid-cols-1">
					<div className="p-4 border-2 border-dark-blue rounded-2xl">
						<img src={One} alt="Number One" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Office Essentials</h2>
						<p className="text-lg leading-loose font-default">Get the basics covered with our Office Essentials Partnership. Enjoy competitive bulk pricing on our extensive range of paper and office supplies, ensuring that your business runs smoothly without breaking the bank.</p>
						<p className="font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul>
							<li className="text-base leading-loose font-default">Cost Savings: Access exclusive bulk pricing, saving you money on everyday office essentials.</li>
							<li className="text-base leading-loose font-default">Reliability: Ensure a steady supply of high-quality products to keep your operations running seamlessly.</li>
							<li className="text-base leading-loose font-default">Convenience: Simplify your procurement process with a single, trusted supplier for all your office needs.</li>
						</ul>
					</div>

					<div className="p-4 border-2 border-dark-blue rounded-2xl">
						<img src={Two} alt="Number Two" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Printing Solutions</h2>
						<p className="text-lg leading-loose font-default">Take your printing capabilities to the next level with our Printing Solutions Partnership. From high-quality printers to top-tier paper, unleash the power of professional-grade printing for your business.</p>
						<p className="font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul>
							<li className="text-base leading-loose font-default">Premium Printing: Elevate your printed materials with top-tier paper and cutting-edge printing technology.</li>
							<li className="text-base leading-loose font-default">Custom Solutions: Receive personalized printing recommendations tailored to your business needs.</li>
							<li className="text-base leading-loose font-default">Cost-Effective: Enjoy bulk pricing on printers and supplies, reducing your long-term printing costs.</li>
						</ul>
					</div>

					<div className="p-4 border-2 border-dark-blue rounded-2xl">
						<img src={Three} alt="Number Three" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Total Office Transformation</h2>
						<p className="text-lg leading-loose font-default">Experience a complete office transformation with our Total Office Partnership. Elevate your workspace with innovative solutions, sustainability initiatives, and unparalleled support.</p>
						<p className="font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul>
							<li className="text-base leading-loose font-default">Sustainability Focus: Align your business with eco-friendly practices, including recycling programs and sustainable office supplies.</li>
							<li className="text-base leading-loose font-default">Dedicated Support: Gain access to our expert team for personalized assistance and product recommendations.</li>
							<li className="text-base leading-loose font-default">Value-Added Services: Unlock exclusive perks, like priority shipping and custom ordering options.</li>
						</ul>
					</div>

					<div className="p-4 border-2 border-dark-blue rounded-2xl">
						<img src={Four} alt="Number Four" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Enterprise-Level</h2>
						<p className="text-lg leading-loose font-default">For large-scale enterprises, our Enterprise Partnership offers comprehensive solutions designed to streamline operations, optimize costs, and support growth.</p>
						<p className="font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul>
							<li className="text-base leading-loose font-default">Scalability: Easily scale your procurement to match your business's growth and changing needs.</li>
							<li className="text-base leading-loose font-default">Strategic Partnership: Collaborate with our team to create customized solutions that drive efficiency and cost savings.</li>
							<li className="text-base leading-loose font-default">Logistics Expertise: Benefit from optimized shipping, handling, and distribution services for large quantities.</li>
						</ul>
					</div>
				</div>
			</section>
			
		<Footer/>

		</main>
	)
}

export default Partnerships