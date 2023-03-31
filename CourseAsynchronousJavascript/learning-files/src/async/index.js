const fnAscync = () => {
    return new Promise((resolver, reject) => {
        (true) 
            ? setTimeout(() => resolver('Async!!!'),2000) 
            : reject(new Error('Error!!!'))
    })
}

const anotherFn = async() => {
    const something = await fnAscync()
    console.log(something)
    console.log("Hello")
}

console.log('Before')
anotherFn()
console.log('After')