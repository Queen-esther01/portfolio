import { ExternalLink } from 'lucide-react';

const Writings = () => {
	const articles = [
		{
			title: 'Motion Detection in Computer Vision',
			excerpt: 'A comprehensive guide to motion detection using OpenCV',
			date: '2025-01-01',
			url: 'https://dev.to/catheryn/motion-detection-in-opencv-explained-in-depth-di6'
		},
		{
			title: 'Calculating Adaptive Threshold in OpenCV',
			excerpt: 'A guide to calculating adaptive threshold using OpenCV',
			date: '2024-07-12',
			url: 'https://dev.to/catheryn/calculating-adaptive-threshold-in-opencv-1hh3'
		},
		{
			title: 'Canny Edge Detection',
			excerpt: 'Understanding Canny Edge Detection in OpenCV',
			date: '2024-11-19',
			url: 'https://dev.to/catheryn/canny-edge-detection-3h4l'
		}
	];

	return (
		<section id="writings" className="py-20 bg-white">
			<div className="max-w-4xl mx-auto px-6">
				<h2 className="text-3xl font-light text-slate-900 mb-12 text-center">
					Writing
				</h2>

				<div className="space-y-8">
					{
						articles.map((article) => (
							<article
								key={article.title}
								className="border-b border-slate-200 pb-8 last:border-b-0"
							>
								<div className="flex items-start justify-between">
									<div className="flex-1">
										<h3 className="text-lg font-medium text-slate-900 mb-2">
											{article.title}
										</h3>
										<p className="text-slate-600 mb-2">
											{article.excerpt}
										</p>
										<time className="text-sm text-slate-500">
											{
												new Date(article.date).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric'
												})
											}
										</time>
									</div>
									<a
										href={article.url}
										className="ml-4 text-slate-600 hover:text-slate-900 transition-colors duration-200"
									>
										<ExternalLink className="h-4 w-4" />
									</a>
								</div>
							</article>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						href="https://dev.to/catheryn"
						className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
					>
						View all articles →
					</a>
				</div>
			</div>
		</section>
	);
};

export default Writings;