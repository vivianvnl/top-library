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

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary('Call me By Your Name', 'Andre Aciman', 256, 'yes');
addBookToLibrary('My Brilliant Friend', 'Elena Ferrante', 331, 'yes')

console.log(myLibrary);


const container = document.getElementById('container');

myLibrary.forEach(item => {
  const book = document.createElement('div');
  
  book.innerHTML = `
        <h3>${item.title}</h3>
        <p>Author: ${item.author}</p>
        <p>Pages: ${item.pages}</p>
        <p>Read? ${item.read}</p>
    `;

  book.classList.add = 'books';
  container.appendChild(book);
});