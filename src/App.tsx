
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Writings from './components/Writings';
import Personal from './components/Personal';

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Writings />
				<Personal />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;