// Exercício teórico sobre o uso do this e bind.


function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound : 'au au',
    speak : speakGeneric
}

let cat = {
    sound : 'miau miau',
    speak : speakGeneric
}


// dog.speak()
// cat.speak()

// O bind adiciona um contexto à função. Dessa forma o uso do this fica mais amplo e variável.
let functionBinded = speakGeneric.bind(dog);
// functionBinded()

// ########################################################################################
// Arrows functions
// Prós: simplificam o código;
// Contras: as arrow functions não entendem o this e o bind.

let double = (x) => console.log(2*x);
let profit = (revenues, expenses) => console.log(revenues - expenses);
let sayClient = (time, client) => { if (time > 5){
    console.log('Hey, try talk with ',client, 'today.' )}}

// sayClient(6, 'Mário');


// ########################################################################################
// filter() : filtrando itens de uma array de forma específica e prática.

function newClients(name, age){
    return {name, age}
}

let clients = [
    newClients('Flávio', 48),
    newClients('Márta', 38),
    newClients('Érika', 25),
    newClients('Carlos', 88),
];

function printCorrect(itens){
    for (item in itens){
        console.log(itens[item])
    }   
}

function more40(clients){
    return clients.age > 40;
}

function less40(clients){
    return clients.age < 40;
}

let youngClients = clients.filter(less40);
let oldClients = clients.filter(more40); 

// printCorrect(oldClients);

// ########################################################################################
// map()


function newClients(name, age){
    return {name, age}
}

let peoples = [
    newClients('Flávio', 48),
    newClients('Márta', 38),
    newClients('Érika', 25),
    newClients('Carlos', 88),
];

function nameAge(client){
    return client.name + ' has ' + client.age + ' years.';
}

function printCorrect(itens){
    for (item in itens){
        console.log(itens[item])
    }   
}

// printCorrect(peoples.map(nameAge));

// ########################################################################################
//  Considerando que o Javascript é uma linguagem que atribui referências para array e objetos.
// Logo, algumas soluções precisam ser exclarecidas para os tipos de problema derivados desse fato.


groupA = ['Maria', 'Joana', 'Elisângela'];
groupB = groupA;
groupB.push('John');
//console.log(groupA);
//console.log(groupB);

// Nesse momento, percebe-se que as arrays de fato são referenciadas pelo javascript.
// Contudo, existem 2 formas de anular essa referênciação com arrays. Veja:

groupC = ['Jonas', 'Joana', 'Carla'];
groupD = groupC.slice();
groupD.push('Jhon');
//console.log(groupC);
//console.log(groupD);

// Outra forma interessante é:
groupC = ['Jonas', 'Joana', 'Carla'];
groupD = [...groupC];
groupD.push('Jhon');
//console.log(groupC);
//console.log(groupD);

// Agora observe como se deve fazer copias de objetos no javascript.

clientA = {name : 'Jonas',
        age : 34    
        }

// let clientB = Object.assign({}, clientA); // or let clientB = {... clientA};
let clientB = {... clientA};
clientB.age = 43;
console.log(clientA);
console.log(clientB);


