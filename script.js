const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary('Call me By Your Name', 'Andre Aciman', 256, 'yes');
addBookToLibrary('My Brilliant Friend', 'Elena Ferrante', 331, 'yes')

console.log(myLibrary);


const showButton = document.getElementById('showDialog');
const dialog = document.querySelector('dialog');
const addBookBtn = dialog.querySelector("#addBookBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  console.log(title, author, pages, read);
  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);

  const container = document.getElementById('container');
  const book = document.createElement('div');
  
  book.innerHTML = `
        <h2>${title}</h2>
        <ul>
          <li><p>Author: ${author}</p></li>
          <li><p>Pages: ${pages}</p></li>
          <li><p>Read? ${read}</p></li>
        </ul>
    `;

  book.classList.add('books');
  container.appendChild(book);
});

/* const container = document.getElementById('container');
myLibrary.forEach(item => {
  const book = document.createElement('div');
  
  book.innerHTML = `
        <h2>${item.title}</h2>
        <ul>
          <li><p>Author: ${item.author}</p></li>
          <li><p>Pages: ${item.pages}</p></li>
          <li><p>Read? ${item.read}</p></li>
        </ul>
    `;

  book.classList.add('books');
  container.appendChild(book);
}); */