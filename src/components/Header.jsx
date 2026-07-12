import { useLocation } from 'preact-iso';
import { FaGithub, FaDiscord } from 'react-icons/fa';



export function Header() {
	const { url } = useLocation();

	// Pega o caminho base do vite.config.js (ex: '/slothhtml/')
	const BASE = import.meta.env.BASE_URL; 

	// Garante que a barra final seja tratada corretamente para as validações de classe active
	const cleanBase = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;

	return (
		<header>
			<nav>
				<a href={`${cleanBase}/`} class={url == `${cleanBase}/` && 'active'}>
					Home
				</a>												
				<a href={`${cleanBase}/contact`} class={url == `${cleanBase}/contact` && 'active'}>
					Contact
				</a>				
			</nav>
			<a href="https://discord.gg/nnAKASFDF" target="_blank" rel="noopener noreferrer" class={url == 'https://discord.gg/nnAKASFDF' && 'active'}>
				<FaDiscord size="1.2rem"/>	
			</a>			
			<a href="https://github.com/rafaelsouzars/slothhtml" target="_blank" rel="noopener noreferrer" class={url == 'https://github.com/slothhtml' && 'active'}>
				<FaGithub size="1.2rem"/>	
			</a>						
		</header>
	);
}
