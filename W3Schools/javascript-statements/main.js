let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 5

let a = 5; b = 6; c = a + b;    // With semicolon, the multiple statement in one line is allowed

function Sum() {    // Code block
    document.getElementById("demo1").innerHTML = `The result of z is ${x + y}`;
    document.getElementById("demo2").innerHTML = `The result of c is ${a + b}`;
}

// Programmers often avoid the code that is longer than 90 characters, they break it in two lines after an operator