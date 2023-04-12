(() => {
  let myUserId: (number | string);

  myUserId=1234;
  myUserId="987";
  
  function greeting(myText: string|number) {
    if(typeof myText === 'string'){
      console.log(`string = ${myText.toLowerCase()}`)
    }else{
      console.log(`number = ${myText.toFixed(1)}`)
    } 
  }

  greeting('DiEgO')
  greeting(123.456789)
}) ();
