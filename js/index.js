

const quoteContent = document.getElementById('quote-content')
const quoteAuthor = document.getElementById('quote-author')
const quoteTags = document.getElementById('quote-tags')
let quotes = []
let randomIndex = 0
let currentQuote = {}
const init = () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            currentQuote = data
            updateQuote()
        })

}
const updateQuote = () => {

    quoteAuthor.innerHTML = currentQuote.author
    quoteContent.innerHTML = currentQuote.content
    const tags = currentQuote.tags.reduce((prev,current)=> prev +`<span>${current}</span>`,'')
    quoteTags.innerHTML = tags
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

document.getElementById('btn-generate-newQuote').addEventListener('click', init)
document.getElementById('btn-copy-quote').addEventListener('click', clipboard)









