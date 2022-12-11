let programs = ["nothing", "else", "capcom"]
let [first, second, third] = programs


// Object literal

let name = "ten";
let myObj = {
    // ten: "nothing"
    [name]: "another thing",
    sayHi() {
        console.log("Hello, my name is " + this.name)
    }
}

myObj.sayHi()
