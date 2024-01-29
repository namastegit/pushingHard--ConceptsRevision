
// // -------------------------------Async and Await--------------------------------)





// function harkiratF() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             anyyy(); // Call anyyy function after 2 seconds
//             resolve("Hello RESOLVED");
//             anyyy();
//         }, 2000);
//     });
// }

// function anyyy() {
//     console.log("Printed after 2 sec timeout.");
// }

// async function main() {
//     console.log("12");
//     const value = await harkiratF();
//     console.log(value);
// }

// main();

// // ====================================================

// function f1(){
//     return new Promise(function (callback){
// callback("hoooiii");
//     });

// }

// async function main(){
//     const value = await f1();
//     console.log(value);
// }

// // ================== Without async and await only Promises============



// function f2() {
//     return new Promise(function (resolve) {
// setTimeout(function (){
//         resolve("Resolved Parameteruhgh")}, 3000);
//     });
// }

// function main() {
// let a = f2();
// console.log(a);
// a.then(function(value){
//     console.log(value);
// });
// // Promise { 'Resolved Parameter' }
// }
// main();

// // ===========================With Async and await============

// function f3(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("Hii there !!");
//         }, 2000);
       
//     });
// }

// async function main(){
//     const value = await f3();
//     console.log(value);
// }

// main();


// ========================================


function anyFun (){
    return new Promise( (resolve) => {

        setTimeout( ()=> {
            resolve("Hello Resolved")}, 3000
        );
    });
};

async function main(){
let value = await anyFun();
console.log(value);
};

main();