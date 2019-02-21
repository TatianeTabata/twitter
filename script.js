
function showMessage(event){
  if(document.getElementById("textbox").value < 1){
  alert("Sua mensagem não contem caracteres, escreva uma mensagem.");
  }
  event.preventDefault();
  let message = document.getElementById("textbox").value;
}

document.getElementById("tweet").disabled = true;

function countChar(valor) {  
  let quant = 140;
  let total = valor.length; 
  let resto = quant - total;       
  document.getElementById("cont").innerHTML = resto;
  if(resto < quant){
    document.getElementById("tweet").disabled = false;
  }
  if(resto > 20){
    document.getElementById("cont").style.color = 'black';
  }
  if(resto <= 20 && resto > 10) {
    document.getElementById("cont").style.color = 'gold';
  } if(resto <= 10) {
    document.getElementById('cont').style.color = 'red';
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


function autoResize() {
  let text = document.getElementById('textbox');  
  if(text.scrollHeight > text.offsetHeight){
    text.rows += 1;
  } if(text.scrollHeight < text.offsetHeight){
    text.rows -= 1;
  }
}
