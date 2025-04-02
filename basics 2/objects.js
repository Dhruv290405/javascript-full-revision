// singleton 
// example of singleton - Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "dhruv",
    "full name": "dhruv tiwari",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "dhruv@gsoc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "dhruv123@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "dhruv123@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());