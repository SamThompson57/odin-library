// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getFirestore, 
    collection, 
    getDocs,
    doc, 
    query, 
    orderBy, 
    Timestamp,
    onSnapshot
} from 'firebase/firestore';
import Book from "./book";
import removeRow from "./removeRow";
import addBookToLibrary from "./addBookToLibrary";
import displayBooks from "./displayBooks";
import getImage from "./getImage";
// Your web app's Firebase configuration
import firebaseConfig from "./firebaseConfig";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// This should be pulled from the DB
export let myLibrary = [];

function loadLibrary(){
    // Create a query to load all books in the library
    const libraryQuery = query(collection(getFirestore(), 'books'), orderBy('timestamp'));

    // Listen for any updates
    onSnapshot(libraryQuery, function(snapshot){
        snapshot.docChanges().forEach(function(change){
            if (change.type === 'removed') {
                removeRow(change.doc.id);
            } else {
                let message = change.doc.data()
                displayBooks(change.doc.id, message.author, message.pages, message.read, message.title)
            }
        })
    })

}

export const table = document.querySelector('.table');

export const checkCircle = await getImage('check-circle.png')
export const blankCircle = await getImage('checkbox-blank-circle-outline.png')
export const closeBox = await getImage('close-box.png')

// This is the button that will toggle the form from sight
let isBoxSpawned = false;
const addNew = document.querySelector('.newbook');

addNew.onclick = () => spawnBox();

function bookSubmit(event) {
    console.log("SomeThing Happened")
    formSubmit()
    event.preventDefault()
}

const form = document.getElementById("bookForm");
form.addEventListener("submit", bookSubmit);


// FUNCTION THAT ADDS THE NEW BOOK FORM (there may be a way to toggle)
function spawnBox(){
    if(isBoxSpawned){
        addNew.textContent = "ADD NEW"
        form.setAttribute('style', 'visibility: hiddin;')
        isBoxSpawned = false;        
        return
    } else{
        form.setAttribute('style', 'visibility: visible;');        
        addNew.textContent = "HIDE"
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
    console.log("form submitted")

     new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked)
     formTitle.value = "" ;
     formAuthor.value = "" ;
     formPages.value = "" ;
     formRead.checked = false;

}

loadLibrary()

// FUNCTION TO DELETE FROM Firestore DB