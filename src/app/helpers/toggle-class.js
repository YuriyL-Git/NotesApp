export default function toggleClass(firstComponent, secondComponent, classToToggle) {
  firstComponent.classList.toggle(classToToggle);
  secondComponent.classList.toggle(classToToggle);
}
