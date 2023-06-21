import React from 'react'
import Hammermill from '../assets/img/Essendant Inc_HAM105007xx02xxf9764d.avif';
import HP from '../assets/img/3798345_o03_092122.webp';
import PrinterWorks from '../assets/img/Printworks-Multipurpose-Paper.webp';
import PrintingSVG from '../assets/img/undraw_photocopy_re_gln4.svg'
import PaintingSVG from '../assets/img/undraw_specs_re_546x.svg'
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
	return (

		<main>
			<div className="font-sans bg-center bg-cover home--hero wrapper">
				<div className="py-24 pl-24 md:py-10 md:pl-8 home--hero-text">
					<h2 className="text-5xl font-bold max-w-[35%] leading-snug">At Dunder Mifflin Paper Company, we understand the importance of a well-stocked office.</h2>
					<p className="mt-16 text-2xl leading-normal text-white">We have everything you need to keep your workspace running smoothly.</p>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center my-20 wrapper home--paper">
				<h2 className="font-sans text-4xl font-semibold">Paper Perfection for Every Occasion</h2>
				<div className="grid grid-cols-2 gap-16 px-10 mt-12">
					<div className="max-w-[95%]">
						<ScrollAnimation animateIn="fadeInLeft">
							<p className="text-xl leading-loose font-default">Explore our vast selection of paper products, from standard printer paper and envelopes to specialized options like glossy photo paper and cardstock. We offer a wide range of sizes, weights, and finishes to suit all your printing needs. Looking for environmentally friendly options? We have a variety of recycled and sustainable paper choices too!</p>
							<button className="mt-10 text-lg button--primary">Shop Now</button>
						</ScrollAnimation>
					</div>
					<div className="">
						<ScrollAnimation animateIn="fadeInRight">
							<div className="grid grid-cols-2 grid-rows-2">
								<div></div>
								<img src={PrintingSVG} alt="Illustration of woman at a printer"></img>
								<img src={PaintingSVG} alt="Illustration of woman at a printer"></img>
								<div></div>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>

			<div className="flex flex-col text-center home--feature wrapper">

			</div>

			<div className="home--products">
			</div>

			<div className="home--contact">
			</div>
		</main>
	)
}

export default Home