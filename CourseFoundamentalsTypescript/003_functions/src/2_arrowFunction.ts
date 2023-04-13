(() => {
  type Size = 'S'|'M'|'L'|'XL';

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Size 
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJsonV2('Pro1',new Date(), 12)
  console.log(product1)
  console.log(product1.size)
})();
