import fetch from "node-fetch";

const API = '----'

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data
}

function validateURL(urlApi) {
    try{
        new URL(urlApi);
        return true;
    }catch (err) {
        return false
    }
}

export async function runCode(url) {
    // Tu código aquí 👈
    try {
        if(validateURL(url)){
            const data = await fetchData(url)
            return data
        } else {
            return new Error ('Invalid URL');
        }
    } catch (error) {
        return new Error('Something was wrong');
    }
}

console.log(await runCode(API))
