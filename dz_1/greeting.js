const name = prompt("What is your name?")
console.log("Hello " + name)
// ***************

const massiv = [22, 34, 1,  true, false, "Array", "length"]
massiv.length
const massiv2 = [459, 45, 2, "massiv", true, false, "Array", "length", 47, 32]
massiv2.length

if (massiv.length < massiv2.length){
    console.log(massiv.length + "<" + massiv2.length)
}else if ( massiv.length > massiv2.length){
    console.log(massiv.length + ">" + massiv2.length)
}else {
    console.log(massiv.length + "=" + massiv2.length)
}

// ***************
//
let color = "red"
switch (color) {
    case "red":
        console.log("color is red")
        break;
    case "yellow":
        console.log("color is yellow")
        break;
    case "green":
        console.log("color is green")
        break;
    default:
        console.log("Default")

}
// ***************
const arr = ["Aydin", true, false, 35]
console.log(arr.indexOf("Aydin"));
console.log(arr.indexOf(5));
console.log(arr.indexOf(35));

// ***************
// ***************