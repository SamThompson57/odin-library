let myLibrary = [];

const table = document.querySelector('.table');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    myLibrary.push(this)
}

function addBookToLibrary() {
    
}

function refreshTable(name){
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