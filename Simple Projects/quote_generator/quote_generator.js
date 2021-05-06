var quotes = [ 
    
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Life is either a daring adventure or nothing at all."
];
var authors = [
    "Nelson Mandela",
    "Walt Disney",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Oprah Winfrey",
    "James Cameron",
    "John Lennon",
    "Mother Teresa",
    "Margaret Mead",
    "Benjamin Franklin",
    "Helen Keller",
    "Aristotle",
    "Anne Frank",
    "Helen Keller"
];     

function showQuote(){
        console.log(authors.length);
        let quote = document.querySelector('#quote');
        let author = document.querySelector("#author");
        let i = Math.floor(Math.random()*quotes.length);
        quote.textContent = quotes[i];
        author.textContent = authors[i];
}
console.log(quotes);