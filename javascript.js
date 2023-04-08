let color = "black";
let click = false;

function createBoard(size){
    let board = document.querySelector(".div-grid");
    let squares = board.querySelectorAll("div")
    squares.forEach(div => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`


    for (let i = 0; i < size * size; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "white"
        square.addEventListener("mouseover", colorSquare);
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input){
    if (input >= 2 && input <= 100){
        createBoard(input)
    } else{
        console.log("not a valid number of squares")
    }
}

function colorSquare(){
    if (click){
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (color === "black"){
            this.style.backgroundColor = "black"
        } else {
            this.style.backgroundColor = "white"
        }
    }
}

function changeColor(choice){
    color = choice;
}

function reset(){
    let board = document.querySelector(".div-grid");
    let squares = board.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "white")
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON"){
        click = !click;
    }
} )


createBoard(16)