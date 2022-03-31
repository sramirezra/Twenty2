function askName() {
    var name = prompt("What's your name")
    return name
}

var human = 0;

var computer = 0;

do {
    function rNum() {
        var r = Math.floor(Math.random()* 10) + 1
        return r
}while (computer < 16)

do {
    
   var r = Math.floor(Math.random()* 10) +1
    
    human = human + r;
    
    if (human> 20) {
        break
    }
    
console.log(`The new computer number is ${r}. Computer new total is ${computer} `)
    
var desicion = prompt("Would you like another number?")
    
}while ((human < 20) && (desicion == "y"))

if ((computer > human) && (computer <=20) && (human <= 20)) {
    console.log ("The computer wins.")
} else if ((computer < human) && (computer <=20)) {
        console.log("yey!!!")
}






