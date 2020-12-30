// Algoritmo para contar números primos de acordo com um limite especificado em um argumento.

function countCousins(limit){
    for (let i=2; i<=limit; i++){
        let primo = true;
        for (let div = 2; div < i; div++ ){
            if(i % div === 0){
                primo = false;
                break;
            }
        }
        if (primo) window.console.log(i)
    }
}

countCousins(15)