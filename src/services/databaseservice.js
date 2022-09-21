import { db, auth } from "../firebase/startfirebase.js";
import { collection, addDoc, query, onSnapshot, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"


async function CreatePost (text){
    const Post = await addDoc(collection(db, "Posts"), {
        content : text,
        likes: [],
        uid: auth.currentUser.uid,
      });
}
/*
const likePost = doc(db, "post", "id");

// Set the "capital" field of the city 'DC'
await updateDoc(likePost, {
  capital: true
});
*/
const getPosts = (callback) =>{
  const q = query(collection(db, "Posts"));
const unsubscribe = onSnapshot(q, (postData) => {
  postData.forEach((doc) => {
      console.log(doc.data())
   callback (doc.data())
  });
});

}
export { CreatePost,getPosts };