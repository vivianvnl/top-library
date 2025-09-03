const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  newBook = new Book(title, author, pages);
  myLibrary.push(newBook);


  const container = document.getElementById('container');
  const book = document.createElement('div');
  book.classList.add('books');
  book.innerHTML = `
        <h2>${title}</h2>
        <ul>
          <li><p>Author: ${author}</p></li>
          <li><p>Pages: ${pages}</p></li>
        </ul>
    `;
  let label = document.createElement("label");
  label.setAttribute("id", "label");
  label.textContent = "Read?";
  let readCheckbox = document.createElement("input");
  readCheckbox.setAttribute("type", "checkbox");
  readCheckbox.setAttribute("id", "readCheckbox");
  book.appendChild(label);
  label.appendChild(readCheckbox);

  book.innerHTML += '<br>';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener('click', function() {
      this.parentElement.remove(); 
  });
  book.appendChild(deleteBtn);

  container.appendChild(book);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295);
addBookToLibrary('Call me By Your Name', 'Andre Aciman', 256);
addBookToLibrary('My Brilliant Friend', 'Elena Ferrante', 331)
console.log(myLibrary);


const showButton = document.getElementById('addNewBookBtn');
const dialog = document.querySelector('dialog');
const addBookBtn = dialog.querySelector("#addBookBtn");
const form = document.querySelector('form');

showButton.addEventListener("click", () => {
  dialog.showModal();
});

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  addBookToLibrary(title, author, pages);
  console.log(myLibrary);

  dialog.close();
  form.reset(); 
});