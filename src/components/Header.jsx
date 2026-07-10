import { useLocation } from 'preact-iso';
import { FaGithub } from 'react-icons/fa';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>												
				<a href="/contact" class={url == '/contact' && 'active'}>
					Contact
				</a>				
			</nav>			
			<a href="https://github.com/rafaelsouzars/slothhtml" target="_blank" rel="noopener noreferrer" class={url == 'https://github.com/slothhtml' && 'active'}>
				<FaGithub size="1.2rem"/>	
			</a>						
		</header>
	);
}
