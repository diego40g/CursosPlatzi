(() => {
  //inferido
  let productPrice = 100;
  productPrice = 12.52;
  productPrice += 1;
  console.log('productPrice', productPrice)

  //explicito
  let customerAge: number = 28;
  customerAge += 1
  console.log('customerAge', customerAge)

  let productInStock: number;
  console.log('productInStock', productInStock)
  if (productInStock > 0) {
    console.log('Was a product')
  }

  let discount = parseInt('312');
  console.log("the type of discount is", typeof(discount))
  let otherVar = parseInt('asdasd');
  console.log("the type of otherVar is", otherVar)
  if(otherVar <= 200){
    console.log("otherVar <= 200")
  } else {
    console.log("otherVar > 200")
  }

  let hexadecimalValue = 0xfff; //4095
  console.log("Hexadecimal", hexadecimalValue)
  let binaryValue = 0b1010; //10
  console.log("Binary", binaryValue)

  const myNumber: Number = 10; //no va funcionar de la manera correcta por el significado en JS
}) ();
