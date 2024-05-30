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
				  	<a  data-tooltip-delay-hide={1000}
				  		className={`anchor-${wordClass}`}
				  		style={{backgroundColor: "rgb( 211 , 211 , 211, 0.2)", padding: "0.2em"}}
				  	>
				  		{word}
				  	</a>
					<Tooltip 
						anchorSelect={`.anchor-${wordClass}`} 
						html={`${definition}.`} 
						style={{width:"250px", backgroundColor: "rgb(230, 134, 0)", pointerEvents: "auto", zIndex:"1000"}}
						place={'bottom'}
					>
					</Tooltip>
				    </>
			  	);
			}
		}
    }
}

export default Glossary;