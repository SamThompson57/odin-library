import { myLibrary } from "."

function haveRead(id){
    const readTarget = document.querySelector(`#read${id}`)
    console.log(typeof myLibrary[id].read)
    console.log(myLibrary[id].read)
    if(Boolean(myLibrary[id].read) === true){
        console.log("True => False")
        myLibrary[id].read = false;
        readTarget.setAttribute('src', '/icons/checkbox-blank-circle-outline.png')
    }else{
        console.log("False => True")
        myLibrary[id].read = true; 
        readTarget.setAttribute('src', '/icons/check-circle.png')
    }
    
}

export default haveRead