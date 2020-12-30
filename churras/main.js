let inputAdults = document.getElementById('adults');
let inputKids = document.getElementById('kids');
let inputTime = document.getElementById('time');
let results = document.getElementById('results')

function calculate(){

    let total_beef = beefFP(inputTime.value) * inputAdults.value + (beefFP(inputTime.value) / 2) * inputKids.value;  
    let total_drink = drinkFP(inputTime.value) * inputAdults.value + (drinkFP(inputTime.value) / 2) * inputKids.value;
    let total_beer = beerFP(inputTime.value) * inputAdults.value;
    results.innerHTML = `<p>${(total_beef * 0.6) / 1000}kg de carne</p><br>`;
    results.innerHTML += `<p>${(total_beef * 0.4) / 1000}kg de frango</p><br>`;
    results.innerHTML += `<p>${total_beer / 1000} L de cerveja gelada</p><br>`;
    results.innerHTML += `<p>${total_drink / 1000} L de refrigerante/água</p><br>`;
}

function beefFP(time){
    if (time >= 6){
        return 650;
    }else{
        return 400;
    }
}

function drinkFP(time){
    if (time >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function beerFP(time){
    if (time >= 6){
        return 2000;
    }else{
        return 1200;
    }
}