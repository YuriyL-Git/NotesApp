import {Component} from "@/app/components/base-component/component";
import './_notes-field.scss';

export class NotesField extends Component {
  constructor() {
    super('section', 'notes-field');
    // const note = new Note('my test content 15/12/21 fds 15/22/21', 'thoughts');
    // this.appendComponents(note);
  }

  updateNotes(notes) {
    this.component.innerHTML = '';
    this.appendComponents(...notes);
  }
}
