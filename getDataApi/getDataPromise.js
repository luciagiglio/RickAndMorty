/* get api */

const API = 'https://rickandmortyapi.com/api/character/';



 var next = ""
 var preview = ""
//fetch recibe un la url a la que se va a conectar

const getData = ((apiUrl, callback = null) => {
    return fetch(apiUrl)
        .then(response => response.json()) //repuesta traida en formato json
        .then(json => {
            printData(json),
                printPagination(json.info)
                

        })
        .then(()=> {
            setTimeout(home, 100);
        })

        .catch(error => { console.error('Error: ', error) })
        
    })


const home = () =>{
    window.scrollTo(0,700)
    audioHome()
    console.log("se ejecuto home")
}

const printData = (data) => {
    let count = 0
    next = data.info.next
    preview = data.info.prev
    let html = '';
    data.results.forEach(c => {
        if(count <4){
            html += '<div class="col mt-5" >';
            html += '<div class= "card" style="width: 13rem;">'
            html += `<img src="${c.image}" class="card-img-top" alt="...">`
            html += '<div class="card-body">'
            html += `<h5 class="card-title">${c.name}</h5>`
            html += `<p class="card-text">Gender: ${c.gender}</p>`
            html += `<p class="card-text">Species: ${c.species}</p>`
            html += `<p class="card-text">Status: ${c.status}</p>`
            html += '</div>'
            html += '</div>'
            html += '</div>'
            count++
        } 
    });
    document.getElementById('infoCharacters').innerHTML = html;
    
}

/*paginador para cambio de paginas*/

const printPagination = (info) => {
    let preDisable = info.prev == null ? 'disabled' : '';
    let nextDisable = info.next == null ? 'disabled' : '';

    let html = `<li class="page-item ${preDisable}"><a class="page-link" onclick="getData('${info.prev}')" >Back</a></li>`
    html += `<li class="page-item ${nextDisable}"><a class="page-link" onclick="getData('${info.next}')" >Next</a></li>`
    document.getElementById('pagination').innerHTML = html;
    
}

const audioHome = () => {
    let html = '<audio src="- Wubalubadubdub Rick and Morty Adult Swim.mp3" autoplay> Your browser does not support the <code>audio</code> element.</audio>'
    document.getElementById('audio').innerHTML = html;
}

//getData(API)