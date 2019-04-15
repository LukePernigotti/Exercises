/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

const min = (number1, number2) =>{
	if(number1 < number2) return number1;
  	else return number2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
