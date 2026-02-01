import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
	const projects = [
		{
			title: "Speech Recognition System",
			description:
				"A speaker-dependent speech recognizer model trained to recognize 10 names ",
			image: "https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg",
			tags: ["Librosa", "Keras"],
			github: "https://github.com/Queen-esther01/audio-name-recognition",
			demo: "https://audio-name-recognition.streamlit.app/",
		},
		// {
		// 	title: 'Document Intelligence',
		// 	description: 'OCR and document analysis with transformers',
		// 	image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600',
		// 	tags: ['NLP', 'OCR', 'FastAPI'],
		// 	github: 'https://github.com'
		// },
		// {
		// 	title: 'Emotion Recognition',
		// 	description: 'Privacy-focused emotion detection on-device',
		// 	image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
		// 	tags: ['Mobile ML', 'Privacy', 'TensorFlow Lite'],
		// 	github: 'https://github.com'
		// },
		// {
		// 	title: 'Semantic Search',
		// 	description: 'Context-aware search with vector embeddings',
		// 	image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
		// 	tags: ['LLMs', 'Vector DB', 'Search'],
		// 	github: 'https://github.com',
		// 	demo: 'https://demo.com'
		// }
	];

	return (
		<section id="projects" className="py-20 bg-slate-50">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-3xl font-light text-slate-900 mb-12 text-center">
					Selected Work
				</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{
						projects.map((project) => (
							<div
								key={project.title}
								className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover"
								/>
						
								<div className="p-6">
									<h3 className="text-lg font-medium text-slate-900 mb-2">
										{project.title}
									</h3>
									
									<p className="text-slate-600 mb-4">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
											>
												{tag}
											</span>
										))}
									</div>

								<div className="flex items-center space-x-4">
									<a
										href={project.github}
										className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors duration-200"
									>
										<Github className="h-4 w-4" />
										<span className="text-sm">Code</span>
									</a>
									{
										project.demo && (
											<a
												href={project.demo}
												className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors duration-200"
											>
												<ExternalLink className="h-4 w-4" />
												<span className="text-sm">Demo</span>
											</a>
										)
									}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;