import { loginRoot } from "../main.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth } from "../firebase/startfirebase.js";

export function registerView() {
  const root = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "iPet";
  title.setAttribute("class", "titleLogin");
  root.appendChild(title);

  //CONTENEDOR IMAGEN
  const divImg = document.createElement("div");
  divImg.classList.add("imgLogo");
  root.appendChild(divImg);

  //IMAGEN LOGO
  const logo = document.createElement("img");
  logo.src = "./img/logotransparente.png";
  logo.setAttribute("class", "img");
  logo.setAttribute("id", "logo");
  divImg.appendChild(logo);

  //TITULO CREA AQUI TU CUENTA
  const titleRegister = document.createElement("h2");
  titleRegister.textContent = "¡Crea aquí tu cuenta!";
  titleRegister.setAttribute("class", "h2Register");
  root.appendChild(titleRegister);

  //CREAR FORM INPUTS
  const form = document.createElement("form");
  form.classList.add("form");
  root.appendChild(form);

  //INPUTS REGISTER EMAIL
  const inputRegister = document.createElement("input");
  inputRegister.setAttribute("placeholder", "Ingresa tu correo");
  inputRegister.setAttribute("id", "email");
  //inputRegister.setAttribute("type", "submit")
  //inputRegister.setAttribute("value", "validate")
  inputRegister.setAttribute("name", "email");
  inputRegister.setAttribute("class", "input");
  inputRegister.placeholder = "correo electronico"
  form.appendChild(inputRegister);
  

  //INPUT REGISTER PASS
  const inputRegisterPass = document.createElement("input");
  inputRegisterPass.setAttribute("placeholder", "Ingresa tu contraseña");
  inputRegisterPass.setAttribute("id", "password");
  inputRegisterPass.setAttribute("name", "password");
  inputRegisterPass.setAttribute("class", "input");
  inputRegisterPass.setAttribute("type", "password");
  form.appendChild(inputRegisterPass);

  //INPUT NOMBRE USUARIO
  const inputRegisterUser = document.createElement("input");
  inputRegisterUser.setAttribute("placeholder", "Nombre usuario");
  inputRegisterUser.setAttribute("id", "userName");
  inputRegisterUser.setAttribute("name", "userName");
  inputRegisterUser.setAttribute("type", "text");
  inputRegisterUser.setAttribute("class", "input");
  form.appendChild(inputRegisterUser);

  //BUTTON REGISTER
  const btnRegister = document.createElement("button");
  btnRegister.textContent = "Enviar";
  btnRegister.setAttribute ("type", "submit")
  btnRegister.setAttribute("value", "validate")
  btnRegister.setAttribute ("id", "registerButton")
  form.appendChild(btnRegister);

  function validateEmail(){
    let emailField = document.getElementById('email')
    let validEmail =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
    if(validEmail.test(emailField.value)){
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Se registro exitosamente",
      });
      return true;
    }else{
      Swal.fire({
        icon: "Fail",
        title: "Correo invalido",
        text: "Ingrese un correo valido",
      });
      return false;
    }

  }

  //se añade la funcion para registrarse y crear cuenta
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = validateEmail();
    if (!isValid){
      return 
    }
    const email = inputRegister.value;
    const pass = inputRegisterPass.value;
    createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
      console.log("Registro exitoso");
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Se registro exitosamente",
      });
    })
    .catch((error) => {
      Swal.fire("Ups! Ya hay una cuenta asociada a este correo")
    });
  });
  return root;
}
