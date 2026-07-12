import slothhtmlLogo from '../../assets/slothhtml.png';
import { Code } from '../../components/Code';
import { Card } from '../../components/Card';
import './style.css';

export function Home() {	
	// Pega o caminho base do vite.config.js (ex: '/slothhtml/')
	const BASE = import.meta.env.BASE_URL; 
	
	// Garante que a barra final seja tratada corretamente para as validações de classe active
	const cleanBase = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;

	return (
		<div class="home">
			<a href="https://github.com/rafaelsouzars/slothhtml" target="_blank">
				<img src={slothhtmlLogo} alt="Slothhtml logo" height="160" width="160" />
			</a>
			<h1>Slothhtml</h1>
			<p>Inicie pequenos projetos HTML com apenas uma linha de comando.</p>
			<Code 
				code="slothhtml create -w" 
				language="powershell"
			/>
			<Card>
				<p>Commandos:</p>
				<pre>
					<code>
						create - Inicia um projeto HTML.<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;-h --help - Ajuda do comando create.<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;-w --webpage - Create webpage. Ex: slothhtml create [-w or --webpage] [project_name or null]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;-e --extension - Create browser extension. Ex: slothhtml create [-e or --extension] [project_name or null]<br/>
						search - Pesquisar bibliotecas JS no repositório cdnjs.<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;-h --help - Ajuda do comando Search<br/>  
						lib - Requisita uma biblioteca JS do repositório do cdnjs.<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;-h --help - Ajuda do comando Lib<br/>
						info - Informações sobre códigos.<br/> 
					</code>
				</pre>
			</Card>
			<section>
							
			</section>
		</div>
	);
}
