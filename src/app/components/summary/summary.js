import './_summary.scss';
import {Component} from "@/app/components/base-component/component";


export class SummaryField extends Component {
  constructor() {
    super('section', 'summary-field');
    this.rows = [];
  }

  updateData(summaryData) {
    this.component.innerHTML = '';
    summaryData.forEach(data => {
      const row = {};
      row.fieldWrapper = new Component('div', 'summary-field__row-wrapper');
      row.categoryName = new Component('div', 'summary-field__category-name');
      row.notesQty = new Component('div', 'summary-field__category-notes-qty');

      row.categoryName.component.innerHTML = data.category;
      row.notesQty.component.innerHTML = data.notesQty;

      row.fieldWrapper.appendComponents(row.categoryName, row.notesQty);
      this.appendComponents(row.fieldWrapper);
      this.rows.push(row);
    });
  }
}
