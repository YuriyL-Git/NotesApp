import {Component} from "@/app/components/base-component/component";
import './_note.scss';

const FIND_DATES_REGEX = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

export class Note extends Component {
  constructor(noteContent, noteCategory, onClickCallback) {
    super('div', 'note');
    this.creationTime = new Component('div', 'note__creation-time');
    this.content = new Component('div', 'note__content');
    this.category = new Component('div', 'note__category');
    this.datesInTheNote = new Component('div', 'note__dates-in-note');

    this.isSelected = false;
    this.isActive = true;

    this.updateNote(noteContent, noteCategory);
    this.appendComponents(
      this.creationTime,
      this.content,
      this.category,
      this.datesInTheNote
    );
    this.setupNoteClick();
    this.callbackClicked = onClickCallback;
  }

  setupNoteClick() {
    this.component.addEventListener('click', () => {
      this.isSelected = !this.isSelected;
      this.component.classList.toggle('note--selected');
      this.callbackClicked();
    });
  }

  updateNote(noteContent, noteCategory) {
    this.creationTime.component.innerHTML = new Date()
      .toJSON()
      .slice(0, 10)
      .split('-')
      .reverse()
      .join('/');
    this.content.component.innerHTML = noteContent;
    this.category.component.innerHTML = noteCategory;
    const dates = noteContent.match(FIND_DATES_REGEX);
    if (dates) this.datesInTheNote.component.innerHTML = dates.join('<br/>');
  }

  removeSelection() {
    this.isSelected = false;
    this.component.classList.remove('note--selected');
  }
}
