(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // how to use
  let myNumber: number | null = null;
  myNumber = 12;
  let myString: string | undefined = undefined;
  myString = 'Diego'

  function hi(firstName: string | null){
    let greeting = "Hello ";
    if(firstName){
      greeting += firstName;
    } else {
      greeting += 'nobody';
    }
    console.log(greeting)
  }

  function hiV2(firstName: string | null){
    let greeting = "Hello ";
    greeting += firstName?.toLocaleLowerCase() || "nobody";
  }

  hi("Diego");
  hi(null);

  hiV2("Diego");
  hiV2(null);
})();
