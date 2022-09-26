import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js';
import { auth } from '../firebase/startfirebase.js';

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
}
export { createUser };
