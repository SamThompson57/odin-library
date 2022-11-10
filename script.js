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
    const id = myLibrary.length;
    console.log(name)
    //ADD A LOOP THAT ITERATES THROUGH ALL ELEMENTS OF OBJECT
    for(let prop in name){
        const create = document.createElement('div');
        create.setAttribute('id', id);
        create.setAttribute('class', prop)
        create.textContent = name[prop];
        table.appendChild(create);
    }
    const remove = document.createElement('div');
    remove.setAttribute('id', id);
    remove.setAttribute('class', 'del');
    remove.textContent = "Delete Line"
    table.appendChild(remove);
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, false)

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

//Section to take whater is in the 

const formTitle = document.querySelector("#book_title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");
const submitBtn = document.querySelector("#submit");
//console.log(`Title = ${formTitle.value} Author = ${formAuthor.value}`)
function formSubmit(){
     new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked)
     formTitle.value = "" ;
     formAuthor.value = "" ;
     formPages.value = "" ;
     formRead.checked = false;

}
   
