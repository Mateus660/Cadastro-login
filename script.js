const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordconfirmation = document.getElementById('password-confirmation');

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    checkinputusername();

    checkinputemail();

    checkinputPassword();

    checkinputPasswordconfirmation();
    
})

function checkinputusername () {
    const usernamevalue = username.value;

    if (usernamevalue === "") {
       errorInput(username, "Preencha um username")
    }else{
        const formitem = username.parentElement;
        formitem.className = "form-content"
    }
}

function checkinputemail() {
     const emailvalue = email.value;

     if(emailvalue === ""){
        errorInput(email, "O email é obrigatório")
     }else{
        const formitem = email.parentElement;
        formitem.className = "form-content"
     }
}

function checkinputPassword () {
     const passwordvalue = password.value;     

    if(passwordvalue === ""){
        errorInput(password, "Senha obrigatória")
    }else if (passwordvalue.length < 8){
        errorInput(password, " senha precisa ter no mínimo 8 caratcteres.")
    }else{
        const formitem = password.parentElement;
        formitem.className = 'form-content'
    }
}

function checkinputPasswordconfirmation () {
    const passwordvalue = password.value;   
    const confirmationpasswordvalue = passwordconfirmation.value;

   if (confirmationpasswordvalue === "") {
   errorInput(passwordconfirmation,"a confirmação de senha é obrigatória")
   }else if(confirmationpasswordvalue != passwordvalue) {
    errorInput(passwordconfirmation, "As senhas não são iguais")
   }else{
    const formitem = passwordconfirmation.parentElement;
    formitem.className = "form-content"
   } 
}

function checkform() {
    checkinputusername();

    checkinputemail();

    checkinputPassword();

    checkinputPasswordconfirmation();
  
    const formitems = form.querySelectorAll(".form-content")

    const isvalid = [...formitems].every((item) => { 
        return item.className === "form-content" 
    });

    console.log(isvalid)

}

function errorInput(input, message) {
    const formitem  = input.parentElement;
    const textMessage = formitem.querySelector("a")
 
    textMessage.innerText = message;

    formitem.className = "form-content error"
 

}