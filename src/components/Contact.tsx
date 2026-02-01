import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
	const links = [
		{
			name: "Email",
			href: "mailto:ejidikeesther@gmail.com",
			icon: Mail,
		},
		{
			name: "GitHub",
			href: "https://github.com/Queen-esther01",
			icon: Github,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/esther-ejidike-0a017a185/",
			icon: Linkedin,
		},
	];

	return (
		<section id='contact' className='py-20 bg-slate-50'>
			<div className='max-w-4xl mx-auto px-6 text-center'>
				<h2 className='text-3xl font-light text-slate-900 mb-8'>
					Let&apos;s connect
				</h2>

				<p className='text-slate-600 mb-12 max-w-2xl mx-auto'>
					Interested in collaboration or have questions about my work?
					I&apos;d love to hear from you.
				</p>

				<div className='flex justify-center space-x-8'>
					{links.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className='flex flex-col items-center space-y-2 text-slate-600 hover:text-slate-900 transition-colors duration-200'
						>
							<div className='p-3 bg-white rounded-lg shadow-sm'>
								<link.icon className='h-5 w-5' />
							</div>
							<span className='text-sm'>{link.name}</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
