export class Component {

  constructor(tag, className, haveWrapper = false) {
    this.component = document.createElement(tag);
    this.component.classList.add(className);

    if (haveWrapper) {
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add(`${className}__wrapper`);
      this.wrapper.append(this.component);
    }
  }

  appendComponents(...elements) {
    elements.forEach(element => {
      if (element.wrapper) {
        this.component.append(element.wrapper);
      }

      if (!element.wrapper) {
        this.component.append(element.component);
      }
    });
  }

  setInnerText(text) {
    this.component.innerHTML = text;
  }

  getInnerText() {
    return this.component.innerHTML;
  }

  hide() {
    if (this.wrapper) {
      this.wrapper.style.display = 'none';
    } else {
      this.component.style.display = 'none';
    }
  }

  show() {
    if (this.wrapper) {
      this.wrapper.style.removeProperty('display');
    } else {
      this.component.style.removeProperty('display');
    }
  }
}

