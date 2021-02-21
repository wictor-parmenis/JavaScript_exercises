
let response = document.getElementById('response')



// Brasil API
// Reference: https://dicasdejavascript.com.br/como-fazer-uma-requisicao-http-get-com-javascript-puro/#:~:text=Para%20isso%20basta%20utilizar%20a%20API%20XMLHttpRequest%20nativa%20do%20javascript.&text=O%20c%C3%B3digo%20abaixo%20mostra%20a,%2C%20url%2C%20false)%3B%20xhttp.
// Exemplo de script assíncrnono para fazer GET em APIs.
let url = "https://brasilapi.com.br/api/ddd/v1/81";;
let xhttp = new XMLHttpRequest();
xhttp.open('GET', url, true);
xhttp.onreadystatechange = function() {
    if  ( xhttp.readyState == 4 && xhttp.status == 200){
        response.innerHTML = `<h4>${xhttp.responseText}</h4>`;
    }
};

xhttp.send();