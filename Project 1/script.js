const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const add = document.querySelector('.add-btn')
const all = document.querySelector('.all-btn')
const output = document.querySelector('.output')
const url = 'data.json'


//get all input
let name = input1.value
let age = input2.value
let coder = input3.value

//add new person

add.addEventListener('click', err => {
    if (err) console.log(err)
    addData(url)
})

function addData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => { joinToJson(data)
    }).catch( err => console.log(err))
}


function joinToJson(data) {
    let obj = {
        "name": name,
        "age": age,
        "Coder": coder
    }
    data.push(obj)
}







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