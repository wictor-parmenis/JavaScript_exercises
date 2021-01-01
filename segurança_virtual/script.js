/*
O objetivo aqui é fazer uma verificação na listas de convidados e exibir isso em um site.
Além disso, é importante também fazer a checagem de quem convidou as pessoas.
Ou seja:

Verificação de convidados 
e verificação de quem convidou os convidados.
*/

let person = document.getElementById('entry');
let owner = document.getElementById('owner');
let results = document.getElementById('results');



guests = {
    names : ['Flávio', 'Érika', 'Igor', 'Jonas', 'Marta', 'Carlos', 'Ricardo', 'José',
            'João', 'Jotapê', 'Laura', 'Diógenes'],
    owners : ['Érico', 'Joba']
};

function checking(){
    results.innerHTML = `<p></p>`;
    let progress = 0;
    let check = false;
    let check_2 = false;
    for (itens in guests.names){
        if (person.value.toUpperCase() === guests.names[itens].toUpperCase()){
            check = true
            progress += 1
        }else{
            check = false
        }
        window.console.log(check, person.value.toUpperCase(), guests.names[itens].toUpperCase(), progress )

    }

    for (itens in guests.owners){
        if (guests.owners[itens].toUpperCase() === owner.value.toUpperCase()){
            check_2 = true;
            progress += 1;
        }else{
            check_2 = false;
        }
        window.console.log(check_2, owner.value.toUpperCase(), guests.owners[itens].toUpperCase(), progress);
    }
    if (progress === 2){
        results.innerHTML += `<p>You can entry  :)</p>`
    }else{
        results.innerHTML += `<p> You cannot entry  :(</p>`
    }
    
};