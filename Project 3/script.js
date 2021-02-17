const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='

const inputVal = document.querySelector('.inputVal')
const btn = document.querySelector('.btn')
const txt = document.querySelector('.txt')
const output = document.querySelector('.output')

btn.addEventListener('click', (err) => {
    getData(url)








})


function getData(urlPath) {
    const searchTerm = inputVal.value || ' JavaScript'
    const FinalUrl = url + searchTerm

    fetch(FinalUrl)
        .then(res => res.json())
        .then(data => {
        
            output.innerHTML = '<div>Results for ' + searchTerm + '</div>'
            output.innerHTML += `Total Search ${data.query.searchinfo.totalhits} <br>`
            showData(data.query.search)
        })
    .catch(err => console.log(err))
}

function showData(data) {

    data.forEach(el => {

        const div = document.createElement('div')
        div.innerHTML = `<h3><a href="https://en.wikipedia.org/wiki?curid=${el.pageid}" target="_blank">${el.title}</a></h3>`
        div.innerHTML += `<div>Page Id: ${el.pageid} | Size: ${el.size} | WordCount: ${el.wordcount} </div>`
        div.classList.add('box')
        div.innerHTML += el.snippet
        output.append(div)
        
    });
}