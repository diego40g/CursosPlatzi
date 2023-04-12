(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
  prices.push(3);
  
  let products = ['hola', true];
  products.push("")
  products.push(false)
  //products.push(1)
  
  let mixed: (number | string | boolean | object)[] = [];
  mixed.push(true);
  mixed.push("dos");
  mixed.push(3);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3];
  numbers.map(item => item * 2)
}) ();
