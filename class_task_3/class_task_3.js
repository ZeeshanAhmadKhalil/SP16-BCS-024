 //           DIFFERENCE B/T REGULAR AND ARROW FUNCTION

 //           1)syntax
 let square=function(x){
     square=x*x
     return square
 }
 console.log(square(3))

 let square_arrow=x=>{
    square=x*x
    return square
 }
 console.log(square_arrow(3))
 
 //           2)Use of this Keyword

let Person={
    name:"Zeeshan",
    print_name:function(){
        return this.name
    }
}
console.log(Person.print_name())

let Person_arrow={
    name:"Zeeshan",
    print_name:()=>{
        return this.name // undefined as arrow function do not have there own this
    }
}
console.log(Person_arrow.print_name())

//            3)Availibility of arguments
let numbers={
    show_numbers(){
        for(i of arguments) // arguments is predefined shows arguments passed to function
            console.log(i)
    }
}
numbers.show_numbers(1,2,3)

let numbers_arrow={
    show_numbers_arrow:()=>{
        for(i of arguments) // can't create arguments by itself
            console.log(i)
    }
}
// numbers_arrow.show_numbers_arrow(1,2,3) ERROR

let numbers2={
    show_numbers(a,b,c){
        console.log(a+","+b+","+c)
    }
}
numbers2.show_numbers(1,2)

let numbers_arrow2={
    show_numbers(a,b,c){
        console.log(a+","+b+","+c)
    }
}
// numbers_arrow2.show_numbers_arrow(1,2) //ERROR

//            4)Using new keyword
function new_function(name,age){
    // var name
    this.name=name
    this.age=age
    // return this.name
}
name=new new_function("moon",22)
console.log(name)

new_function_arrow=(name,age)=>{
    // var name
    this.name=name
    this.age=age
    // return this.name
}
// name=new new_function_arrow("moon",22) //ERROR as can't use arrow function as a constructor
// console.log(name)

//the arrrow function can be used as call back functions as follows

var a = [
    "We're up all night 'til the sun",
    "We're up all night to get some",
    "We're up all night for good fun",
    "We're up all night to get lucky"
  ];
  
  
  var a2 = a.map(function(s){ return s.length });
  console.log(a2)
  
  var a3 = a.map( s => s.length );
  console.log(a3)
