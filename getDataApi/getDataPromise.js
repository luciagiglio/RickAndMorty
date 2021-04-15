
/* get api */

const API = 'https://rickandmortyapi.com/api/character/';

const PEOPLE_URL = 'character/:id'
const NAME_ID = 'character/:name'
const IMG_ID = 'character/:image'
//const INFO = 'character/:info'

//fetch recibe un la url a la que se va a conectar

const getData = (apiUrl) => {
    return fetch(apiUrl)
        .then(response => response.json()) //repuesta traida en formato json
        .then(json => {
            printData(json),
                printPagination(json.info)
        })

        .catch(error => { console.error('Error: ', error) })

}

const printData = (data) => {
    let html = '';
    data.results.forEach(c => {

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

    });
    document.getElementById('infoCharacters').innerHTML = html;
}

/*paginador para cambio de paginas*/

const printPagination = (info) => {
    let preDisable = info.prev == null ? 'disabled' : '';
    let nexteDisable = info.next == null ? 'disabled' : '';

    let html = `<li class="page-item ${preDisable}"><a class="page-link" onclick="getData('${info.prev}')" >Previous</a></li>`
    html += `<li class="page-item ${nexteDisable}"><a class="page-link" onclick="getData('${info.next}')" >Next</a></li>`
    document.getElementById('pagination').innerHTML = html;

}

getData(API)

