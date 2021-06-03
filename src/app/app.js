import {NotesField} from "@/app/components/notes-field/notes-field";
import {SummaryField} from "@/app/components/summary/summary";
import toggleClass from "@/app/helpers/toggle-class";
import {Note} from "@/app/components/note/note";
import blinkElement from "@/app/helpers/blink-element";

export class App {
  constructor() {
    this.btnAdd = document.querySelector('.header__btn-add');
    this.btnEdit = document.querySelector('.header__btn-edit');
    this.btnSave = document.querySelector('.header__btn-save');
    this.btnRemove = document.querySelector('.header__btn-remove');
    this.btnArchive = document.querySelector('.header__btn-archive');
    this.btnRestore = document.querySelector('.header__btn-restore');

    this.btnShowNotes = document.querySelector('.header__btn-show-notes');
    this.btnShowArchive = document.querySelector('.header__btn-show-archive');

    this.noteTextInput = document.querySelector('.note-to-add__input');
    this.noteCategoryInput = document.querySelector('.note-to-add__select');

    this.notesEntry = document.querySelector('.notes-field__wrapper');
    this.summaryEntry = document.querySelector('.summary-field__wrapper');

    this.notesField = new NotesField();
    this.summaryField = new SummaryField([{category: 'thoghts', notesQty: 5}, {
      category: 'something',
      notesQty: 8
    }, {category: 'something', notesQty: 8}, {category: 'something', notesQty: 8}]);


    this.summaryEntry.append(this.summaryField.component);
    this.notesEntry.append(this.notesField.component);

    this.notesActive = [];
    this.notesArchive = [];
  }

  start() {
    this.btnAdd.addEventListener('click', () => {
      if (!this.noteTextInput.value) {
        blinkElement(this.noteTextInput);
        return;
      }

      if (!this.noteCategoryInput.value) {
        blinkElement(this.noteCategoryInput);
        return;
      }

      const newNote = new Note(this.noteTextInput.value, this.noteCategoryInput.value);
      this.notesActive.push(newNote);
      this.notesField.updateNotes(this.notesActive);

    });

    this.btnEdit.addEventListener('click', () => {

    });

    this.btnRemove.addEventListener('click', () => {

    });

    this.btnArchive.addEventListener('click', () => {

    });

    this.btnShowNotes.addEventListener('click', () => {
      toggleClass(this.btnShowNotes, this.btnShowArchive, 'btn-active');
    });

    this.btnShowArchive.addEventListener('click', () => {

    });
  }


}

