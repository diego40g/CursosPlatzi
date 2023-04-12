(() => {
  type UserId = string | number | boolean
  let userId: UserId;

  let shirtSize: string;
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'sadknhijasndasnkodmoka'
  
  //Literal types
  type Sizes = 'S'|'M'|'L'|'XL'
  //let shirtSizeLiteral: 'S'|'M'|'L'|'XL';
  let shirtSizeLiteral: Sizes;
  shirtSizeLiteral = "S"
  shirtSizeLiteral = "s"
  shirtSizeLiteral = "asdsad"

  function greeting(userId: UserId, size: Sizes){
    if(typeof userId === "string"){
      console.log(`string = ${userId.toLowerCase()}`)
    }
  }

  greeting('213','L')
  greeting(879,'M')
})();
