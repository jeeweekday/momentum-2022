const quotes = [
    {quote: "I never lose. I either win or learn.",
    author: "Nelson Mandela",},  
    {quote: "Yesterday You said tomorrow.",
    author: "NIKE",},  
    {quote: "Whoever dose not have two-thirds of his day for himself, is a slave.",
    author: "Friedrich Nietzsche",},  
    {quote: "Hahahahaha",
    author: "Woohyun",},  
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const pickNum = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[pickNum].quote;
author.innerText = quotes[pickNum].author;