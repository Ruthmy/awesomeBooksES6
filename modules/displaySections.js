// Single Page Application Behavior
// Get the nav bar links
const homeLink = document.querySelector('.nav-item.list');
const addBookLink = document.querySelector('.nav-item.add-new');
const contactLink = document.querySelector('.nav-item.contact');
const buttonsArray = [homeLink, addBookLink, contactLink];

// Get the Pages ID Section
const bookListSection = document.querySelector('.book-list');
const addSection = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');
const sectionsArray = [bookListSection, addSection, contactSection];

// Listeners for the links events
homeLink.addEventListener('click', (event) => {
  event.preventDefault();
  bookListSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBookLink.addEventListener('click', (event) => {
  event.preventDefault();
  bookListSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  bookListSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

export { homeLink, addBookLink, contactLink };