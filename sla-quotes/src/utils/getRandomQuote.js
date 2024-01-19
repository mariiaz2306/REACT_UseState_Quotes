import { quotes } from "./quotes"

export const getRandomQuote = () => {
const randomIndex = Math.floor(Math.random()*quotes.length);
return quotes[randomIndex];
 
};

// const red = Math.floor(Math.random() * 255)
// const green = Math.floor(Math.random() * 255)
// const blue = Math.floor(Math.random() * 255)

// return `rgb(${red}, ${green}, ${blue})`