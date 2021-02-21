// Init variables of game
let board = ['', '', '', '', '', '', '', '', ''];
let player_time = 0; 
let symbols = ['o', 'x'];
let gameOver = false;
let j = 0;

function handleMove(position){
    if (gameOver){
        return;
    }

    if (board[position] == ''){     // Checking if space is none in square.
        board[position] = symbols[player_time];
        gameOver = isWin();  // Checking if has a winner move.

        if (gameOver == false){
            // Switch gamer
            if (player_time == 0){
                player_time = 1;
            }else{
                player_time = 0;
            }
        } 
    }
    
    return gameOver; 
}

function isWin(){
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i = 0; i < winStates.length; i++){
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        console.log(j +=1, board[pos1], board[pos2], board[pos3]);
        if (board[pos1] === board[pos2]){
        }

        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] &&
            board[pos1 != '']){
            return true;
        }
    return false;
    
    }
}
