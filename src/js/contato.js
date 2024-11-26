
const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const mensagem = document.getElementById('mensagem')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputNome();
    checkInputEmail();
    checkInputMessage();
})

function checkInputNome(){
    const nameValue = nome.value;

    if(nameValue === ""){
        errorInput(nome, "PREENCHA COM UM NOME!")
    }
    
    else{
        const formItem = nome.parentElement;
        formItem.className = "campo-form"
    }
}


function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "campo-form error"

} 

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "PREENCHA COM O SEU EMAIL!")
    }
    
    else{
        const formItem = email.parentElement;
        formItem.className = "campo-form"
    }
}

function checkInputMessage(){
    const messageValue = mensagem.value;

    if(messageValue === ""){
        errorInput(mensagem, "PREENCHA COM SUA MENSAGEM!")
    }
    
    else{
        const formItem = mensagem.parentElement;
        formItem.className = "campo-form"
    }
}

