//IMPORTAMOS LA FUNCION LOGINVIEW DESDE LOGIN.JS
import { loginView } from "./views/login.js";
import { router } from "./router/router.js";
import { auth } from "./firebase/startfirebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

//LLAMAMOS A LA FUNCION PARA QUE MUESTRE EL LOGIN
loginView();
let root = document.getElementById("root");
//ENVOLVEMOS EN UNA FUNCION FLECHA LA VAR ROOT
let loginRoot = () => {
  let root = document.getElementById("root");
};
//EXPORTAR VAR LOGINROOT
export { loginRoot };

//EVENTO HASH
window.addEventListener("hashchange", () => {
  //console.log("yo soy el hash")
  const view = router(window.location.hash);
  console.log(view);
  console.log(window.location.hash);
  root.appendChild(view);
});
window.addEventListener("load", () => {
  //console.log("yo soy el load")
  const view = router(window.location.hash);
  root.appendChild(view);
});

//promesa para retornar a muro
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("ya entre");
    const view = router("#/feed");
    root.appendChild(view);

    //promesa para retornar a login en caso de no autenticacion
  } else {
    const view = router("#/login");
    root.appendChild(view);
    window.location.hash = "";
  }
});
