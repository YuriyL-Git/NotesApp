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
}

