// O objetivo aqui é criar um algoritmo que armazene endereços de forma local e exiba eles em uma div
// na home page.

// First field
let street = document.getElementById('street');
let city = document.getElementById('city');
let cep = document.getElementById('cep');
let results = document.getElementById('results');

//Second field
let street_2 = document.getElementById('street2');
let city_2 = document.getElementById('city2');
let cep_2 = document.getElementById('cep2');

// Objects of two adresses.
const adress = {
    street : street.value,
    city :  city.value,
    cep : cep.value 
}

const adress_2 = {
    street : street_2.value,
    city :  city_2.value,
    cep : cep_2.value 
}

//Function for compare adresses.
function compareAdresses(adress, adress_2){
    for (i in adress){
        for (j in adress_2){
            if (adress[i] === adress_2[j]){
                window.alert('Good')
            }else{
                window.alert('Not equal..')
            }
        }
    }
}

compareAdresses(adress, adress_2)


