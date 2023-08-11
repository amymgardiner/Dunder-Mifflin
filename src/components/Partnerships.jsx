import React from 'react';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Tools
import { TbPointFilled } from "react-icons/tb";

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
			<header className="pt-20 pb-16 text-center wrapper">
				<h1 className="font-sans text-4xl font-semibold md:text-3xl text-dark-blue">Unlock Your Business's Full Potential with Dunder Mifflin Partnership Tiers</h1>
				<p className="px-20 mt-8 text-xl leading-loose md:text-lg font-default md:px-0">At Dunder Mifflin, we understand that every business is unique. That's why we offer a range of partnership tiers designed to meet your specific needs, whether you're a small start-up or a large enterprise. When you choose Dunder Mifflin as your trusted supplier of paper, office supplies, printers, and more, you're not just getting products - you're gaining a strategic partner that's dedicated to your success.</p>
				<p className="px-20 mt-8 text-xl leading-loose md:text-lg font-default md:px-0">No matter which partnership tier you choose, Dunder Mifflin is committed to providing exceptional value, reliable products, and unmatched support. Join our family of satisfied partners and discover how working with Dunder Mifflin can take your business to new heights.</p>
				<p className="px-20 mt-8 text-xl leading-loose md:text-lg font-default md:px-0">Contact us today to explore the partnership tier that best suits your business needs and discover the Dunder Mifflin advantage..</p>
			</header>

			{/* pricing grid */}
			<section className="pb-32 wrapper">
				<div className="grid grid-cols-4 gap-8 lg:grid-cols-2 sm:!grid-cols-1">
					
					<div className="p-4 border-2 border-dark-blue rounded-2xl partnership--grid-card">
						<img src={One} alt="Number One" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Office Essentials</h2>
						<p className="text-lg leading-loose font-default">Get the basics covered with our Office Essentials Partnership. Enjoy competitive bulk pricing on our extensive range of paper and office supplies, ensuring that your business runs smoothly without breaking the bank.</p>
						<p className="mt-8 font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul style={{ listStyleType: 'disc' }} className="px-4">
							<li className="mt-2 text-base leading-loose font-default">Cost Savings: Access exclusive bulk pricing, saving you money on everyday office essentials.</li>
							<li className="mt-2 text-base leading-loose font-default">Reliability: Ensure a steady supply of high-quality products to keep your operations running seamlessly.</li>
							<li className="mt-2 text-base leading-loose font-default">Convenience: Simplify your procurement process with a single, trusted supplier for all your office needs.</li>
						</ul>
					</div>

					<div className="p-4 border-2 border-dark-blue rounded-2xl partnership--grid-card">
						<img src={Two} alt="Number Two" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Printing Solutions</h2>
						<p className="text-lg leading-loose font-default">Take your printing capabilities to the next level with our Printing Solutions Partnership. From high-quality printers to top-tier paper, unleash the power of professional-grade printing for your business.</p>
						<p className="mt-8 font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul style={{ listStyleType: 'disc' }} className="px-4">
							<li className="mt-2 text-base leading-loose font-default">Premium Printing: Elevate your printed materials with top-tier paper and cutting-edge printing technology.</li>
							<li className="mt-2 text-base leading-loose font-default">Custom Solutions: Receive personalized printing recommendations tailored to your business needs.</li>
							<li className="mt-2 text-base leading-loose font-default">Cost-Effective: Enjoy bulk pricing on printers and supplies, reducing your long-term printing costs.</li>
						</ul>
					</div>

					<div className="p-4 border-2 border-dark-blue rounded-2xl partnership--grid-card">
						<img src={Three} alt="Number Three" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Total Office Transformation</h2>
						<p className="text-lg leading-loose font-default">Experience a complete office transformation with our Total Office Partnership. Elevate your workspace with innovative solutions, sustainability initiatives, and unparalleled support.</p>
						<p className="mt-8 font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul style={{ listStyleType: 'disc' }} className="px-4">
							<li className="mt-2 text-base leading-loose font-default">Sustainability Focus: Align your business with eco-friendly practices, including recycling programs and sustainable office supplies.</li>
							<li className="mt-2 text-base leading-loose font-default">Dedicated Support: Gain access to our expert team for personalized assistance and product recommendations.</li>
							<li className="mt-2 text-base leading-loose font-default">Value-Added Services: Unlock exclusive perks, like priority shipping and custom ordering options.</li>
						</ul>
					</div>

					<div className="p-4 border-2 border-dark-blue rounded-2xl partnership--grid-card">
						<img src={Four} alt="Number Four" className="max-w-[5rem] mx-auto"></img>
						<h2 className="font-sans text-xl font-semibold leading-loose text-center">Enterprise-Level</h2>
						<p className="text-lg leading-loose font-default">For large-scale enterprises, our Enterprise Partnership offers comprehensive solutions designed to streamline operations, optimize costs, and support growth.</p>
						<p className="mt-8 font-sans text-lg font-semibold leading-loose">Benefits:</p>
						<ul style={{ listStyleType: 'disc' }} className="px-4">
							<li className="mt-2 text-base leading-loose font-default">Scalability: Easily scale your procurement to match your business's growth and changing needs.</li>
							<li className="mt-2 text-base leading-loose font-default">Strategic Partnership: Collaborate with our team to create customized solutions that drive efficiency and cost savings.</li>
							<li className="mt-2 text-base leading-loose font-default">Logistics Expertise: Benefit from optimized shipping, handling, and distribution services for large quantities.</li>
						</ul>
					</div>
				</div>
			</section>

			{/* community partners */}
			<section className="py-20 wrapper partnerships--community-section">
				<div className="px-16 pb-4 text-center md:px-0">
					<h2 className="font-sans text-4xl font-semibold md:text-3xl">Dunder Mifflin: Where partnership meets purpose.</h2>
					<p className="pt-4 text-2xl leading-loose font-default md:text-xl">At Dunder Mifflin, we believe that great partnerships build strong communities and a sustainable future. Our commitment to quality, innovation, and responsible business practices extends beyond the walls of our offices. We're proud to collaborate with local businesses, support eco-friendly initiatives, and make a positive impact through volunteerism and charitable giving.</p>
				</div>
				<div className="px-16 pt-8 md:px-0">
					<h3 className="flex font-sans text-3xl font-semibold md:text-2xl"><TbPointFilled/>Local Business Collaborations</h3>
					<p className="px-8 mt-4 text-xl leading-loose md:px-4 md:text-lg font-default">We're honored to work hand-in-hand with some of the finest local businesses, just as we're known for in the Scranton area. From "Alfredo's Pizza Cafe," where we celebrate great food, to "Poor Richard's Pub," where good times are always on tap, these partnerships bring us closer to the heart of Scranton.</p>
				</div>
				<div className="px-16 pt-8 md:px-0">
					<h3 className="flex font-sans text-3xl font-semibold md:text-2xl"><TbPointFilled/>A Sustainable Focus: Recycling Paper Partnerships</h3>
					<p className="px-8 mt-4 text-xl leading-loose md:text-lg font-default md:px-4">Dunder Mifflin is more than just a paper company; we're a steward of the environment. We proudly collaborate with recycling champions like "Hooters," who have demonstrated a commitment to sustainability through their innovative recycling programs. Together, we're reducing our carbon footprint, one sheet of paper at a time.</p>
				</div>
				<div className="px-16 pt-8 md:px-0">
					<h3 className="flex font-sans text-3xl font-semibold md:text-2xl"><TbPointFilled/>Community Support: Volunteering and Non-Profits</h3>
					<p className="px-8 mt-4 text-xl leading-loose md:text-lg font-default md:px-4">Giving back is a fundamental part of the Dunder Mifflin ethos. We actively engage with local non-profits such as "The Children's Hospital" and "The Michael Scott Foundation," dedicated to making a difference in the lives of children and families. Our team is also passionate about volunteering, whether it's cleaning up the local park or helping out at the "Golden Ticket Charity."</p>
				</div>
				<div className="px-16 pt-8 md:px-0">
					<h3 className="flex font-sans text-3xl font-semibold md:text-2xl"><TbPointFilled/>Innovative Collaborations</h3>
					<p className="px-8 mt-4 text-xl leading-loose md:text-lg font-default md:px-4">We're always seeking new and exciting partnerships to enhance our products and services. Whether it's joining forces with technology leaders to optimize our office solutions or partnering with educational institutions to empower the next generation, Dunder Mifflin remains at the forefront of innovation.</p>
				</div>
				<div className="px-16 pt-8 md:px-0">
					<h3 className="flex font-sans text-3xl font-semibold md:text-2xl"><TbPointFilled/>Join Us in Building a Brighter Future</h3>
					<p className="px-8 mt-4 text-xl leading-loose md:text-lg font-default md:px-4">As we continue to expand our network of partners, we invite you to be a part of our journey. Together, we can achieve remarkable things, support our community, and work towards a more sustainable and prosperous future. Contact us today to explore partnership opportunities that align with our values and your business objectives.</p>
				</div>
			</section>
			
		<Footer/>

		</main>
	)
}

export default Partnerships