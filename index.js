import { homeLink, addBookLink, contactLink } from './modules/displaySections.js';
import { newBook } from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';

// create a new DateTime object
const now = DateTime.now();
// format the date and time using Luxon's API
const formatted = now.toLocaleString(DateTime.DATETIME_HUGE);
// Getting the HTML element to put the formatted date
const dateSection = document.getElementById('date');
dateSection.textContent = formatted;
