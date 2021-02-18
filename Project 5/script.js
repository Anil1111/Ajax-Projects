const btn = document.querySelector('.btn')
const output = document.querySelector('.output')
const input = document.querySelector('.inp')
const h1  = document.querySelector('h1')

input.value = ""

let  url = 'https://randomuser.me/api/'

btn.addEventListener('click', err => {
    if (err) console.log(err)
    const val = `?results=${input.value}`
    getData(url+val)
})


function getData(url) {



    fetch(url)
        .then(res => res.json())
        .then(data => {
            output.innerHTML = `Seeds : ${data.info.seed} </br>
           Results : ${data.info.results} </br>`
            
            showData(data.results)
            
            
        })
            
    .catch(err => console.log(err) )
}

function showData(data) {
    data.forEach(el => {

        // const div = document.createElement('div') or
        const div = eleCreater('div', output , "")
        div.classList.add('box')

        div.addEventListener('click', err => {
            if (err) console.log(err)
            const temp = `${el.name.title} ${el.name.first} ${el.name.last} </br> ${el.email} </br> Age: ${el.dob.age}`
            const imgData = `<img src="${el.picture.large}">`
            const temp1 = `City : ${el.location.country}<hr> `
            h1.innerHTML = temp + '<div>' + imgData + '</div>' + temp1
            window.scrollTo({top:0})
        })



        const temp = `${el.name.title} ${el.name.first} ${el.name.last} </br> ${el.email} </br> Age: ${el.dob.age}`
        eleCreater('div', div ,temp )

        const imgData = `<img src="${el.picture.large}">`
        eleCreater('div', div , imgData)


        const temp1 = `City : ${el.location.country}<hr> `
        eleCreater('div', div, temp1)
        

    });
}

function eleCreater(eleTag, parent, content) {
    const elem = document.createElement(eleTag)
    parent.append(elem)
    elem.innerHTML = content
    return elem;
}