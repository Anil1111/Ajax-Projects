const url = 'https://www.discoveryvip.com/shared/test1.json'
const localUrl = 'data.json'

const btn = document.querySelector('.btn')
const txt = document.querySelector('.txt')
const output = document.querySelector('.output')
let isCalled = false;

txt.style.display = 'none'



btn.addEventListener('click', (err) => {
    getData(url)


    
})



function getData(urlPath) {
    fetch(urlPath)
        .then(res => res.json())
        .then(data => showData(data))
        .catch(err => {
            if (!isCalled) {
                getData(localUrl)
            }
            isCalled = true
            console.log(err)
            
        })
}

function showData(data) {
    output.innerHTML = '<h1>JSON Data</h1>'
    data.forEach((el, idx) => {
        const bg = idx % 2 == 0 ? '#fff' : '#ccc'
        const div = document.createElement('div')
        div.style.backgroundColor = bg
        div.innerHTML = `<div> ${el.name.first} ${el.name.last} </div>` 
        div.innerHTML += `<div> ${el.age} </div>` 
        div.innerHTML += `<div> ${el.location.country} ${el.location.city} </div>` 

        output.append(div)

    

        
    });

    
}