const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('.next');
const anchorBtn = document.querySelector('.anchorBox');

const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num]
    const quote = item.text;
    const authorName = item.author;
    text.innerHTML = quote;
    author.innerHTML = authorName;
    // console.log(item);
    anchorBtn.href='https://twitter.com/i/flow/login=${quote} - ${authorName}'
}

nextBtn.addEventListener('click', getQuote);

getQuote();