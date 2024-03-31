// interface User {
//     name: string;
//     age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const res = sumOfAge({
//     name: "akshay",
//     age: 24,
// },{
//     name: "Ankush",
//     age: 25,
// });
// console.log(res);


// API USING PICK API TO DEFINGING NEW TYPES:

// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// type UserProfile = Pick<User, 'name'|'age'>;

// function sumOfAge(user1: UserProfile, user2: UserProfile) {
//     return user1.age + user2.age;
// }

// const res = sumOfAge({
//     name: "akshay",
//     age: 24,
// },{
//     name: "Ankush",
//     age: 25,
// });
// console.log(res);



// RECORD AND MAP API___

// interface User {
//     id: string;
//     name: string;
// }

// type Users = Record<string,User>

// const users: Users = {
//     "abc123": {id: "abc", name: "akki"}
// }
// console.log(users["abc123"].id);

//MAPS

interface User {
    id: string;
    name: string;
}

const users = new Map <string,User>();

users.set("abc",{id:"aa",name:"11"})

const res = users.get("abc");
console.log(res);

// EXCLUDE

// type Events = 'click' | "scrool" | "mousemove";

// type ExcludeEvent = Exclude<Events,"mousemove">;

// const func = (parameter: ExcludeEvent) => {
//     console.log(`Handling Events: ${parameter};`)
// };

// func("click");