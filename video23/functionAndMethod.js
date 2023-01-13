console.log("Hello World")
let sum = (a, b) => {
    return a + b;
}
console.log(`"result = ", sum(1, 9)`);
let obj = {
    name: "Hải",
    Age: 19,
    getName: function () {
        return this.name;
    }
}
console.log("Get name : ", obj.getName());