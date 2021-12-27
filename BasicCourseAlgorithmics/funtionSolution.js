function secondLargestNumber(numbers){
  let first=numbers[0]
  let second=0;
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>first){
      second=first;
      first=numbers[i]
    }
    if(numbers[i]>second&&numbers[i]<first){
      second=numbers[i]
    }
  }
  return second;
}

let nums=[-9,-1,6,5,59,-19,45,66]

console.log(secondLargestNumber(nums))