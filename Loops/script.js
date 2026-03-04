function forLoop() {
    let text = "";
    for (let i = 1; i <= 5; i++) {
        text += i + " ";
    }
    document.getElementById("output").innerHTML = text;
}

function whileLoop() {
    let i = 1;
    let text = "";

    while (i <= 5) {
        text += i + " ";
        i++;
    }

    document.getElementById("output").innerHTML = text;
}

function doWhileLoop() {
    let i = 1;
    let text = "";

    do {
        text += i + " ";
        i++;
    } while (i <= 5);

    document.getElementById("output").innerHTML = text;
}

function forInLoop() {
    let obj = {a: 10, b: 20, c: 30};
    let text = "";

    for (let key in obj) {
        text += key + " = " + obj[key] + "<br>";
    }

    document.getElementById("output").innerHTML = text;
}

function forOfLoop() {
    let arr = [10, 20, 30, 40, 50];
    let text = "";

    for (let value of arr) {
        text += value + " ";
    }

    document.getElementById("output").innerHTML = text;
}

function breakContinue() {
    let text = "";

    for (let i = 1; i <= 5; i++) {

        if (i == 3) {
            continue;   // skip 3
        }

        if (i == 5) {
            break;      // stop at 5
        }

        text += i + " ";
    }

    document.getElementById("output").innerHTML = text;
}

function nestedLoop() {
    let text = "";

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            text += j + " ";
        }
        text += "<br>";
    }

    document.getElementById("output").innerHTML = text;
}