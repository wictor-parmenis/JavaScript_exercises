
const itens = [
    'R$ 300,00',
    'R$ 500,00',
    "Train station",
    'R$ 370,00',
    'R$ 430,00',
    "Shopping",
    'R$ 210,00',
    "Public square",
    "Beach"
];

console.log(itens);

/*
    When i use filter?
    Filter is util for filter datas in a array.
    For example:
    If i want filter datas with 'R$' only, 
    i have to write this code:
*/

const priceFilter = itens.filter(item => item.includes('R$'));
console.log(priceFilter);

/*  
    But, if you want set datas of array. Is interesting use 
    map function. 
    For example - in this next function, i will switch "R$" for
    nothing string, and i switch the format of data for Number.
    Look now:
*/

const pricesMap = priceFilter.map(item => {
    let numbers = item.replace('R$', "");
    numbers = numbers.replace(',00', "");
    return Number(numbers);
})
console.log(pricesMap);

/*  
    The function reduce is util for return a unique element 
    relationed with the array.
    FOr example, for sum all itens in of array, we can to use
    reduce().
    The structure of this function is:
    array.reduce((acc, item) => acc + item)

    Look that:
*/

const pricesReduce = pricesMap.reduce((acc, item) => acc + item);
console.log(pricesReduce);
