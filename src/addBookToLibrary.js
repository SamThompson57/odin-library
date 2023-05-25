import { myLibrary, table } from ".";
import haveRead from "./haveRead";
import removeRow from "./removeRow";

function addBookToLibrary(name) {
    const id = myLibrary.length - 1;
    console.log(name)
    //ADD A LOOP THAT ITERATES THROUGH ALL ELEMENTS OF OBJECT
    for(let prop in name){
        if(prop == 'read'){
            const create = document.createElement('img')
            console.log('read' + name[prop]);
            create.setAttribute('id',prop+id);
            create.setAttribute('class', 'row'+id)
            console.log(create)
            create.onclick = () => haveRead(id);
            if (name[prop] === true){
                create.setAttribute('src', '/icons/check-circle.png')
                table.appendChild(create);
            } else {
                create.setAttribute('src', '/icons/checkbox-blank-circle-outline.png')
                table.appendChild(create);
            }
            
        }else {
            const div = document.createElement('div')
            div.textContent = name[prop];
            table.appendChild(div);
            console.log(prop)
            div.setAttribute('id', id + prop);
            div.setAttribute('class', 'row'+id);
        }
        
        
        
    }
         
    const remove = document.createElement('img');
    remove.setAttribute('id', id + 'del');
    remove.setAttribute('class', 'row'+id);
    remove.setAttribute('src', '/icons/close-box.png')
    remove.onclick = () => removeRow(id)
    table.appendChild(remove);
}

export default addBookToLibrary