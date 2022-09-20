//import { loginRoot } from "../main.js";
//import { registerView } from "./register.js";
//import { router } from "../router/router.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth, provider, providerFace } from "../firebase/startfirebase.js";
import { firebaseConfig } from "../firebase/config.js";

export function loginView() {
  console.log("se ejecuta loginView en Login.js");
  const item = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "iPet";
  title.setAttribute("class", "titleLogin");
  item.appendChild(title);

  //CONTENEDOR IMAGEN
  const divImg = document.createElement("div");
  divImg.classList.add("imgLogo");
  item.appendChild(divImg);

  //IMAGEN LOGO
  const logo = document.createElement("img");
  logo.src = "./img/logotransparente.png";
  logo.setAttribute("class", "img");
  logo.setAttribute("id", "logo");
  divImg.appendChild(logo);

  //TITULO INICIO SESION Y RECUPERAR CONTRASEÑA
  const loginH3 = document.createElement("h3");
  loginH3.textContent = "Iniciar Sesión";
  loginH3.setAttribute("class", "subtituloLogin");
  item.appendChild(loginH3);

  const linkRecuperarPass = document.createElement("a");
  linkRecuperarPass.setAttribute("href", "#");
  linkRecuperarPass.textContent = "¿Has olvidado tu contraseña?";
  linkRecuperarPass.setAttribute("class", "btnRegister");
  item.appendChild(linkRecuperarPass);

  //CREAR FORM INPUTS
  const form = document.createElement("form");
  form.classList.add("form");
  item.appendChild(form);

  //INPUTS LOGIN
  const inputMail = document.createElement("input");
  inputMail.setAttribute("placeholder", "Ingresa tu email");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("class", "input");
  inputMail.setAttribute("id", "inputMail");
  form.appendChild(inputMail);

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("class", "input");
  inputPassword.setAttribute("id", "inputPass");
  form.appendChild(inputPassword);

  //BOTONES INPUT
  const btnLogin = document.createElement("button");
  btnLogin.setAttribute("class", "linkSubmit");
  btnLogin.setAttribute("type", "submit");
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#inputMail").value;
    const password = document.querySelector("#inputPass").value;
    //console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //callback(true);
        const user = userCredential.user;
        console.log("logeada");
      })
      //capturar error en email o pass y enviar alerta
      .catch((error) => {
        Swal.fire("Ups! Ha ocurrido un error, vuelve a intentar")
      });
  });
  btnLogin.innerText = "Entrar";
  item.appendChild(btnLogin);

  //BOTON REGISTRARSE
  const linkRegister = document.createElement("button");
  linkRegister.addEventListener("click", () => {
    window.location.hash = "#/register";
  });
  linkRegister.textContent = "¿Aún no tienes una cuenta? ¡Crea una aqui!";
  linkRegister.setAttribute("class", "btnRegister ");
  item.appendChild(linkRegister);

  //BTN GOOGLE
  const btnGoogle = document.createElement("button");
  //Llamar al evento y a la ventana, si se logra logear mostrar console.log (cambiar por SweetAlert)
  btnGoogle.addEventListener("click", (e) => {
    signInWithPopup(auth, provider).then((result) => {
      Swal.fire({
        icon: "success",
        title: "Login exitoso",
        text: "Ingreso exitoso",
      });
    });
  });
  btnGoogle.setAttribute("id", "btnGoogle");
  btnGoogle.setAttribute("type", "button");
  btnGoogle.textContent = "Google ";
  btnGoogle.className = "fa-brands fa-google-plus fa-2x";
  item.appendChild(btnGoogle);

  //BTN FACEBOOK
  const btnFacebook = document.createElement("button");
  btnFacebook.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithPopup(auth, providerFace).then((result) => {
      console.log("hola");
    });
  });
  btnFacebook.setAttribute("id", "btnFacebook");
  btnFacebook.setAttribute("type", "submit");
  btnFacebook.textContent = "Facebook";
  btnFacebook.className = "fa-brands fa-facebook-plus fa-x2";
  item.appendChild(btnFacebook);

  //contenedor github //No funciona/ iconos estan en el aire sin contenedor
  const gitHub = document.createElement("div");
  gitHub.setAttribute("class", "gitContainer");
  item.appendChild(gitHub);

  //Git Dani//
  const linkGit1 = document.createElement("a");
  linkGit1.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit1.setAttribute(
    "href",
    "https://github.com/Seabird15/SCL021-social-network"
  );
  linkGit1.setAttribute("target", "_blank");
  item.appendChild(linkGit1);

  //Git Liss//
  const linkGit2 = document.createElement("a");
  linkGit2.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit2.setAttribute(
    "href",
    "https://github.com/LissetteQ/SCL021-social-network"
  );
  linkGit2.setAttribute("target", "_blank");
  item.appendChild(linkGit2);

  //Git Nico//
  const linkGit3 = document.createElement("a");
  linkGit3.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit3.setAttribute(
    "href",
    "https://github.com/Nicobustosgonzalez/SCL021-social-network"
  );
  linkGit3.setAttribute("target", "_blank");
  item.appendChild(linkGit3);
  

  form.addEventListener("submit", () => {
    console.log("submit");
  });

  return item;
}
