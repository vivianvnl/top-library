const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read, id) {
    newBook = new Book(title, author, pages, read, id);
    myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
addBookToLibrary('Call me By Your Name', 'Andre Aciman', 260, 'read');

console.log(myLibrary);