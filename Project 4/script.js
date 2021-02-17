const urls = [{
    'url': 'https://www.discoveryvip.com/shared/books2.json',
    'arr': 'books',
    'title': 'Books List'
},
{
    'url': 'https://www.discoveryvip.com/shared/people.json',
    'arr': 'people',
    'title': 'Friends List'
},
{
    'url': 'https://www.discoveryvip.com/shared/coin.json',
    'arr': 'data',
    'title': 'BitCoin Currency'
}
]

const output = document.querySelector('.output')

const h1 = document.querySelector('h1')
h1.innerHTML = ""


urls.forEach(ele => {
    const btn = document.createElement('button')
    btn.innerText = `${ele.title}`
    h1.append(btn)
    btn.addEventListener('click', err => {
        if (err) console.log(err)
        getData(ele)
    })
})





function getData(myObj) {
    let url = myObj.url
    fetch(url)
        .then(res => res.text())
        .then(data => {
            const json = JSON.parse(data)

            showData(json[myObj.arr])

})
}

function showData(data) {
    output.innerHTML = ""
    data.forEach(el => {
        const div = document.createElement('div')
        div.classList.add('box');
        output.append(div);
        const entries = Object.entries(el);
        console.log(entries);
        div.innerHTML = 'Properties : ' + entries.length;
        for (const obj of entries) {
            console.log(obj);
            div.innerHTML += `<br>${obj[0]} : ${obj[1]}`;
        }
    })


}


    