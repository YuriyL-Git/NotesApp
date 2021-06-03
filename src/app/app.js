import {NotesField} from "@/app/components/notes-field/notes-field";
import {SummaryField} from "@/app/components/summary/summary";
import toggleClass from "@/app/helpers/toggle-class";
import {Note} from "@/app/components/note/note";
import blinkElement from "@/app/helpers/blink-element";
import {disableBtn, enableBtn} from "@/app/helpers/change-btn-state";

export class App {
  constructor() {
    this.btnAdd = document.querySelector('.header__btn-add');
    this.btnUpdate = document.querySelector('.header__btn-update');
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

    this.notes = [];
    this.isActiveNotesPage = true;
    this.disableButtons();
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

      const newNote = new Note(this.noteTextInput.value, this.noteCategoryInput.value, this.noteClicked.bind(this));
      this.notes.push(newNote);
      this.notesField.updateNotes(this.notes, this.isActiveNotesPage);
    });

    this.btnUpdate.addEventListener('click', () => {
      const selectedNote = this.notes.filter(note => note.isSelected).pop();
      selectedNote.content.component.innerHTML = this.noteTextInput.value;
      selectedNote.category.component.innerHTML = this.noteCategoryInput.value;
      this.notesField.updateNotes(this.notes, this.isActiveNotesPage);
    });

    this.btnRemove.addEventListener('click', () => {
      this.notes = this.notes.filter(note => !note.isSelected);
      this.notesField.updateNotes(this.notes, this.isActiveNotesPage);
    });

    this.btnArchive.addEventListener('click', () => {
      const selectedNotes = this.notes.filter(note => note.isSelected);
      selectedNotes.forEach(note => note.isActive = false);
      this.notesField.updateNotes(this.notes, this.isActiveNotesPage);
    });

    this.btnShowNotes.addEventListener('click', () => {
      toggleClass(this.btnShowNotes, this.btnShowArchive, 'btn-active');
    });

    this.btnShowArchive.addEventListener('click', () => {

    });

  }

  noteClicked() {
    this.disableButtons();
    this.noteTextInput.value = '';
    this.noteCategoryInput.value = '';

    const selectedNotes = this.notes.filter(note => note.isSelected);
    if (selectedNotes.length === 1) {
      enableBtn(this.btnUpdate);
      this.noteTextInput.value = selectedNotes[0].content.component.innerHTML;
      this.noteCategoryInput.value = selectedNotes[0].category.component.innerHTML;
    }
    if (selectedNotes.length > 0) {
      enableBtn(this.btnRemove);
      enableBtn(this.btnArchive);
    }
  }

  disableButtons() {
    disableBtn(this.btnUpdate);
    disableBtn(this.btnRemove);
    disableBtn(this.btnArchive);
  }


}

