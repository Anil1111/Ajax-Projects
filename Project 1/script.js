const all = document.querySelector('.all-btn')
const output = document.querySelector('.output')
const url = 'data.json'



//show all persons
all.addEventListener('click', err => {
    if (err) console.log(err)
    getData(url)
})

function getData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showData(data)
        })
        .catch(err => console.log(err
        ))
}


function showData(data) {

    data.forEach(el => {
        const div = document.createElement('div')
        const bg = el.Coder == 1 ? 'green' : 'grey'
        div.style.background = bg
            div.innerHTML = `<h1>Name is : ${el.name}</h1>`
            div.innerHTML += `<h3> ${el.age} years old </h3>`
        div.innerHTML += `<h3>is Coder : ${el.Coder == 1} </h3>`
        output.append(div)
    });
}