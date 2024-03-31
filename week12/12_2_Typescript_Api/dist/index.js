"use strict";
// interface User {
//     name: string;
//     age: number;
// }
const users = new Map();
users.set("abc", { id: "aa", name: "11" });
const res = users.get("abc");
console.log(res);
// EXCLUDE
// type Events = 'click' | "scrool" | "mousemove";
// type ExcludeEvent = Exclude<Events,"mousemove">;
// const func = (parameter: ExcludeEvent) => {
//     console.log(`Handling Events: ${parameter};`)
// };
// func("click");
