/*
O objetivo aqui é retornar produtos ao usuário final, de acordo com a afaixa 
de preço escolhida pelo usuário.
*/


let results = document.getElementById('results')
let products = 
// Propriedades dos objetos.
{
    name : ['1. Iphone X', '2. Iphone 12', '3. Galaxy S20', '4. Xbox control', '5. Sound Sony',
     '6 Headphone JBL', '7. Galaxy A10'],
    price : [700, 1200, 1100, 100, 120, 230, 300],
    inStock : [true, true, true, true, true, true, false]
};
function bitPrice(){
    results.innerHTML = `<p></p>`;
    for (low_price in products.price){
        if (products.price[low_price] <= 300){
            results.innerHTML += `${products.name[low_price]} | ${products.price[low_price]} <br>`
        }       
    }       
}

function mediumPrice(){
    results.innerHTML = `<p></p>`;
    for (high_price in products.price){
        if (products.price[high_price] > 300 & products.price[high_price] <= 700){
            results.innerHTML += `${products.name[high_price]} | ${products.price[high_price]} <br>`
        }       
    }       
}

function highPrice(){
    results.innerHTML = `<p></p>`;
    for (high_price in products.price){
        if (products.price[high_price] > 700 & products.price[high_price] <= 1500){
            results.innerHTML += `${products.name[high_price]} | ${products.price[high_price]} <br>`
        }       
    }       
}
        

