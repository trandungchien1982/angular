import { Component, Input } from '@angular/core';

import { BaseDynamicComponent } from '../base-dynamic.component';

@Component({
  selector: 'child-dynamic-01',
  templateUrl:'./child-dynamic01.component.html',
  styleUrls: ['./child-dynamic01.component.css']
})
export class ChildDynamic01Component implements BaseDynamicComponent {
  @Input() data: any;
}

