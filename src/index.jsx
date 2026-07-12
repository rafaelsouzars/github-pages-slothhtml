import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

// Captura o '/minha_aplicacao/' definido no vite.config.js
const BASE = import.meta.env.BASE_URL;

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path={`${BASE}`} component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
