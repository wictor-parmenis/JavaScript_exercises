/*
O objetivo aqui é fazer uma verificação na listas de convidados e exibir isso em um site.
Além disso, é importante também fazer a checagem de quem convidou as pessoas.
Ou seja:

Verificação de convidados 
e verificação de quem convidou os convidados.
*/

let person = document.getElementById('entry');
let results = document.getElementById('results');
let f_secret = document.getElementById('check');





    //Add the names of secret friend event.
    names : ['Flávio', 'Érika', 'Igor', 'Jonas', 'Marta', 'Carlos',
     'Ricardo', 'José','João', 'Jotapê', 'Laura', 'Diógenes', 'Mário'],
    left : []
};

function checking(){
    //Function for check peoples with already has your secret friend or not.
    let progress = 0;
    results.innerHTML = `<p></p>`;
    var random = Math.floor(Math.random() * 13);
    let secret = guests.names[random];
    guests.left.push(secret);

    results.innerHTML = `<p>${secret}</p>`
    window.console.log(guests.left)
    for (people in guests.left){
        if(guests.left[people] === secret){
            progress += 1;
            window.console.log(guests.left[people], secret, progress);
        }else{
            if (progress >= 2){
                results.innerHTML = `<p>${secret}</p>`;
                setTimeout(500);
                checking();
            }
        }

    }   
}

