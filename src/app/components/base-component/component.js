export class Component {

  constructor(tag, className) {
    this.component = document.createElement(tag);
    this.component.classList.add(className);
  }

  appendComponents(...elements) {
    elements.forEach(element => {
      this.component.append(element.component);
    });
  }

  setInnerText(text) {
    this.component.innerHTML = text;
  }

  getInnerText() {
    return this.component.innerHTML;
  }

  hide() {
    this.component.style.display = 'none';
  }

  show() {
    this.component.style.removeProperty('display');
  }
}

