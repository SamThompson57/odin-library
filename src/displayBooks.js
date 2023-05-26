import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { blankCircle, checkCircle, closeBox } from ".";
import createAndInsertBook from "./createAndInsertBook";
import haveRead from "./haveRead";

function displayBooks(id, author, pages, read, title){
    
    // Below will probably be removed

    /*
    THIS WOULD BE A LOT EASIER IN REACT
    
    1> Create a div with the ID of the uniq id that has been made with the new book function

    2> In the Div will be TITLE - AUTHOR - PAGES - READ - DELETE    
    
    LOOK AT LOAD MESSAGES AND THE DISPLAY MESSAGE function in the friendly chat app

    */

    const div = document.getElementById(id) || createAndInsertBook(id)

    console.log(div)

    //set title
    div.querySelector('.title').textContent = title

    //Set Author

    div.querySelector('.author').textContent = author

    //Set Pages

    div.querySelector('.pages').textContent = pages.toString()

    //Set Read

    const readImg = div.querySelector('.read')
    if (read) readImg.src = checkCircle
    else readImg.src = blankCircle
    
    readImg.onclick = async() => {
        console.log('Checking Read')
        await haveRead(id)
    }

    
    
    const remove = div.querySelector('.delete')
    remove.src = closeBox
    remove.onclick = async() => {
        console.log('Delete request')
        try{
            await deleteDoc(doc(collection(getFirestore(), 'books'), id))
        }
        catch(error){
            console.error('could not delete from DB', error)
        }
    }

    document.getElementById('table').appendChild(div);
}

export default displayBooks
