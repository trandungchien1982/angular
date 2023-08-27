import { Component, Input } from '@angular/core';

import { BaseDynamicComponent } from '../base-dynamic.component';

@Component({
  selector: 'child-dynamic-03',
  templateUrl: './child-dynamic03.component.html',
  styleUrls: ['./child-dynamic03.component.css']
})
export class ChildDynamic03Component implements BaseDynamicComponent {
  @Input() data: any;
}

