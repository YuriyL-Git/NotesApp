import {Note} from "@/app/components/note/note";

export class App {
  constructor(notesField) {
    console.log(notesField);
    const note = new Note('my 21/08/1978 content placed in the note 22/08/89 ', 'category');

    notesField.append(note.component);
  }
}
