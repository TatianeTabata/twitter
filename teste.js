
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
  if(total < quant && total > 0) {
    document.getElementById("tweet").disabled = false;
    let resto = quant - total;
    document.getElementById('cont').innerHTML = resto;
  } else {
    document.getElementById('textbox').value = valor.substr(0, quant);
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
  saida.insertBefore(newP, saida)
  saida.appendChild(newP);    
  entrada.value = '';  
}

