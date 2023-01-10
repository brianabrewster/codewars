// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// My Solution:

function highestAndLowest(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }