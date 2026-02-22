import { Music, BookOpen, Coffee, Sparkles } from 'lucide-react';

const Personal = () => {
	const interests = [
		{ icon: Music, label: 'Music', description: 'Dream Pop & Baroque', url: 'https://open.spotify.com/track/0Bhy8jdEWfxetmhu2wTSLr?si=c8b79305f00f481f' },
		{ icon: BookOpen, label: 'Reading', description: 'Fantasy & Historical Fiction' },
		{ icon: Coffee, label: 'Tea', description: 'Lemon and ginger tea' }
	];

	const currently = [
		{ label: 'Reading', value: 'The seven husbands of Evelyn Hugo' },
		{ label: 'Watching', value: 'Dark Moon Anime' },
		{ label: 'Listening', value: 'Long long time - Linda Ronstadt' },
		{ label: 'Learning', value: 'Evaluation Metrics / NLP Preprocessing' },
	];

	const funFacts = [
		"I debug in my head while I'm having a bath",
		"Firm believer that music fixes everything",
		'Anime, yes - Water breathing 11th form: Dead Calm ✨',
		'I collect way too many browser tabs',
	];

	return (
		<section id="personal" className="py-20 bg-white">
			<div className="max-w-5xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-light text-slate-900 mb-4">
						Beyond the Code
					</h2>
					<p className="text-slate-600 max-w-xl mx-auto">
						A little glimpse into who I am when I&apos;m not building things
					</p>
				</div>

				{/* Interests Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
					{interests.map((interest) => (
						<div
							key={interest.label}
							className={"group p-4 bg-slate-50 rounded-xl text-center " + (interest.url ? 'cursor-pointer hover:bg-slate-100 transition-all duration-300' : '')}
							onClick={() => interest.url ? window.open(interest.url, '_blank') : null}
						>
							<interest.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-600 mx-auto mb-3 transition-colors duration-300" />
							<h3 className="font-medium text-slate-900 text-sm mb-1">
								{interest.label}
							</h3>
							<p className="text-xs text-slate-500">
								{interest.description}
							</p>
						</div>
					))}
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Currently Section */}
					<div>
						<h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
							<Sparkles className="h-5 w-5 text-amber-500" />
							Currently
						</h3>
						<div className="space-y-4">
							{currently.map((item) => (
								<div
									key={item.label}
									className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
								>
									<span className="text-xs font-medium text-slate-400 uppercase tracking-wide min-w-[70px]">
										{item.label}
									</span>
									<span className="text-slate-700 text-sm">
										{item.value}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Fun Facts Section */}
					<div>
						<h3 className="text-lg font-medium text-slate-900 mb-6">
							Fun Facts
						</h3>
						<ul className="space-y-3">
							{funFacts.map((fact, index) => (
								<li
									key={index}
									className="flex items-center gap-3 text-slate-600"
								>
									<span className="text-slate-300 font-mono text-sm">
										0{index + 1}
									</span>
									<span className="text-sm leading-relaxed">
										{fact}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Personal;
