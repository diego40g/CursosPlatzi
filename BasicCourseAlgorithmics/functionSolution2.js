function secondLargestNumber(numbers){
    numbers.sort();
    numbers,reverse();
    return numbers[1];
}

let nums=[8,4,6,10,9,11,20];
console.log(secondLargestNumber(nums))