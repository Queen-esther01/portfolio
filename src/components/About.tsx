

const About = () => {
	return (
		<section id='about' className='py-20 bg-white'>
			<div className='max-w-4xl mx-auto px-6'>
				<div className='grid md:grid-cols-2 gap-16 items-center'>
					<div>
						<h2 className='text-3xl font-light text-slate-900 mb-8'>
							From code to intelligence
						</h2>

						<div className='space-y-6 text-slate-600 leading-relaxed'>
							<p>
								I started as a software engineer, fell in love
								with AI. Now I build end-to-end AI systems - from data and models to products people can
								actually use.
							</p>

							<p>
								Focused on computer vision, neural networks, and
								making AI more human-centered.
							</p>
						</div>
					</div>

					<div className='grid grid-cols-2 gap-4 text-sm'>
						<div className='space-y-4'>
							<div>
								<h3 className='font-medium text-slate-900 mb-2'>
									ML & AI
								</h3>
								<div className='space-y-1 text-slate-600'>
									<div>PyTorch</div>
									<div>TensorFlow</div>
									<div>Computer Vision</div>
									<div>NLP</div>
									<div>Azure AI</div>
								</div>
							</div>
						</div>
						<div className='space-y-4'>
							<div>
								<h3 className='font-medium text-slate-900 mb-2'>
									Engineering
								</h3>
								<div className='space-y-1 text-slate-600'>
									<div>Python</div>
									<div>MLOps</div>
									<div>Cloud</div>
									<div>APIs</div>
									<div>AI Agents</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;