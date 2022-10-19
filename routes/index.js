var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});

router.get('/About', function(req, res, next) {
  res.render('About', { title: 'Express' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Express' });
});

router.get('/pro', function(req, res, next) {
  res.render('pro', { title: 'Express' });
});
router.post('/pro', function(req, res, next) {
  //area rectangle
  var a=req.body.txt1;
  var b=req.body.txt2;
  var c=parseInt(a)*parseInt(b);
  // area of square
  var x1 =req.body.txt3;
  Math.pow(x1, 2)
  var x2=x1 ** 2    
  // area of circle
  var radius =req.body.txt4;
  var area = Math.PI * Math.pow(radius, 2);
  console.log("Area of circle: " + (area).toFixed(2));
  // average of 5 number
  var y=req.body.txt7;
  var i=req.body.txt8;
  var s=req.body.txt5;
  var h=req.body.txt6;
  var v=parseInt(y)+parseInt(i)+parseInt(s)+parseInt(h)/5;

  //oodd or even
  var number =req.body.txt9
  if(number % 2 == 0) {
    msg ="The number is even.";
}

// if the number is odd
else {
    msg ="The number is odd.";
}

//leap year
//var year=req.body.txt10;
//if((year%4==0) && (year%100!=0))
  //msg1=(year + " is a Leap Year");
//else if(year%400==0)
  //msg1=(year + " is a Leap Year");
//else
  //msg1=(year + " is not a Leap Year");


// poistive, negative
var number1=req.body.txt11;
if (number > 0) {
  my="The number is positive";
}

// check if number is 0
else if (number1 == 0) {
  my="The number is zero";
}

// if number is less than 0
else {
   my="The number is negative";
}
  res.render('ans', { mya: a , myb: b , myc:c, myx1:x1,myx2:x2,myradius:radius,myarea:area
              , myy:y,myi:i,mys:s,myh:h,myv:v,mymsg:msg,mynumber1:number1,mymy:my});
});

router.get('/hey', function(req, res, next) {
  res.render('hey', { title: 'Express' });
});

router.post('/hey', function(req, res, next) {
  var num1 =req.body.txt1;
  var num2 =req.body.txt2;
  var num3 =req.body.txt3;
  var largest;

// check the condition largest number
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);

//factorial
var num4 =req.body.txt4;

// checking if number is negative
if (num4 < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (num4 === 0) {
    console.log(`The factorial of ${num4} is 1.`);
}

// if number is positive
else {
    var fact =1;
    for (i = 1; i <= num4; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num4} is ${fact}.`);
}

//swapping
var a =req.body.txt5;
var b =req.body.txt6;

//create a temporary variable
var temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//smaller number
var n1 =req.body.txt7;
var n2 =req.body.txt8;
//const num3 = parseFloat(prompt("Enter third number: "));

var smallest = Math.min(n1, n2);

// display the result
console.log("The smallest number is " + smallest);



  res.render('hey1', {mynum1:num1,mynum2:num2,mynum3:num3,mylargest:largest,mynum4:num4,myfact:fact,
              mya:a,myb:b,mytemp:temp,myn1:n1,myn2:n2,mysmallest:smallest});
});

router.get('/yy', function(req, res, next) {
  res.render('yy', { title: 'Express' });
});

router.post('/yy', function(req, res, next) {
  var n =req.body.txt10;
  var msg1;
  var msg2;
  var msg3;
  // check if number is greater than 0
  if (n > 0) {
      msg1="The number is positive";
  }
  
  // check if number is 0
  else if (n == 0) {
    msg2="The number is zero";
  }
  
  // if number is less than 0
  else {
       msg3="The number is negative";
  }

//logical operator
var a =req.body.txt11, b=req.body.txt12, c =req.body.txt13;

// equal to operator
msgg=a == 5;     // true
msgg=b == 4;   // true
msgg=c == 3;  // false



//calculator
let operator =req.body.txt15; 

// take the operand input
var number1 =req.body.txt16;
var number2 =req.body.txt17;

var result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
//console.log(`${number1} ${operator} ${number2} = ${result}`);

  
  res.render('dd', {myn:n,mymsg1:msg1,mymsg2:msg2,mymsg3:msg3,myn:n,mya:a,myb:b,myc:c,mymsgg:msgg,mynumber1:number1,mynumber2:number2,myoperator:operator,
              myresult:result });
});



module.exports = router;
// switch case

router.get('/pinki', function(req, res, next) {
  res.render('pinki', { title: 'Express' });
});


router.post('/pinki', function(req, res, next) {
  var resultt;

  // take the operator input
  var operator =req.body.txt1;
  
  // take the operand input
  var number1 =req.body.txt2;
  var number2 =req.body.txt3;
  
  switch(operator) {
      case '+':
           resultt = number1 + number2;
          msg=(`${number1} + ${number2} = ${resultt}`);
          break;
  
      case '-':
           resultt = number1 - number2;
          msg=(`${number1} - ${number2} = ${resultt}`);
          break;
  
      case '*':
           resultt = number1 * number2;
          msg=(`${number1} * ${number2} = ${resultt}`);
          break;
  
      case '/':
           resultt = number1 / number2;
          msg=(`${number1} / ${number2} = ${resultt}`);
          break;
  
      default:
          msg=('Invalid operator');
          break;
  }


//Grade

var marks=req.body.txt4;
    //printf("Enter your marks ");
    //scanf("%d",&marks);
    if(marks<0 || marks>100)
    {
        msgg=("Wrong Entry");
    }
    else if(marks<50)
    {
        msgg=("Grade F");
    }
    else if(marks>=50 && marks<60)
    {
        msgg=("Grade D");
    }
    else if(marks>=60 && marks<70)
    {
        msgg=("Grade C");
    }
    else if(marks>=70 && marks<80)
    {
        msgg=("Grade B");
    }
    else if(marks>=80 && marks<90)
    {
        msgg=("Grade A");
    }
    else
    {
        msgg=("Grade A+");
    }

//start and end


  res.render('biren', {myresultt:resultt,myoperator:operator,mynumber1:number1,mynumber2:number2,mymsg:msg,mymarks:marks,mymsgg:msgg  });
});











