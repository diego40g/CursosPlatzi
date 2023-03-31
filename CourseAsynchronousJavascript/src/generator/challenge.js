import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

async function* fetchData(urlApi) {
    const response = await fetch(urlApi);
    yield await response.json();
}

async function* iterData(urlApi) {
    try {
        const products = (await fetchData(`${urlApi}/products`).next()).value
        const product = (await fetchData(`${urlApi}/products/${products[0].id}`).next()).value
        const category = (await fetchData(`${urlApi}/categories/${product.category.id}`).next()).value

        yield console.log(products[0])
        yield console.log(product.title)
        yield console.log(category.name)
    } catch (error) {
        console.log(error)
    }
}

const dt = iterData(API)
dt.next()
dt.next()
dt.next()