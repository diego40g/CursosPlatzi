const promise = new Promise((resolve, reject) => {
    resolve('hey!!!')
})

const cows = 9;
const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve(`We have the necesary cows, we have ${cows} cows on the farm`)
    } else {
         reject(`There isn't the necesary cows on the farm`)
    }
})

countCows
    .then((result) => {
        console.log(result)
    }) 
    .catch((error) => {
        console.log(error)
    })
    .finally(() => console.log("Finally siempre se ejecuta"))