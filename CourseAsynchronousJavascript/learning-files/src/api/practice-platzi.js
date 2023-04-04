/**/
import fetch from "node-fetch";
const API = 'https://domain-a.com/api-1'
/**/
export async function runCode(url) {
    try {
      new URL(url);
      const response = await fetch(url);
      return response.json();
     } catch(error) {
        console.log(error.message)
       if (error.message === "Failed to construct 'URL': Invalid URL"){
         throw new Error('Invalid URL');
       } else {
         throw new Error('Something was wrong');
       }
     }
}
/**/
console.log(await runCode(API)) 
/**/  