import { useState, useEffect } from "react";
import { Menu, X, Brain, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Work" },
		{ href: "#writings", label: "Writing" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled || isMenuOpen
					? "bg-white/80 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className='max-w-5xl mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-2'>
						<Brain className='h-7 w-7 text-slate-700' />
						<span className='text-lg font-medium text-slate-900'>
							Esther Ejidike
						</span>
					</div>

					<nav className='hidden md:flex items-center space-x-8'>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className='text-slate-600 hover:text-slate-900 transition-colors duration-200'
							>
								{item.label}
							</a>
						))}
					</nav>

					<div className='hidden md:flex items-center space-x-4'>
						<a
							href='https://github.com/Queen-esther01'
							className='text-slate-500 hover:text-slate-700 transition-colors duration-200'
						>
							<Github className='h-5 w-5' />
						</a>
						<a
							href='https://www.linkedin.com/in/esther-ejidike-0a017a185/'
							className='text-slate-500 hover:text-slate-700 transition-colors duration-200'
						>
							<Linkedin className='h-5 w-5' />
						</a>
						<a
							href='mailto:ejidikeesther@gmail.com'
							className='text-slate-500 hover:text-slate-700 transition-colors duration-200'
						>
							<Mail className='h-5 w-5' />
						</a>
					</div>

					<button
						className='md:hidden text-slate-700'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</button>
				</div>

				{isMenuOpen && (
					<div className='md:hidden mt-4 py-4 border-t border-slate-200'>
						<nav className='flex flex-col space-y-3'>
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className='text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2'
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
