(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  isNew = true;

  const randomNum = Math.random();
  console.log('randomNum', randomNum);
  
  isNew = randomNum >= 0.5 ? true : false;
  console.log('isNew', isNew);
}) ();
