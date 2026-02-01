
const Footer = () => {
	return (
		<footer className="py-8 bg-white border-t border-slate-200">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<p className="text-slate-500 text-sm">
					© {new Date().getFullYear()} Esther Ejidike
				</p>
			</div>
		</footer>
	);
};

export default Footer;