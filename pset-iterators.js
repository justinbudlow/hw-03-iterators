/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Only use either `.map()`, `.find()` or `.filter()` to solve the problems in the problem set

  * Do not use `.forEach()`

You can use any additional variables that you deem necessary
to solve each problem.

You can use either regular functions or
arrow functions **for your iterator callbacks**

*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Problem 1:

1. Using the `presidents` array, return the "name" of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 1:')

// Add your code below this line

const firstWhigPresident = presidents.find(function (president) {
  /*
    Using .find() because we are only interested in returning the first element that meets the condition
  */
  return president.party === 'Whig'
})

console.log(firstWhigPresident.president)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const (return a list of objects)

2. Print `presidentsNamedJames` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 2:')

// Add your code below this line

const presidentsNamedJames = presidents.filter((president) => {
  // console.log(president)
  return president.president.includes("James")

})

console.log(presidentsNamedJames)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Expected Result Shape: An array of strings representing the party name of each president

Tip: your new array should contain 45 elements

************/
console.log('Problem 3:')

// Add your code below this line

const presidentialParties = presidents.map((president) => {
  // console.log(president)
  return president.party
})

console.log(presidentialParties)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 4:')

// Add your code below this line

const presidentsBetween1850and1900 = presidents.filter((president) => {

  let yearTookOffice = president.took_office.slice(0,4)

  return yearTookOffice > 1850 && yearTookOffice < 1900
})

console.log(presidentsBetween1850and1900)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 5:')

// Add your code below this line

const livingPresidents = presidents.filter((president) => {

  return president.death_year === null
})

console.log(livingPresidents)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array,
return the "name" of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 6:')

// Add your code below this line

const firstRepublican = presidents.find(function (president) {

  return president.party === 'Republican'
})

console.log(firstRepublican.president)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 7:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 7:')

// Add your code below this line

const shortTermPresidents = presidents.filter((president) => {

  return (parseInt(president.left_office) - parseInt(president.took_office)) < 4

})

console.log(shortTermPresidents)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 8 (Bonus):

1. Using the `presidents` array, return an object that represents the number of occurrences of the first name of all of the presidents (past and current)

Save the data in a variable
called `firstNameCount`, declared with const

2. Print `firstNameCount` to the console

Expected Result Shape: An object where each key is the firstName and the value is the number of presidents that share that first name.

Example (not the actual answer):

{ "James":  5, "George": 3, "Barack": 1, ....}

************/
console.log('Problem 8:')

// Add your code below this line

const firstNameCount = presidents.reduce((nameTally, current)=>{

// the "president" attribute in the presidents array is a full name, so split out each full name into an array of names (ex: ['first', 'last'])
const presidentNameArray = current.president.split(' ')

//the first name is always the first element of the presidentNameArray array. Store the first name is the firstNames variable
const firstName = presidentNameArray[0]

//each time through, the function looks at the first name based on how it's stored in the firstNames variable, and adds or increments to the firstNameCount object as necessary
  if (nameTally[firstName] === undefined) {
    // if a first name does not already exist in the object
    nameTally[firstName] = 1
  } else {
    // first name already exists in letterCount object
    // increment value by 1
    nameTally[firstName] = nameTally[firstName] + 1
  }
  return nameTally
}, {})

console.log(firstNameCount)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
