import React from 'react'

const Home = () => {
	return (

		<main>
			<div className="w-screen font-sans bg-center bg-cover home--hero wrapper">
				<div className="py-20 pl-24 md:py-10 md:pl-8 home--hero-text">
					<h2 className="text-5xl font-bold max-w-[35%] leading-snug">At Dunder Mifflin Paper Company, we understand the importance of a well-stocked office.</h2>
					<p className="mt-16 text-2xl leading-normal text-white">We have everything you need to keep your workspace running smoothly.</p>
					<button className="mt-10 text-lg button--primary">Shop Now</button>
				</div>
			</div>

			<div className="home--feature">
			</div>

			<div className="home--products">
			</div>

			<div className="home--contact">
			</div>
		</main>
	)
}

export default Home