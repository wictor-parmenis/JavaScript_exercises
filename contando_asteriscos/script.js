// Algoritmo para exibir asterísticos (*) de forma orgaizada e progressiva por meio de uma função.
let char = '*'

function showChar(number){
    for (i = 0; i <= number-1; i++){
        window.console.log(char)
        char += '*'
    }
}

showChar(10)