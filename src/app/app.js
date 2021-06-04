import {NotesField} from "@/app/components/notes-field/notes-field";
import {SummaryField} from "@/app/components/summary/summary";
import {Note} from "@/app/components/note/note";
import blinkElement from "@/app/helpers/blink-element";
import {disableButtons, enableButtons} from "@/app/helpers/change-btn-state";

export class App {
  constructor() {
    this.btnAdd = document.querySelector('.header__btn-add');
    this.btnUpdate = document.querySelector('.header__btn-update');
    this.btnRemove = document.querySelector('.header__btn-remove');
    this.btnArchive = document.querySelector('.header__btn-archive');
    this.btnRestore = document.querySelector('.header__btn-restore');

    this.btnShowActiveNotes = document.querySelector('.header__btn-show-notes');
    this.btnShowArchive = document.querySelector('.header__btn-show-archive');

    this.notesFieldTitle = document.querySelector('.notes-field__title');
    this.noteTextInput = document.querySelector('.note-to-add__input');
    this.noteCategoryInput = document.querySelector('.note-to-add__select');

    this.notesEntry = document.querySelector('.notes-field__wrapper');
    this.summaryEntry = document.querySelector('.summary-field__wrapper');

    this.notesField = new NotesField();
    this.summaryField = new SummaryField();
    this.summaryField.updateData(this.getSummaryData());

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
      const newNote = new Note(
        this.noteTextInput.value,
        this.noteCategoryInput.value,
        this.updateNotes.bind(this)
      );
      this.notes.push(newNote);
      if (!this.isActiveNotesPage) this.showActiveNotes();
      this.noteTextInput.value = '';
      this.updateNotesField();
    });

    this.btnUpdate.addEventListener('click', () => {
      const selectedNote = this.notes.filter(note => note.isSelected).pop();
      selectedNote.updateNote(this.noteTextInput.value, this.noteCategoryInput.value);
      this.updateNotesField();
    });

    this.btnRemove.addEventListener('click', () => {
      this.notes = this.notes.filter(note => !note.isSelected);
      this.updateNotesField();
    });

    this.btnArchive.addEventListener('click', () => {
      const selectedNotes = this.notes.filter(note => note.isSelected);
      selectedNotes.forEach(note => note.isActive = false);
      this.notes.forEach(note => note.removeSelection());
      this.updateNotesField();
    });

    this.btnRestore.addEventListener('click', () => {
      const selectedNotes = this.notes.filter(note => note.isSelected);
      selectedNotes.forEach(note => note.isActive = true);
      this.updateNotesField();
    });

    this.btnShowActiveNotes.addEventListener('click', () => {
      this.showActiveNotes();
    });

    this.btnShowArchive.addEventListener('click', () => {
      this.showArchiveNotes();
    });
  }

  showActiveNotes() {
    this.btnShowActiveNotes.classList.add('btn-active');
    this.btnShowArchive.classList.remove('btn-active');
    this.btnArchive.classList.remove('hidden');
    this.btnRestore.classList.add('hidden');

    this.isActiveNotesPage = true;
    this.notesFieldTitle.innerHTML = 'Notes';
    this.notes.forEach(note => note.removeSelection());
    this.updateNotesField();
  }

  showArchiveNotes() {
    this.btnShowActiveNotes.classList.remove('btn-active');
    this.btnShowArchive.classList.add('btn-active');
    this.btnArchive.classList.add('hidden');
    this.btnRestore.classList.remove('hidden');

    this.isActiveNotesPage = false;
    this.notesFieldTitle.innerHTML = 'Archive';
    this.notes.forEach(note => note.removeSelection());
    this.updateNotesField();
  }

  updateNotes() {
    this.disableButtons();
    this.noteTextInput.value = '';
    const selectedNotes = this.notes.filter(note => note.isSelected);

    if (selectedNotes.length === 1) {
      enableButtons(this.btnUpdate);
      this.noteTextInput.value = selectedNotes[0].content.component.innerHTML;
      this.noteCategoryInput.value = selectedNotes[0].category.component.innerHTML;
    }
    if (selectedNotes.length > 0) {
      enableButtons(this.btnRemove, this.btnArchive, this.btnRestore);
    }
  }

  disableButtons() {
    disableButtons(
      this.btnUpdate,
      this.btnRemove,
      this.btnArchive,
      this.btnRestore
    );
  }

  updateNotesField() {
    this.getSummaryData();
    this.updateNotes();
    this.summaryField.updateData(this.getSummaryData());
    this.notesField.updateNotes(this.notes, this.isActiveNotesPage);
  }

  getSummaryData() {
    const result = [];
    let currentNotes = [];
    if (this.notes) {
      currentNotes = this.notes.filter(
        note => note.isActive === this.isActiveNotesPage
      );
    }
    const categories = [...this.noteCategoryInput.options].filter(
      cat => cat.text !== 'category');

    categories.forEach(category => {
      const categoryData = {category: category.text, notesQty: 0};
      categoryData.notesQty = currentNotes.filter(
        note => note.category.component.innerHTML === category.text).length;
      result.push(categoryData);
    });
    return result;
  }
}

