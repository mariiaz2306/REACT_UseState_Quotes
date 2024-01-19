import { useState } from 'react'
import React from 'react'
import { quotes } from '../utils/quotes'
import { getRandomQuote } from './../utils/getRandomQuote';
import QuoteSingle from './QuoteSingle';



function ChangeQuote({}) {
    const [randomQuote, setQuote] = useState(()=>getRandomQuote(quotes))

    return (
        <div className="quote-container">
        <QuoteSingle key={randomQuote.id}{...randomQuote} />

            <button
                className='button'
                onClick={() => setQuote(getRandomQuote(quotes))}>
                New quote</button>       
    </div>
)
// function handleClick() {
//         setQuote(getRandomQuote());
// }
//     return (
//         <div>
//         <button onClick={handleClick} className="change-quote">
//                 New Quote!
//         </button>
        
//             {/* <h1>"{quotes.text}"</h1>
//             <p>{quotes.author}</p> */}

//         {randomQuotes && randomQuotes.map(({id, text, author}) => (
//         <div key={id}>
//           <h1>"{text}"</h1>
//           <p>{author}</p>
//         </div>
//       ))}
            

    

//       </div>  
//     )
}
    export default ChangeQuote;
        

