//Primitives -> Pass by Value

// ----------

//String

"double quote"
'single quote'
`back ticks for ${'interpolation'}`

let hello = "hello"
const helloFunc = () => hello
let hiToYou = () => `${hello} to you`


// --------------------

//Number

//Negative ex: -1

//Exponent ex: -1e2

//Float ex: 0.987

//NaN  ex: 'hello' * 3

// parseInt / parseFloat
parseInt("2")

let three = 3
parseInt(three)

// parseInt also used to change base
parseInt("44323", 5)

parseFloat("2.52")



//---------------------------------

//Boolean
true / false 

true && false
true || false 
1 && true
0 && true //wth?
false || 1
0 || true
"yes" || false //"yes"
"" || false 


// Falsey values
// use !! to test, just like Ruby

"" // empty string
false // false
0 // zero
undefined
null
NaN


// Truthy values (everything else)

typeof true 
typeof "hello"
typeof 2 
typeof null
typeof undefined 


//-----------------------
// Undefined
//default return of your function (non-arrow)

let name
console.log(name)




// -------------------
// Null

let someVar = null
console.log(someVar) // => null



// -------------------
// Symbol -> a unique identifier
// symbols or strings may be used for object property keys (more info below)
// all us to create "hidden" properties --> used in large scale projects, specific use cases
// do not auto-convert to strings --> most values in JS do:

let id = Symbol("id");
typeof id 
alert(id) //can change to .toString
alert(id.toString())


let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2)

let user = { 
  name: "John"
};

user[id1] = 1;

alert( user[id] );

user
//{name: "John", Symbol(id): 1}

let user2 = {[id2]: 1, name: "Matt"}
user2 
user2[id2] === user[id1]
id1 === id2



// comparison of Primtives


let two = 2
let too = 2
two === too

let twoStr = "2"
twoStr == two 
twoStr === two 

let name = "Kevin"
let newName = name 

name = "Lee"

//newName?


let age = 10
age === 10

function mult(num){
    return num = num*2
}

mult(age)

age //10 

// ----------------------------------------------------------------------
// Non-Primitives - pass by reference


let arrEx = ["a", "b", "c", "d"]
arrEx === ["a", "b", "c", "d"] //???

let arrExTwo = ["a", "b", "c", "d"]
arrEx === arrExTwo  //???

arrEx = arrExTwo
arrEx === arrExToo //???

// arrExTwo???

let arr = [1,2,3,4]
arr === [1,2,3,4]
arr == [1, 2, 3, 4]

function multiply(col){
    let i = 0
    col.forEach(e => {
        col[i] = e * 2
        i += 1
    })
}



// Object  (object literals) --> often structure we receive w JSON example: back from API
//object property keys may be either string or symbol ONLY
const person = {name: 'Fred', age: '20'}
const school = {name: 'high school', students: [person]}

person.age = 30
person["name"] = "Freddy"
person["height"] = "tall"

let id = Symbol("id")
school[id] = 7
school
school[id]

Object.keys(school)
//symbols are hidden

//BY VALUE VERSUS BY REFERENCE
//VALUE
let a = 5 
let b = a
console.log(a) 
console.log(b) 

a = 1
console.log(a) 
console.log(b) 


//REFERENCE

let arr = [1, 2, 3]
let arr2 = arr 

arr[0] = 5


let a = {language: "Javascript"}
let b = a

console.log(a) 
console.log(b) 

a.language = "Ruby"

console.log(a) 
console.log(b) 



// ----------------
// Function ==> many ways to write

    function iLikePancakes() {
        console.log('Pancake technology is truly incredible. What a time to be alive!')
        return 2
    }

    let breakfast = iLikePancakes 

    iLikePancakes

    iLikePancakes()  // CALLING THE FUNCTION

    function doubleFunction(){
        let greeting = "hi"
        console.log("Parent function")
        return function(){
            console.log(greeting)
        }
    }


    doubleFunction()()
    doubleFunction()
    doubleFunction



// Function Expression
let arr = [1,2,3]
let doSomething = function() { return true }
let doSomethingElse = () => false //expecting return value
arr.map(function(n) { return n + 1 })


// Function declaration
function doSomething() {
    return true
}
console.log(doSomething)
doSomething() //calling the function



// ----------------
// Array
let arr = [1, 2, 3, "a", "b", "c", { hello: 'world' }]
// .map 
// .reduce
// .forEach
// .split
// MDN documentation for array methods