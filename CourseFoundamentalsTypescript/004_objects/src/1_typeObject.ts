(() => {
  type Sizes = 'S'|'M'|'L'|'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'prodict1',
    createdAt: new Date(1993,1,23),
    stock: 24
  })

  addProduct({
    title: 'product2',
    size: 'M',
    stock: 2,
    createdAt: new Date(2000,11,23)
  })

  console.log(products)
})
