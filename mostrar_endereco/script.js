// O objetivo aqui é criar um algoritmo que armazene endereços de forma local e exiba eles em uma div
// na home page.

let street = document.getElementById('street');
let city = document.getElementById('city');
let cep = document.getElementById('cep');
let results = document.getElementById('results');

function showAdress(){
    let adress = {
        street : street.value,
        city :  city.value,
        cep : cep.value 
    }
    for (itens in adress){
        results.innerHTML += `<p> ${adress[itens]}</p>`;
    }
    //results.innerHTML = `<p> ${street.value}</p>`;
    //results.innerHTML += `<p> ${city.value}</p>`;
    //results.innerHTML += `<p> ${cep.value}</p>`;

    }



showAdress()