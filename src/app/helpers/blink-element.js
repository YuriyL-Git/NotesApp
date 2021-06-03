export default function blinkElement(element) {
  element.classList.add('blink-effect');
  element.addEventListener('animationend', () => {
    element.classList.remove('blink-effect');
  });
}
