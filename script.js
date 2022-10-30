//user inputs number 
let answer = parseInt(prompt('Please enter the number you would like to FizzBuzz up to'));

//loop
for(let i = 1; i <= answer; i++){
  
  //if divisable by 3 and 5 log fizzbuzz
  if (i % 3 ===0 && i % 5 === 0 ){
    console.log('fizzbuzz');
  }

  // if only divisible by 5 log buzz
   else if( i % 5 ===0){
    console.log('buzz')
  }
  //if only divisible by 3 => log fizz
  else if(i % 3 ===0){
    console.log('fizz')
  }
  //log any other numbers
  else{console.log(i)} 
}