// simple data 
let a:string="I am from a   the data1.ts file";
let b:string="I am from b  the data2.ts file";
let c:string="I am from c  the data2.ts file";

// functrion
function sum(c:number,d:number) {
  return console.log(c+d);  
}
// JSON data 
const data1 = {
"name": "John Doa",
"age":30,
"isStudent":false,
"address":{
    "street":"123 Main St",
    "city":"lahore",
    "country":"pakistan",

},
"favouriteFruit":["apple","banana","orange"],
"contect":{
    "email":"anamgulzar67@gmail.com",
    "phone":"03046453405",

}
}
export default b;
export{b,c,sum}