// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Book from "./book";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlgFkKoQtM93-w7Lalyr1NKkI0L1Y6_5A",
  authDomain: "odin-library-b02bc.firebaseapp.com",
  projectId: "odin-library-b02bc",
  storageBucket: "odin-library-b02bc.appspot.com",
  messagingSenderId: "918579761340",
  appId: "1:918579761340:web:0a2d6195f5d0392b9e00b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// This should be pulled from the DB
export let myLibrary = [];

export const table = document.querySelector('.table');

// The Below is a sample book, this could be REMOVED
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, true)


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


// FUNCTION TO DELETE FROM Firestore DB
