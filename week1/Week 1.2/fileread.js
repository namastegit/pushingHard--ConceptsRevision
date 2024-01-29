// ?? here are the changes 

const fs = require('fs');

function f1(){
    return new Promise(function(resolve){
        setTimeout( () => { fs.readFile("a1.txt","utf-8", function(err,data){
            resolve(data);
        });
    }, 4000
        );
    });
}

function main(data){
    console.log(data);
}

f1().then(main);




function myPromise(){
    return new Promise(function(resolve){
        setTimeout(function (){
            resolve("Hello Resolved");
        }, 3000);
    })
}

async function main(){
    let value = await 
     myPromise();
    console.log(value);
}

main();

