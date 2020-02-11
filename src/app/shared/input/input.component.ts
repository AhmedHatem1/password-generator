import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() labelText = ''
  @Input() inputType = 'text'
  @Input() inputID;
  @Input() isReadOnly = false;
  @Input() value = '';
  @Output() inputChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  getInputClasses() {
    return {
      'form-control': this.inputType != 'checkbox',
      'form-check': this.inputType == 'checkbox' || this.inputType == 'radio'
    }
  }

  onInputChange(event) {
    this.inputChange.emit(event.target.value);
  }

}
