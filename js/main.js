class Gameboard{
    constructor (emptySpaces, xPlayer, oPlayer, currentPlayer){
        //creates an array of empty elements for the game spaces
        emptySpaces = Array.from(document.getElementsByClassName('square'))
        xPlayer = 'x'
        oPlayer = 'o'
        currentPlayer = xPlayer
    }
    new(){       
        //creates a new gameboard
        for (let i = 0; i < 9; i++){
            const oneSpace = document.createElement('section');
            oneSpace.classList.add('square');
            oneSpace.id = i;
            document.getElementById('gameboard').appendChild(oneSpace)
        }
    }
    clear(){
        //resets player marker
        this.currentPlayer = xPlayer
        //resets 
        squares.fill(null)
        
    }
}

const ticTacToe = new Gameboard

document.querySelector('button').addEventListener('click', ticTacToe.clear)

ticTacToe.new()