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
  question: 'What is negative infinity?',
  answer: 'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.'
},{
  id: 3,
  question: 'What is negative infinity?',
  answer: 'Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.'

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
