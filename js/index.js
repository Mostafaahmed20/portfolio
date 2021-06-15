const elm = document.querySelectorAll('.prog');


var i = 0;
(function move() {
  if (i == 0) {
        
    i = 1;
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
          
        for (let i = 0; i < elm.length; i++) {
          elm[i].style.width = width + "%";
          elm[i].innerHTML = width + "%";
        }

      }
    }
  }
})();


// class Person {

//   constructor(firstname, lastname, age, phone) {
    
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.phone = phone;
//     this.id = (function () {
//       return Math.random() * 100;
//     })();
    
 
//   };
//   isAdult() {
//     return this.age > 20 ? console.log(`${this.firstname} is Adult`) : console.log(`${this.lastname} is not Adult`)   
//   }
//   get fullname() {
//     return `id :  ${this.id} name :  ${this.firstname} ${this.lastname} age :  ${this.age}`;
//   };
  
//   set newdata( fullname) {
//     let nameparts = fullname.split(' ');
//     // this.id = id;
//     this.firstname = nameparts[0];
//     this.lastname = nameparts[1];
//   }
// }

// class Male extends Person {
//   constructor(firstname , lastname , age , phone ) {
//     super(firstname, lastname, age, phone);
//     this.courses = [];
   
//   }

//   static newform(preson_data) {
//   return new Person(preson_data.firstname , preson_data.lastname , preson_data.age  , preson_data.phone)
// }

//   enrole(course_name) {
//    return `courses enroled : ${ this.courses.push(course_name) }`; 
//   }

  
// }


// let john = new Person('ali', 'ahmed', 132, 099090909090);
// let mohamed = new Person('mogamed', 'ahmed', 132, 099090909090);
// let kkam = new Male('ali', 'ahmed', 132, 099090909090);
// let jakye = Male.newform(mohamed);

// kkam.enrole('paython')
// kkam.enrole('java')
// kkam.enrole('javascript')
// console.log(jakye)




// function complexty(pass) {
//   let regex = /^(?=.*[a-z]) (?=.*[A-Z]) (?=.*\d).{8,} $/;
//   return regex.test(pass) ; 
// }

// console.log(complexty('Strongerr1'))












// let genId = (n) => Math.random() * n; 
// let obj = new Object({id:genId(10) , name:'mostafa-ahmed' , age : 28});

// delete( obj.id )
// console.log(obj) 







// let obj = { id: 1, name: 'ali', age: 23 };

// function changeobj(Object) {
//   return  Object.obj = { id: 4, name: 'ade', age: 233 }; 
// }
// changeobj(); 
// console.log(obj)



// let compo = {};

// let apple = 'applecomputer'; 

// compo[apple] =  'apll';

// console.log(compo)









// let obj = {};
// obj.id = 100;
// obj.name = 'mostafa-ahmed';
// obj.age = 28;

// console.log(obj); 


// let myobj = new Object({ id: 100, name: 'ali', age: 12 })
// // modifiy 

// myobj.speak = function () {
//   alert(`hello my name is ${this.name}  my age ${this.age}  `)
// }

// // delete 

// delete  myobj.age



// console.log(myobj); 




// let icecream = { type: 'choclete' };
// let icecream2 = icecream; 

// // icecream2 = { type: 'valnilla' }
// icecream.type = 'valnilla'

// console.log(icecream2)

// let obj1 = { icecream: 'vannila' }
// let obj2 = {icecream : 'vannila'}
// console.log(obj1 === obj2) // false 

// console.log(obj2.icecream === obj1.icecream)        /// true  


let obj1 = { id: 1, name: "ali", age: 12 };
let obj2 = { id: 3, name: "ahmed", age: 22 };


function printUser() {
  console.log(`hello ${this.name} ${this.age}`)
}

obj2.printUser = printUser;
obj1.printUser = printUser; 
// obj2.printUser();
obj1.printUser()






// extracting properites and values 

// function extract(name , age , phone) {
//   let myobje =  {
//     name,
//     age,
//     phone
//   }
//   return Object.values(myobje); 
// }
// console.log(extract("mostafa" , "ahmed" , 090909090))







// var global_scope = 1000;


// function sayNum(global_scope) {
//   global_scope = 2000;
//   function sayNum2() {
// return  console.log(global_scope)
//   }
//   sayNum2();
// }

// console.log( sayNum(global_scope)); 




// let name = "mostafa-ahmed";
// function interduce() {
//   let you = 'student';
  
//   function giveintro () {
//  return  console.log(`hello ${name}  iam still ${you}`)
// }

//   giveintro(); 
// }

// interduce()























































































// let obj = {};
// obj.id = genId(100);
// obj.name = 'mostafa-ahmed';
// obj.age = 28;
// console.log(obj); 


































































































