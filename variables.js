// var -> hoisted
function hi() {
    var charlotte = "Charlotte"
    console.log(charlotte)
  }
  //flip lines, then replace w let

  function hi() {
    var charlotte = "Charlotte"
    console.log(charlotte)
    var charlotte =  "Char"
    console.log(charlotte)
  }
  //versus w let or const 

let hello = "hello"

function hi() {
    console.log(hithere) //#hithere, undefined
    console.log(charlotte)// undefined 
    var charlotte = "Charlotte"
    console.log(hello) // undefined, "hello"
    console.log(helloagain) //err, "hello again"
  }

 
  var hithere = "Hi, there"
  let helloagain = "hello again" //move to bottom of function