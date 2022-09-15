import { db } from "../firebase/startfirebase.js";
import { collection, addDoc, query, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"


async function CreatePost (text){
    const Post = await addDoc(collection(db, "Posts"), {
        content : text
      });
}
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