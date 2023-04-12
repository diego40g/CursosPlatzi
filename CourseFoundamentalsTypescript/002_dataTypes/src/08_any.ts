(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = true;
  myDynamicVar = null;
  myDynamicVar = "";
  myDynamicVar = {};
  myDynamicVar = [];

  //casting
  myDynamicVar = "Diego";
  const rta1 = (myDynamicVar as string).toLowerCase();
  console.log(rta1);
  
  //casting
  myDynamicVar = 123123
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
