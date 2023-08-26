import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-input-output-02',
  templateUrl: './input-output.component-02.html',
  styleUrls: ['./input-output.component-02.css']
})
export class InputOutputComponent02 {

  @Input() item = '';

  currentSelectedBackground:string = 'lightcyan';
  @Output() changeSelectedBackground = new EventEmitter<string>();

  changeParentBackground() {
    console.log('.. INPUT-OUTPUT-02: Change selected parent background', this.currentSelectedBackground);
    this.changeSelectedBackground.emit(this.currentSelectedBackground);
  }
}
