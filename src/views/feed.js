import { loginRoot } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth } from "../firebase/startfirebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { db } from "../firebase/startfirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { CreatePost, getPosts } from "../services/databaseservice.js";

export function feedView() {
  const root = document.createElement("div");
  root.setAttribute("class", "feedview")

    //logo de aplicacion
    const logoFeed = document.createElement("img");
    logoFeed.src = "./img/logotransparente.png";
    logoFeed.setAttribute("class", "logoFeed");
    root.appendChild(logoFeed);

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
      Swal.fire("Has cerrado sesión")
    })
  });
  root.appendChild(btnLogOut);

  //BUSCADOR DE AMIGOS
  const buscador = document.createElement("input");
  buscador.setAttribute("class", "buscador");
  buscador.setAttribute("type", "search");

  buscador.setAttribute("placeholder", "Buscar amigos");
  root.appendChild(buscador);

  //CAJA DE ESTADO Y LOGO
  const containFeed = document.createElement("div");
  containFeed.setAttribute("class", "containFeed");
  root.appendChild(containFeed);

  //caja de publicacion
  const inputFeedState = document.createElement("textarea");
  inputFeedState.setAttribute("class", "inputFeedState");
  inputFeedState.setAttribute("maxlength", "200");
  inputFeedState.setAttribute("placeholder", "¿En qué estas pensando?");
  inputFeedState.setAttribute("type", "textarea");
  
  const btnStateFeed = document.createElement("button");
  btnStateFeed.setAttribute("id", "valuein" );
  btnStateFeed.setAttribute("class", "btnStateFeed");
  btnStateFeed.textContent = "Publicar";
  root.appendChild(btnStateFeed);
  containFeed.appendChild(inputFeedState);

   //DIV PARA POSTS
   const postBox = document.createElement("div");
   postBox.setAttribute("class", "postBox");
   root.appendChild(postBox);
  btnStateFeed.addEventListener("click" , () =>{console.log(inputFeedState.value);
    CreatePost(inputFeedState.value)
    postBox.innerHTML = "";
    inputClear();

  
  });

  const inputClear = () => {
    document.querySelector('#valuein').value = "";
  }
//Se imprimen los post
getPosts((post)=> {
  const PostCard = document.createElement("textarea");
  PostCard.setAttribute("class","Postcard");
  PostCard.innerHTML = post.content;

  const likeButton = document.createElement("button");
  likeButton.setAttribute("class", "likeButton");
  likeButton.textContent = "+";
  
  const spanButton = document.createElement("span");
  spanButton.setAttribute("id", "count");
  spanButton.textContent = "";
  likeButton.appendChild(spanButton);

  postBox.appendChild(PostCard);
  postBox.appendChild(likeButton);
  //PostCard.appendChild()

  
}) 
  return root;
}