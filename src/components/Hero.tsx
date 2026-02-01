const Hero = () => {
	return (
		<section className='min-h-screen flex items-center justify-center bg-linear-to-b from-slate-50 to-white'>
			<div className='max-w-4xl mx-auto px-6 text-center'>
				<h1 className='text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight'>
					AI/ML Engineer
				</h1>

				<p className='text-xl text-slate-600 mb-12 max-w-2xl mx-auto'>
					Building intelligent systems that understand and enhance
					human experience
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<a
						href='#projects'
						className='px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200'
					>
						View Work
					</a>
					<a
						href='mailto:ejidikeesther@gmail.com'
						className='px-8 py-3 border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors duration-200'
					>
						Get in Touch
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
