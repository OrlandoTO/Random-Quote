

const quoteContent = document.getElementById('quote-content')
const quoteAuthor = document.getElementById('quote-author')
const root = document.getElementById('root')
const quoteCategory = document.getElementById('quote-category')
let quotes = []
let randomIndex = 0
let currentQuote = {}
const init = () => {
    fetch('./js/data.json')
        .then(response => response.json())
        .then(data => {
            quotes = data
            generateNewQuote()
        })

}
const generateNewQuote = () => {
    randomIndex = Math.floor((Math.random() * quotes.length))
    currentQuote = quotes[randomIndex]
    quoteContent.innerHTML = currentQuote.quote
    quoteAuthor.innerHTML = currentQuote.author
    quoteCategory.innerHTML = currentQuote.category
}

const clipboard = ()=>{
    const textQuote = `Author:${currentQuote.author}, Quote:${currentQuote.quote}`
    navigator.clipboard.writeText(textQuote).then(()=>{
       alert("copiado")
    }).catch(e=>{
        throw new Error(e)
    });
}
window.addEventListener('DOMContentLoaded', function () {
    init()

});

document.getElementById('btn-generate-newQuote').addEventListener('click', generateNewQuote)
document.getElementById('btn-copy-quote').addEventListener('click', clipboard)









