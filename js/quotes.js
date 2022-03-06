const quotes = [
    {quote: "I never lose. I either win or learn.",
    author: "- NELSON MANDELA",},  
    {quote: "Yesterday You said tomorrow.",
    author: "- NIKE",},  
    {quote: "Whoever dose not have two-thirds of his day for himself, is a slave.",
    author: "- FRIEDRICH NIETZSCHE",},  
    {quote: "My name is ...",
    author: "- WOOHYUN",},  
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const pickNum = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[pickNum].quote;
author.innerText = quotes[pickNum].author;