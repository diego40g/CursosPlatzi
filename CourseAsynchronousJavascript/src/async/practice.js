import fetch from "node-fetch";

async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
        await fetch(url)
    } catch(error) {
        throw new Error('API Not Found');
    }
}
  
await runCode()