import { Tooltip } from 'react-tooltip';
import { definitions } from '../../lib/words-list';

function Glossary({word}) {
	for (let entry in definitions) {
		if (entry === word) {
    	let definition = definitions[entry];
	    	if (definition !== null ) {
	    		let wordClass = word.replace(/\s+/g, '-');
			    return (
				  	<>
				  	<a className={`anchor-${wordClass} font-bold`}>{word + "﹖"}</a>
					<Tooltip 
						anchorSelect={`.anchor-${wordClass}`} 
						content={definition} 
						style={{width:"250px", backgroundColor: "rgb(230, 134, 0)"}}>
							
					</Tooltip>
				    </>
			  	);
			}
		}
    }
}

export default Glossary;