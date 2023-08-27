import { Component, Input } from '@angular/core';

import { BaseDynamicComponent } from '../base-dynamic.component';

@Component({
  selector: 'child-dynamic-02',
  templateUrl: './child-dynamic02.component.html',
  styleUrls: ['./child-dynamic02.component.css']
})
export class ChildDynamic02Component implements BaseDynamicComponent {
  @Input() data: any;
}

