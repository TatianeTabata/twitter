
function showMessage(event){
  if(document.getElementById("textbox").value < 1){
  alert("Sua mensagem não contem caracteres, escreva uma mensagem.")
  }
  event.preventDefault();
  let message = document.getElementById("textbox").value;
  // document.getElementById("display-message").innerHTML = message;
}

document.getElementById("tweet").disabled = true;

function countChar(valor) {  
  let quant = 140;
  let total = valor.length; 
  let resto = 0;     
  
  if(total <= quant && total > 0) {
    document.getElementById("tweet").disabled = false;
    resto = quant - total;
    document.getElementById('cont').innerHTML = resto;
  } if(total > quant) {
    resto = - (total - quant); 
    document.getElementById('cont').innerHTML = resto;
    document.getElementById("tweet").disabled = true;
  } 
}

tweet.addEventListener("click", showMessage);
tweet.addEventListener("click", myFunction);

let entrada = document.getElementById("textbox");
let saida = document.getElementById("display-message");

function myFunction(){  
  let newP = document.createElement('p');  
  newP.innerHTML = entrada.value;
  saida.appendChild(newP);    
  entrada.value = '';  
}

