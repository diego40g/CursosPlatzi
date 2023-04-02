import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1"

function putData(urlApi, dataUpdate){
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    })
    return response
}

const data = {
    "title": "New course JS update request",
    "price": 9999
}

const idProduct = 278

putData(`${API}/products/${idProduct}`, data)
    .then(response => response.json())
    .then(data => console.log(data))