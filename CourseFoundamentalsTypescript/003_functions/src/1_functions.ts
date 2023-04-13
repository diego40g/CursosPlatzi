(() => {
  type Size = 'S'|'M'|'L'|'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Size | undefined
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('Pro1',new Date(), 12, 'M')
  console.log(product1)
  console.log(product1.size)
  const product2 = createProductToJson('Pro1',new Date(), 12, undefined)
  console.log(product2.size)
}) ();
