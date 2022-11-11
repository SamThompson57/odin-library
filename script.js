let myLibrary = [];

const table = document.querySelector('.table');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    myLibrary.push(this)
    addBookToLibrary(this)
}

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


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, true)

let isBoxSpawned = false;
const addNew = document.querySelector('.newbook');
const newbutton = document.querySelector('.newbook')
addNew.onclick = () => spawnBox();
const newForm = document.querySelector('.addnew');

// FUNCTION THAT ADDS THE NEW BOOK FORM (there may be a way to toggle)
function spawnBox(){
    console.log("Gonna Spawn a box");
    if(isBoxSpawned){
        console.log("Box is already existing")
        newbutton.textContent = "ADD NEW"
        newForm.setAttribute('style', 'visibility: hiddin;')
        isBoxSpawned = false;        
        return
    } else{
        console.log("I'm pretending to spawn a box")
        newForm.setAttribute('style', 'visibility: visible;');
        newbutton.textContent = "HIDE"
        isBoxSpawned = true;
        return
    }
}

//Section to take whater is in the form

const formTitle = document.querySelector("#book_title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");
const submitBtn = document.querySelector("#submit");

function formSubmit(){
     new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked)
     formTitle.value = "" ;
     formAuthor.value = "" ;
     formPages.value = "" ;
     formRead.checked = false;

}

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

function removeRow(id){
    const delTarget = document.querySelectorAll(`.row${id}`)
    console.log(delTarget)
    delTarget.forEach(element => element.remove());
}