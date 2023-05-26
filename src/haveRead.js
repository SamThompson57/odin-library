import { collection, doc, getDoc, getFirestore, updateDoc, } from "firebase/firestore";

async function haveRead(id){
    console.log('Querying with firebase')
    const docRef =  doc(collection(getFirestore(), 'books'), id)
    
    const docSnap = await getDoc(docRef)

    console.log(docSnap)

    if (docSnap.data().read) {
        await updateDoc(docRef, {
            read: false
        })
    } else {
        await updateDoc(docRef, {
            read: true
        })
      }
    
}

export default haveRead