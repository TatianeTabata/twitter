

function showMessage(event){
    if(document.getElementById("textbox").value < 1){
    alert("Sua mensagem não contem caracteres, escreva uma mensagem.")
    }
    event.preventDefault();
    let message = document.getElementById("textbox").value;
    document.getElementById("display-message").innerHTML = message;
}

function countChar(valor) {
  let quant = 140;
  let total = valor.length;
  if(total <= quant) {
      let resto = quant - total;
      document.getElementById('cont').innerHTML = resto;
  } else {
      document.getElementById('textbox').value = valor.substr(0, quant);
  }
}

/*  function countChar(message, value){
    let message = document.getElementById("textbox").value;
    let counter = message.lenght;
    let charMax = 140;

    for(i=0; i<charMax; i++){
      if(counter < charMax){

    }
}
}*/

