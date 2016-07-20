angular.module('app.services', [])


.factory('Questions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions = [{
    id: 0,
    question: 'What is JavaScript?',
    answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object Oriented Programming language',
    difficulty: 'easy'
  }, {
    id: 1,
    question: 'What is the use of isNaN function?',
    answer: 'isNan function returns true if the argument is not a number otherwise it is false.',
    difficulty: 'easy'
  }, {
    id: 2,
    question: 'What are JavaScript types?',
    answer: 'Number,String, Boolean, Function, Object, Null, Undefined'
  }, {
    id: 3,
    question: 'What is negative infinity?',
    answer: 'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.'
  },
  {
    id: 3,
    question: 'What are undeclared and undefined variables?',
    answer: 'Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.'
  },

  {
    id: 3,
    question: ' What are global variables? How are these variable declared and what are the problems associated with using them?',
    answer: 'Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared. Example:Declare a global globalVariable = “Test”; The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.'
  },{
    id: 3,
    question: 'Explain the difference between “==” and “===”?',
    answer: '“==” checks only for equality in value whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.'
  },

   {
     id: 3,
     question: 'What would be the result of 3+2+”7″?',
     answer: 'Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.'
   },{
     id: 3,
     question: 'Explain how to detect the operating system on the client machine?',
     answer: 'In order to detect the operating system on the client machine, the navigator.appVersion string (property) should be used.'
 },{
   id: 3,
   question: 'What do mean by NULL in Javascript?',
   answer: 'The NULL value is used to represent no value or no object.  It implies no object or null string, no valid boolean value, no number and no array object.'

},{
  id: 3,
  question: 'What is the function of delete operator?',
  answer: 'The functionality of delete operator is used to delete all variables and objects in a program but it cannot delete variables declared with VAR keyword.'

},{
  id: 3,
  question: 'What is an undefined value in JavaScript?',
  answer: 'Undefined value means the: Variable used in the code doesn’t exist, Variable is not assigned to any value, Property doesn’t exist'

},{
  id: 3,
  question: 'What are all the types of Pop up boxes available in JavaScript?',
  answer: 'Alert, Confirm, and Prompt'
},{
  id: 3,
  question: 'What is the use of Void(0)?',
  answer: 'Void(0) is used to prevent the page from refreshing and parameter “zero” is passed while calling. Void(0) is used to call another method without refreshing the page.'
},{
  id: 3,
  question: 'How can a page be forced to load another page in JavaScript?',
  answer: 'location.href="http://newhost/newpath/newfile.html"'
},{
  id: 3,
  question: 'What is the data type of variables of in JavaScript?',
  answer: 'All variables in the JavaScript are object data types.'
},{
  id: 3,
  question: 'What are escape characters?',
  answer: 'Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands. Place backslash before the characters to make it display.'
},{
  id: 3,
  question: 'What are JavaScript Cookies?',
  answer: 'Cookies are the small test files stored in a computer and it gets created when the user visits the websites to store information that they need. Example could be User Name details and shopping cart information from the previous visits.'
},{
  id: 3,
  question: 'Explain what is pop()method in JavaScript?',
  answer: 'The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array.  Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered. Example: var cloths = [“Shirt”, “Pant”, “TShirt”];cloths.pop(); Now cloth becomes Shirt,Pant'
},{
  id: 3,
  question: ' What is break and continue statements?',
  answer: 'Break statement exits from the current loop. Continue statement continues with next statement of the loop.'
},{
  id: 3,
  question: 'What are the two basic groups of dataypes in JavaScript?',
  answer: 'Primitive, Reference types. Primitive types are number and Boolean data types. Reference types are more complex types like strings and dates.'
},{
  id: 3,
  question: 'How generic objects can be created?',
  answer: 'var I = new object();'
},{
  id: 3,
  question: 'What is the use of type of operator?',
  answer: '‘Typeof’ is an operator which is used to return a string description of the type of a variable.'
},{
  id: 3,
  question: 'Which keywords are used to handle exceptions?',
  answer: 'Try… Catch—finally is used to handle exceptions in the JavaScript'
},{
  id: 3,
  question: 'Which keyword is used to print the text in the screen?',
  answer: 'document.write(“Welcome”) is used to print the text – Welcome in the screen.'
},{
  id: 3,
  question: 'What is variable typing?',
  answer: 'Variable typing is used to assign a number to a variable and then assign string to the same variable. Example is as follows: i= 8; i=”john”;'
},{
  id: 3,
  question: 'What are the different types of errors in JavaScript?',
  answer: 'Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.Run time errors: Errors that come due to misuse of the command inside the HTML language.Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation.'
},{
  id: 3,
  question: 'What is unshift method in JavaScript?',
  answer: 'Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.'
},{
  id: 3,
  question: 'How are object properties assigned?',
  answer: 'obj["class"] = 12; obj.class = 12;'
},{
  id: 3,
  question: 'Explain window.onload and onDocumentReady?',
  answer: 'The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.'
},{
  id: 3,
  question: 'How will you explain closures in JavaScript? When are they used?',
  answer: 'Closure is a locally declared variable related to a function which stays in memory when the function has returned. | function greeter(name, age) {var message = name + " says howdy!! He is " + age + " years old"; return function greet() {console.log(message)};} | // Generate the closure: var JamesGreeter = greeter("James", 23); | // Use the closure: JamesGreeter();',
},{
  id: 3,
  question: 'What is the drawback of creating true private methods in JavaScript?',
  answer: 'One of the drawbacks of creating true private methods in JavaScript is that they are very memory-inefficient, as a new copy of the method would be created for each instance.'
},{
  id: 3,
  question: 'What will be the output of the code below?',
  question1: ' var y = 1;',
  question2: 'if (function f(){}) {',
  question3: 'y += typeof f;',
  question4: '}',
  question5: 'console.log(y)',
  answer: '1undefined. The if condition statement evaluates using eval, so eval(function f(){}) returns function f(){} (which is true). Therefore, inside the if statement, executing typeof f returns undefined because the if statement code executes at run time, and the statement inside the if condition is evaluated during run time.'
},{
  id: 3,
  question: 'What will be the output of the code below?',
  question1: 'var output = (function(x){',
  question2: 'delete x;',
  question3: 'return x;',
  question4: '})(0);',
  question5: ' console.log(output);',
  answer: 'The output would be 0. The delete operator is used to delete properties from an object. Here x is not an object but a local variable. delete operators don\'t affect local variables.'
},{
  id: 3,
  question: 'What will be the output of the code below?',
  question1: 'var x = 1;',
  question2: 'var output = (function(){',
  question3: 'delete x;',
  question4: 'return x;',
  question5: ' })();',
  question6: 'console.log(output);',
  answer: 'The output would be 0. The delete operator is used to delete properties from an object. Here x is not an object but a local variable. delete operators don\'t affect local variables.'
},{
  id: 3,
  question: 'What will be the output of the code below?',
  question1: 'var x = 1;',
  question2: 'var output = (function(){',
  question3: 'delete x;',
  question4: 'return x;',
  question5: ' })();',
  question6: 'console.log(output);',
  answer: 'The output would be 0. The delete operator is used to delete properties from an object. Here x is not an object but a local variable. delete operators don\'t affect local variables.'
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''
},{
  id: 3,
  question: '',
  answer: ''


  }];

  return {
    all: function() {
      return questions;
    },
    remove: function(question) {
      questions.splice(questions.indexOf(question), 1);
    },
    get: function(questionId) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(questionId)) {
          return questions[i];
        }
      }
      return null;
    }
  }
})



.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
