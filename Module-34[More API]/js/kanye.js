
const quotesLoad = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => showQuotes(data))
}


const showQuotes = (data) => {
    const quoteElement = document.getElementById('quotes');
    quoteElement.innerText = data.quote;
}