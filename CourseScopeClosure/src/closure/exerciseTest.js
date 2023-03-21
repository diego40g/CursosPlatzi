function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    return (secondNum=0) => {
      return secondNum + firstNum;
    }
}

console.log(sumWithClosure(4)())