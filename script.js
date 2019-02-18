

function showMessage(event){
    event.preventDefault();
    let message = document.getElementById("textbox").value;
    document.getElementById("display-message").innerHTML = message;
}




/*function send2(){
    let deslocamento = document.getElementById("deslocId2").value;
    deslocamento = parseInt(deslocamento);
    let message = document.getElementById("messageIdDecifra").value;
    let result = cipher.decode(message, deslocamento);
    document.getElementById("msgDecifrada").innerHTML = "Mensagem cifrada é: " + "<br />" + result;
  }*/