import addBookToLibrary from "./addBookToLibrary"
import { myLibrary } from "."

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    myLibrary.push(this)
    addBookToLibrary(this)
}

export default Book