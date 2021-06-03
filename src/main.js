import './assets/scss/style.scss';
import {App} from './app/app';

const notesField = document.querySelector('.notes-field');

window.onload = () => {
  new App(notesField);

  // console.log(appRoot);
};
