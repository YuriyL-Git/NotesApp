import {Component} from "@/app/components/base-component/component";
import './_note.scss';

const FIND_DATES_REGEX = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

export class Note extends Component {
  constructor(noteContent, noteCategory) {
    super('div', 'note');
    this.creationTime = new Component('div', 'note__creation-time');
    this.content = new Component('div', 'note__content');
    this.category = new Component('div', 'note__category');
    this.datesInTheNote = new Component('div', 'note__dates-in-note');

    this.creationTime.component.innerHTML = new Date().toJSON().slice(0, 10).split('-').reverse().join('/');
    this.content.component.innerHTML = noteContent;
    this.category.component.innerHTML = noteCategory;
    this.datesInTheNote.component.innerHTML = noteContent.match(FIND_DATES_REGEX).join('<br/>');

    this.appendComponents(this.creationTime, this.content, this.category, this.datesInTheNote);
  }
}
