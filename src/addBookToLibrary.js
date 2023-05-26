import { Timestamp, addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore/lite";
import { myLibrary, table } from ".";

async function addBookToLibrary(name) {
    const id = myLibrary.length - 1;
    console.log(name)

    try{
        await addDoc(collection(getFirestore(), 'books'), {
            title: name.title,
            author: name.author,
            pages: name.pages,
            read: name.read,
            timestamp: serverTimestamp(),
        })
    }
    catch(error){
        console.error('Error writing new message to Firebase Database', error);
      }
}

export default addBookToLibrary