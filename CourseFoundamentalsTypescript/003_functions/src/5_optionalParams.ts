(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  const products: any[] = [];

  const addProducts = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProducts({
    stock: 12,
    createAt: new Date(1997,10,24),
    title: "product 1"
  })
  console.log(products)
  
  addProducts({
    title: "product 2",
    stock: 1,
    createAt: new Date(2022,3,12),
    size: 'XL'
  })
  console.log(products)
})();
