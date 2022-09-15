import { loginRoot } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth } from "../firebase/startfirebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { db } from "../firebase/startfirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { CreatePost, getPosts } from "../services/databaseservice.js";

export function feedView() {
  const root = document.createElement("div");

  //IMAGEN USUARIO
  const profileImg = document.createElement("img");
  profileImg.setAttribute("class", "profileImg");
  profileImg.src = "./img/profile-user.png";
  root.appendChild(profileImg);

  //boton de cerrar sesion
  const btnLogOut = document.createElement("button");
  btnLogOut.setAttribute("id", "btnLogOut");
  btnLogOut.setAttribute("type", "submit");
  btnLogOut.textContent = "Log Out";
  btnLogOut.addEventListener("click", () => {
    signOut(auth).then(() => {
      //COLOCAR ALERTA PARA CERRAR SESION
      console.log("Haz cerrado sesión");
    });
  });
  root.appendChild(btnLogOut);

  //BUSCADOR DE AMIGOS
  const Buscador = document.createElement("input");
  Buscador.setAttribute("class", "Buscador");
  Buscador.setAttribute("type", "search");
  Buscador.setAttribute("style", "margin-left:20%");
  Buscador.setAttribute("placeholder", "Buscar amigos");
  root.appendChild(Buscador);

  //CAJA DE ESTADO Y LOGO
  const containFeed = document.createElement("div");
  containFeed.setAttribute("class", "containFeed");
  root.appendChild(containFeed);

  //logo de aplicacion
  const logoFeed = document.createElement("img");
  logoFeed.src = "./img/logotransparente.png";
  logoFeed.setAttribute("class", "logoFeed");
  containFeed.appendChild(logoFeed);

  //caja de publicacion
  const inputFeedState = document.createElement("input");
  inputFeedState.setAttribute("class", "inputFeedState");
  inputFeedState.setAttribute("placeholder", "¿En qué estas pensando?");
  inputFeedState.setAttribute("type", "text");
  const btnStateFeed = document.createElement("button");
  btnStateFeed.textContent = "Publicar";
  btnStateFeed.addEventListener("click" , () =>{CreatePost("Hola")});

  containFeed.appendChild(inputFeedState);

  
  root.appendChild(btnStateFeed);
getPosts((post)=> {console.log("Estoy dentro del feed", post)}) 
  return root;
}
