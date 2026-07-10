import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/theme/prism-okaidia.css';
// Languages
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-csharp';


export function Code({props}) {

    const code = `${props.code.trim()}`;

    const grammar = props.language ? Prism.languages[props.language] : Prism.languages.powershell; 

    const language = props.language ?? 'powershell'

    const html = Prism.highlight(code, grammar, language);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return(
        <pre class={`language-${language}`}>
            <code class={`language-${language}`} dangerouslySetInnerHTML={{ __html: html }}/>            
        </pre>
    );
}