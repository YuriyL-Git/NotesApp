import {NotesField} from "@/app/components/notes-field/notes-field";
import {SummaryField} from "@/app/components/summary/summary";

export class App {
  constructor() {
    this.btnAdd = document.querySelector('.header__btn-add');
    this.btnEdit = document.querySelector('.header__btn-edit');
    this.btnRemove = document.querySelector('.header__btn-remove');
    this.btnArchive = document.querySelector('.header__btn-archive');
    this.btnRestore = document.querySelector('.header__btn-restore');

    this.btnShowNotes = document.querySelector('.header__btn-show-notes');
    this.btnShowArchive = document.querySelector('.header__btn-show-archive');

    this.notesEntry = document.querySelector('.notes-field__wrapper');
    this.summaryEntry = document.querySelector('.summary-field__wrapper');

    this.notesField = new NotesField();
    this.summaryField = new SummaryField([{category: 'thoghts', notesQty: 5}, {
      category: 'something',
      notesQty: 8
    }, {category: 'something', notesQty: 8}, {category: 'something', notesQty: 8}]);


    this.summaryEntry.append(this.summaryField.component);
    this.notesEntry.append(this.notesField.component);
  }

  start() {
    this.btnAdd.addEventListener('click', () => {

    });

    this.btnEdit.addEventListener('click', () => {

    });

    this.btnRemove.addEventListener('click', () => {

    });

    this.btnArchive.addEventListener('click', () => {

    });

    this.btnShowNotes.addEventListener('click', () => {

    });

    this.btnShowArchive.addEventListener('click', () => {

    });
  }
}
