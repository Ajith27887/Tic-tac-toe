let myDiv = document.querySelectorAll("button");


let check = 1;



function myFunction() {
    if ((myDiv[0].innerHTML == "x" || myDiv[0].innerHTML == "X") && (myDiv[1].innerHTML == "x" || myDiv[1].innerHTML == "X") && (myDiv[2].innerHTML == "x" || myDiv[2].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
        myDiv[6].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[0].innerHTML == "x" || myDiv[0].innerHTML == "X") && (myDiv[3].innerHTML == "x" || myDiv[3].innerHTML == "X") && (myDiv[6].innerHTML == "x" || myDiv[6].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[1].disabled = true;
        myDiv[2].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[2].innerHTML == "x" || myDiv[2].innerHTML == "X") && (myDiv[4].innerHTML == "x" || myDiv[4].innerHTML == "X") && (myDiv[6].innerHTML == "x" || myDiv[6].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[3].disabled = true;
        myDiv[5].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[3].innerHTML == "x" || myDiv[3].innerHTML == "X") && (myDiv[4].innerHTML == "x" || myDiv[4].innerHTML == "X") && (myDiv[5].innerHTML == "x" || myDiv[5].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[2].disabled = true;
        myDiv[6].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[6].innerHTML == "x" || myDiv[6].innerHTML == "X") && (myDiv[7].innerHTML == "x" || myDiv[7].innerHTML == "X") && (myDiv[8].innerHTML == "x" || myDiv[8].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[2].disabled = true;
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
    } else if ((myDiv[1].innerHTML == "x" || myDiv[1].innerHTML == "X") && (myDiv[4].innerHTML == "x" || myDiv[4].innerHTML == "X") && (myDiv[7].innerHTML == "x" || myDiv[7].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[6].disabled = true;
        myDiv[0].disabled = true;
        myDiv[2].disabled = true;
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
    } else if ((myDiv[2].innerHTML == "x" || myDiv[2].innerHTML == "X") && (myDiv[5].innerHTML == "x" || myDiv[5].innerHTML == "X") && (myDiv[8].innerHTML == "x" || myDiv[8].innerHTML == "X")) {
        alert("Player X Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[6].disabled = true;
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[7].disabled = true;
    } else if ((myDiv[0].innerHTML == "o" || myDiv[0].innerHTML == "O") && (myDiv[1].innerHTML == "o" || myDiv[1].innerHTML == "O") && (myDiv[2].innerHTML == "o" || myDiv[2].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
        myDiv[6].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[0].innerHTML == "o" || myDiv[0].innerHTML == "O") && (myDiv[3].innerHTML == "o" || myDiv[3].innerHTML == "O") && (myDiv[6].innerHTML == "o" || myDiv[6].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[1].disabled = true;
        myDiv[2].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[2].innerHTML == "o" || myDiv[2].innerHTML == "O") && (myDiv[4].innerHTML == "o" || myDiv[4].innerHTML == "O") && (myDiv[6].innerHTML == "o" || myDiv[6].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[3].disabled = true;
        myDiv[5].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[3].innerHTML == "o" || myDiv[3].innerHTML == "O") && (myDiv[4].innerHTML == "o" || myDiv[4].innerHTML == "O") && (myDiv[5].innerHTML == "o" || myDiv[5].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[2].disabled = true;
        myDiv[6].disabled = true;
        myDiv[7].disabled = true;
        myDiv[8].disabled = true;
    } else if ((myDiv[6].innerHTML == "o" || myDiv[6].innerHTML == "O") && (myDiv[7].innerHTML == "o" || myDiv[7].innerHTML == "O") && (myDiv[8].innerHTML == "o" || myDiv[8].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[2].disabled = true;
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
    } else if ((myDiv[1].innerHTML == "o" || myDiv[1].innerHTML == "O") && (myDiv[4].innerHTML == "o" || myDiv[4].innerHTML == "O") && (myDiv[7].innerHTML == "o" || myDiv[7].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[6].disabled = true;
        myDiv[0].disabled = true;
        myDiv[2].disabled = true;
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[5].disabled = true;
    } else if ((myDiv[2].innerHTML == "o" || myDiv[2].innerHTML == "O") && (myDiv[5].innerHTML == "O" || myDiv[5].innerHTML == "O") && (myDiv[8].innerHTML == "o" || myDiv[8].innerHTML == "O")) {
        alert("Player O Won the match")
        myDiv[1].disabled = true;
        myDiv[0].disabled = true;
        myDiv[6].disabled = true;
        myDiv[3].disabled = true;
        myDiv[4].disabled = true;
        myDiv[7].disabled = true;
    }
}
myFunction()

function Btn() {
    if (check == 1) {
        myDiv[0].innerHTML = "X";
        myDiv[0].disabled = true;
        myDiv[0].style.background = "black";
        myDiv[0].style.color = "white";
        check = 0;
    } else {
        myDiv[0].innerHTML = "O";
        myDiv[0].disabled = true;
        myDiv[0].style.background = "black";
        myDiv[0].style.color = "white";
        check = 1;
    }
}

function Btn_2() {
    if (check == 1) {
        myDiv[1].innerHTML = "X";
        myDiv[1].disabled = true;
        myDiv[1].style.background = "black";
        myDiv[1].style.color = "white";
        check = 0;
    } else {
        myDiv[1].innerHTML = "O";
        myDiv[1].disabled = true;
        myDiv[1].style.background = "black";
        myDiv[1].style.color = "white";
        check = 1;
    }

}

function Btn_3() {
    if (check == 1) {
        myDiv[2].innerHTML = "X";
        myDiv[2].disabled = true;
        myDiv[2].style.background = "black";
        myDiv[2].style.color = "white";
        check = 0;
    } else {
        myDiv[2].innerHTML = "O";
        myDiv[2].disabled = true;
        myDiv[2].style.background = "black";
        myDiv[2].style.color = "white";
        check = 1;
    }
}

function Btn_4() {
    if (check == 1) {
        myDiv[3].innerHTML = "X";
        myDiv[3].disabled = true;
        myDiv[3].style.background = "black";
        myDiv[3].style.color = "white";
        check = 0;
    } else {
        myDiv[3].innerHTML = "O";
        myDiv[3].disabled = true;
        myDiv[3].style.background = "black";
        myDiv[3].style.color = "white";
        check = 1;
    }
}

function Btn_5() {
    if (check == 1) {
        myDiv[4].innerHTML = "X";
        myDiv[4].disabled = true;
        myDiv[4].style.background = "black";
        myDiv[4].style.color = "white";
        check = 0;
    } else {
        myDiv[4].innerHTML = "O";
        myDiv[4].disabled = true;
        myDiv[4].style.background = "black";
        myDiv[4].style.color = "white";
        check = 1;
    }
}

function Btn_6() {
    if (check == 1) {
        myDiv[5].innerHTML = "X";
        myDiv[5].disabled = true;
        myDiv[5].style.background = "black";
        myDiv[5].style.color = "white";
        check = 0;
    } else {
        myDiv[5].innerHTML = "O";
        myDiv[5].disabled = true;
        myDiv[5].style.background = "black";
        myDiv[5].style.color = "white";
        check = 1;
    }
}



function Btn_7() {
    if (check == 1) {
        myDiv[6].innerHTML = "X";
        myDiv[6].disabled = true;
        myDiv[6].style.background = "black";
        myDiv[6].style.color = "white";
        check = 0;
    } else {
        myDiv[6].innerHTML = "O";
        myDiv[6].disabled = true;
        myDiv[6].style.background = "black";
        myDiv[6].style.color = "white";
        check = 1;
    }
}

function Btn_8() {
    if (check == 1) {
        myDiv[7].innerHTML = "X";
        myDiv[7].disabled = true;
        myDiv[7].style.background = "black";
        myDiv[7].style.color = "white";
        check = 0;
    } else {
        myDiv[7].innerHTML = "O";
        myDiv[7].disabled = true;
        myDiv[7].style.background = "black";
        myDiv[7].style.color = "white";
        check = 1;
    }
}

function Btn_9() {
    if (check == 1) {
        myDiv[8].innerHTML = "X";
        myDiv[8].disabled = true;
        myDiv[8].style.background = "black";
        myDiv[8].style.color = "white";
        check = 0;
    } else {
        myDiv[8].innerHTML = "O";
        myDiv[8].disabled = true;
        myDiv[8].style.background = "black";
        myDiv[8].style.color = "white";
        check = 1;
    }
}