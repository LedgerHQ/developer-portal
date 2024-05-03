import { Tooltip } from 'react-tooltip';
import { definitions } from '/public/glossary/words-list';

function Glossary({word}) {
	console.log(word);
	for (let entry in definitions) {
		if (entry === word.toLowerCase()) {
    	let definition = definitions[entry];
	    	if (definition !== null ) {
		    return (
			  	<>
			  	<a className={`anchor-${word} font-bold`}>{word}</a>
				<Tooltip anchorSelect={`.anchor-${word}`} content={definition}></Tooltip>
			    </>
		  	);
			}
		}
    }
}

export default Glossary;