import   { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const P2PFileShare = () => {
	const [htmlContent, setHtmlContent] = useState('');
    const location = useLocation();
  
    // Function to parse query parameters
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('s') ? '/receive/' : '/'; //

    console.log(page)
    useEffect(() => {
        const fetchHtmlFile = async () => {
            try {
                const response = await fetch(`/p2p${page}index.html`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.text();
                setHtmlContent(text);
                executeScripts(text); // Execute scripts after setting content
            } catch (error) {
                console.error('Error fetching HTML file:', error);
            }
        };

        fetchHtmlFile();
    }, []);

    const executeScripts = (html: string) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const scripts = tempDiv.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const script = document.createElement('script');
            if (scripts[i].src) {
                // If the script has a src, set it and load it
                script.src = scripts[i].src;
                script.onload = () => {
                    console.log(`Loaded script: ${script.src}`);
                };
                document.body.appendChild(script);
            } else {
                // If it's an inline script, execute it
                script.text = scripts[i].innerHTML;
                document.body.appendChild(script);
            }
        }
    };

    return (
        <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}


export default P2PFileShare