import {Component} from "@/app/components/base-component/component";
import './_notes-field.scss';

export class NotesField extends Component {
  constructor() {
    super('section', 'notes-field');
  }

  updateNotes(notes, isActiveNotesPage) {
    this.component.innerHTML = '';
    let notesToShow = notes.filter(note => note.isActive);
    if (!isActiveNotesPage) notesToShow = notes.filter(note => !note.isActive);
    this.appendComponents(...notesToShow);
  }
}
