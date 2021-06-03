import './assets/scss/style.scss';
import {App} from './app/app';

const appRoot = document.body;

window.onload = () => {
  const app = new App(appRoot);
};
