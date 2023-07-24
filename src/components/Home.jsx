import React from 'react'
import PrintingSVG from '../assets/img/undraw_photocopy_re_gln4.svg'
import PresentationSVG from '../assets/img/undraw_progress_data_re_rv4p.svg'
import DeliverySVG from '../assets/img/undraw_delivery_address_re_cjca.svg'
import ContactSVG from '../assets/img/undraw_contact_us_re_4qqt.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import Hammermill from '../assets/img/Essendant Inc_HAM105007xx02xxf9764d.avif';
import HP from '../assets/img/3798345_o03_092122.webp';
import PrinterWorks from '../assets/img/Printworks-Multipurpose-Paper.webp';
import Boise from '../assets/img/125115_o01_boise_splox_speed_loading_reamless_paper.webp';
import LocalAd from '../assets/img/Local Ad  - The Office US - Trim.mp4'
import VideoPoster from '../assets/img/brandi-redd-aJTiW00qqtI-unsplash.jpg'

const Home = () => {
	return (

		<main>
			{/* hero */}
			<div className="relative font-sans bg-center bg-cover home--hero wrapper">
				<div className="pt-24 pb-36 px-28 md:py-16 md:px-8 home--hero-text">
					<h2 className="text-5xl md:text-4xl font-bold max-w-[40%] leading-snug">At Dunder Mifflin Paper Company, we understand the importance of a well-stocked office.</h2>
					<p className="mt-16 text-2xl leading-normal text-white md:mb-8 md:mt-8 md:text-xl">We have everything you need to keep your workspace running smoothly.</p>
				</div>
				<div className="absolute bottom-[-1.5rem] left-1/2 home--hero-arrow"></div>
			</div>

			<div className="py-20 text-center home--about wrapper">
				<div className="px-32">
					<h2 className="font-sans text-4xl font-semibold md:text-3xl">Delivering Quality Paper Solutions Since 1949</h2>
					<p className="mt-8 text-xl leading-loose md:text-lg font-default">At Dunder Mifflin Paper Company, we pride ourselves on being a leading provider of paper products and solutions for businesses in Scranton, PA, and beyond. With over seven decades of experience, we have built a reputation for delivering exceptional service, unmatched reliability, and the highest quality paper products to meet the diverse needs of our customers.</p>
					<p className="mt-4 text-xl leading-loose md:text-lg font-default">At the core of our business philosophy lies a deep commitment to excellence. We understand that every business has unique requirements, and we strive to provide tailored solutions that meet and exceed our customers' expectations.</p>
				</div>
			</div>

			{/* featured products */}
			<div className="flex flex-col items-center justify-center py-20 text-center home--feature wrapper bg-sky-blue">
				<div>
					<h2 className="font-sans text-4xl font-semibold md:text-3xl">Featured Products</h2>
				</div>
				<ScrollAnimation animateIn="zoomIn" animateOnce={true}>
					<div className="grid grid-cols-4 gap-16 mt-12 md:grid-cols-2 sm:!grid-cols-1">
						<img src={Hammermill} alt="Hammermill Copy Plus Copy Paper" class="aspect-square max-h-96 rounded-2xl"></img>
						<img src={Boise} alt="Boise Multi-Use Printer & Copier Paper" class="aspect-square max-h-96 rounded-2xl"></img>
						<img src={HP} alt="HP Office20 Printer & Copier Paper" class="aspect-square max-h-96 rounded-2xl"></img>
						<img src={PrinterWorks} alt="Printworks Multipurpose Paper" class="aspect-square max-h-96 rounded-2xl"></img>
					</div>
				</ScrollAnimation>
			</div>

			{/* video */}
			<div className="flex justify-center py-16 home--video bg-dark-blue">
				<video poster={VideoPoster} controls >
					<source src={LocalAd} type="video/mp4"/>
				</video>
			</div>

			{/* 50/50 paper products */}
			<div className="flex flex-col items-center justify-center py-20 wrapper home--paper">
				<h2 className="font-sans text-4xl font-semibold md:text-3xl">Paper Perfection for Every Occasion</h2>
				<div className="grid grid-cols-2 gap-16 px-10 mt-12 md:grid-cols-1 md:px-0">
					<div className="max-w-[95%] md:max-w-[100%] md:px-8 sm:!px-0 bg-light-blue flex items-center rounded-2xl">
						<ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
							<div className="p-8 sm:p-6">
								<p className="text-xl leading-loose md:text-lg font-default">Explore our vast selection of paper products, from standard printer paper and envelopes to specialized options like glossy photo paper and cardstock. We offer a wide range of sizes, weights, and finishes to suit all your printing needs. Looking for environmentally friendly options? We have a variety of recycled and sustainable paper choices too!</p>
								<button className="mt-10 text-lg button--primary">Shop Now</button>
							</div>
						</ScrollAnimation>
					</div>
					<div className="flex items-center">
						<ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
							<div>
								<img src={PresentationSVG} alt="Illustration of woman giving a presentation" className="max-h-96 aspect-[5/3]"></img>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>

			{/* 50/50 office supplies */}
			<div className="flex flex-col items-center justify-center py-20 home--supplies wrapper">
				<h2 className="font-sans text-4xl font-semibold md:text-3xl">Office Supplies Galore</h2>
					<div className="grid grid-cols-2 gap-16 px-10 mt-12 md:grid-cols-1 md:px-0">
						<div className="flex items-center">
							<ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
								<div>
									<img src={PrintingSVG} alt="Illustration of woman at a printer" className="max-h-96 aspect-[5/3]"></img>
								</div>
							</ScrollAnimation>
						</div>
						<div className="max-w-[95%] md:max-w-[100%] md:px-8 sm:!px-0 bg-light-blue flex items-center rounded-2xl">
							<ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
								<div className="p-8 sm:p-6">
									<p className="text-xl leading-loose md:text-lg font-default">In addition to paper, we have a comprehensive collection of office supplies to keep your workplace organized and efficient. From staplers, pens, and notepads to printers and whiteboards, we've got you covered. Our top-quality products come from trusted brands that guarantee durability and functionality.</p>
									<button className="mt-10 text-lg button--primary">Shop Now</button>
								</div>
							</ScrollAnimation>
						</div>
					</div>
			</div>
			
			{/* 50/50 shipping */}
			<div className="flex flex-col items-center justify-center py-20 home--supplies wrapper">
				<h2 className="font-sans text-4xl font-semibold md:text-3xl">Fast and Reliable Shipping</h2>
					<div className="grid grid-cols-2 gap-16 px-10 mt-12 md:grid-cols-1 md:px-0">
						<div className="max-w-[95%] md:max-w-[100%] md:px-8 sm:!px-0 bg-light-blue flex items-center rounded-2xl">
							<ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
								<div className="p-8 sm:p-6">
									<p className="text-xl leading-loose md:text-lg font-default">We know time is of the essence, and we strive to get your orders to you swiftly. Our efficient shipping services ensure that your paper and office supplies arrive at your doorstep in no time. Sit back, relax, and let us take care of delivering the essentials straight to your office or home.</p>
									<button className="mt-10 text-lg button--primary">Shop Now</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="flex items-center">
							<ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
								<div>
									<img src={DeliverySVG} alt="Illustration of man making a delivery" className="max-h-96 aspect-[5/3]"></img>
								</div>
							</ScrollAnimation>
						</div>
					</div>
			</div>
			
			{/* 50/50 customer service */}
			<div className="flex flex-col items-center justify-center py-20 home--supplies wrapper">
				<h2 className="font-sans text-4xl font-semibold md:text-3xl">Exceptional Customer Service</h2>
					<div className="grid grid-cols-2 gap-16 px-10 mt-12 md:grid-cols-1 md:px-0">
						<div className="flex items-center">
							<ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
								<div>
									<img src={ContactSVG} alt="Illustration of customer service" className="max-h-96 aspect-[5/3]"></img>
								</div>
							</ScrollAnimation>
						</div>
						<div className="max-w-[95%] md:max-w-[100%] md:px-8 sm:!px-0 bg-light-blue flex items-center rounded-2xl">
							<ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
								<div className="p-8 sm:p-6">
									<p className="text-xl leading-loose md:text-lg font-default">At Dunder Mifflin, we take pride in our commitment to customer satisfaction. Our friendly and knowledgeable staff is always ready to assist you with any inquiries, help you find the right products, or provide guidance on optimizing your office supplies. We're here to ensure your experience with us is nothing short of exceptional.</p>
									<button className="mt-10 text-lg button--primary">Contact Us</button>
								</div>
							</ScrollAnimation>
						</div>
					</div>
			</div>
		</main>
	)
}

export default Home