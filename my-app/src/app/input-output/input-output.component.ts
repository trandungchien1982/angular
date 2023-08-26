import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  @Input() item = '';
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = '';
  currentSelectedPadding:string = '10px';
  @Output() changePaddingRequest = new EventEmitter<string>();

  deleteItem() {
    console.warn('.. INPUT-OUTPUT: emitting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

  changeParentPadding() {
    console.log('.. INPUT-OUTPUT: Change selected parent padding', this.currentSelectedPadding);
    this.changePaddingRequest.emit(this.currentSelectedPadding);
  }
}
