(() => {
  let productTitle = "My amazing product";
  productTitle = 'My amazing product change';
  console.log('productTitle', productTitle);

  const productDescription: string = "bla bla bla descripcion";
  console.log('productDescription', productDescription)

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary)

}) ();
