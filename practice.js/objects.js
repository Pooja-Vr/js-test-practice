// object is just like a varibles but their is a small difference b/w them 
// variable store an one value at a time  
// example => const bus = blue;
  

// Objects store multiple value at a time
// example => const bus ={type:"double"; model:"2018"; price:"2500000"; color:"blue"};

// const person = {firstName:"Pooja", lastName:"Verma", age:40, eyeColor:"blue"};

// Display Data from the Object:
// console.log(person.firstName + " is " + person.age + " years old.");




// we can access object properties in two ways:

// objectName.propertyName
// objectName["propertyName"]

const person = {
    firstName: "Pooja",
    lastName : "Verma",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
    console.log(firstName)
  };