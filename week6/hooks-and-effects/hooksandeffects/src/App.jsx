///6.2--  1:09:20 - another approach if dont want to use memoization -- by using useeffect[array] -- put expensive operation inside useEffect and [use this ] -- this is how we can control the rerendering of expensive operation. {harkirat only uses this approach only -- to see syntax got to video or camera pictures - date - 02/26/2024-- 6:15 PM}-- but for this approach we need to use one extra state variable(drawback)

//2nd -- we can use useMemo also in place of memo and can take use of []-- usememo(()={},[])

// --------------------------------------------------------------------------------------
// import React, { useState, memo, useEffect, useCallback} from "react";

// function App() {
// function ButtON() {
  
//   const [count, setCount] = useState(0);

//   function counterINC() {
//     setCount(count + 1);
//   }


//   function RefreshC() {
//     setCount(0);
//   }
// return (
//   <>
//   <button onClick={counterINC}>Counter {count}</button>
//       <button onClick={RefreshC}>Refresh Counter</button> <br />
//       <br />
//   </>
// )
// }

// const Component1 = memo(() => {
//   const [value, setValue] = useState(0);

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="Enter Number"
//         onChange={(event) => {
//           let sum = 0;
//           const num = parseInt(event.target.value, 10);
//           for (let i = 1; i <= num; i++) {
//             sum += i;
//           }

//           setValue(sum);
//         }}
//       ></input>
//       <br />
//       Sum: {value}
//       <br />
//     </>
//   );
// });

//   return (
//     <>
//       <ButtON/>
//       <Component1 />
//     </>
//   );
// }
// export default App;-------------------------------------------------------------------------------USE-EFFECT ////// USE - MEMO
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// 1-- In this code we have not used {useEffect} , {useMemo} -- so when we are rendering one component then the all component is rendering 


// import React, { useState } from "react";


// function App() {
//   const [count, setCount] = useState(0);
// const [number, setNumber] = useState();


//   return(
//     <>
//     <input type="number" placeholder="Enter number" onChange={(event) => {
//     let num = parseInt(event.target.value, 10);
//     let sum = 0;

//     for (let i = 1; i <= num; i++) {
//       sum = sum + i;
//     }

//     console.log("Render");
//     setNumber(sum);
  
//     }}></input>
//     <br></br> 
//     <br></br> 
//     <div>Sum:{number}</div>
//     <br></br> 
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Count {count}</button>
//     </>
//   )

// }
// export default App;

// ---------------------------------------------------------------
// USING USE-EFFECT

// import React, { useEffect, useState } from "react";


// function App() {
//   const [count, setCount] = useState(0);
// const [number, setNumber] = useState(1);
// const [newN, setNewN] = useState(0); // if we want to use useEffect we need to specify the new state variable

// useEffect(() => {
//     let sum = 0;
//     for(let i = 1; i <= number; i++) {
//       sum = sum + i;
//     };
//     setNewN(sum);
//     console.log("Render1")

//     },[number]) // this  will only render when number will change

//   return(
//     <>
//     <input type="number" placeholder="Enter number" onChange={(event) => {
// let num = event.target.value;
// setNumber(num);
//     }}></input>
//     <br></br> 
//     <br></br> 
//     <div>Sum:{newN}</div>
//     <br></br> 
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Count ({count})</button>
//     </>
//   )

// }
// export default App;


// ---------------------------------------------------------------
// USING USE-Memo


// import React, { useMemo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState();

//   const number1 = useMemo(() => {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//       sum = sum + i;
//     }
//     console.log("Render");
//     return sum;
//   }, [number]);  // this will only run only when number will going to change

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="Enter number"
//         onChange={(event) => {
//           let num = parseInt(event.target.value, 10);
//           setNumber(num);
//         }}
//       ></input>
//       <br />
//       <br />
//       <div>Sum: {number1}</div>
//       <br />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count ({count})
//       </button>
//     </>
//   );
// }

// export default App;
// ------------------------------------------------------------
// week6.2 - time - 01:20:00 -- USECALLBACK
// _________________________________________________________________

// ## useCallback - is used when we want to control rendering  -- because -- a=1, b=1== are ture  -- but they are not referencing to the sme element in the memory -- so -- when  sum(a,b){return a+b}===SubmitEvent={(a,b)} {return a+b} ---> are False---

// so these useEffect - use memo and use call back -- controls the re rendering - - when input changes then re rendering happens -- but --> when a=1,b=1 ===> a == b (true) BUT  they are not refercncely equal - they are refering to other thing but they are same --  so JavaScript will treat both of them as false and re render agian -- so control this re render we use  useCallback

// let a = 1;
// let b = 1;
//  a==b:
//  answer:: ture

// but------------------------
// function sum1(a,b) {
//   return a + b;
// }
// function sum2(a,b) {
//   return a + b;
// }

// sum1==sum2
// answer :: false --> answer is false even they are same --
// because -- referencially not equal 

// object
// a={}
// b={}
// a==b 
// answer:: false 
// -----------------------------------------------------



// import React, { memo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

// function a(){
//   console.log("hii");
// }
 
//   return (
//     <>
//  <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count ({count})
//       </button> <br></br>
//       <Demo a={a}></Demo>  
//       {/* any time count will change then whole component will change and react will think that we have defined function a again with diffrent value (which is not ture -- a is same) -- so it will re render Demo(memo) -- again -- so to control this we will use callBack */}
//     </>
//   );
// }
// const Demo  = memo(({a}) => {
// console.log("render1");
// return(
// <>
// hii there {a}
// </>)
// }
// )
// export default App;

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// CALLBACK USING 
// ------------------------------------------------



import React, { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

const  a = useCallback(() => {
  console.log("hii");
},[])
 
  return (
    <>
 <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count ({count})
      </button> <br></br>
      <Demo a={a}></Demo>   
     
    </>
  );
}
const Demo  = memo(({a}) => { //now this will not be rendered until any cahnges in valu eof function
console.log("render1"); 
return(
<>
hii there {a}
</>)
}
)
export default App;

// --------------------------------------------