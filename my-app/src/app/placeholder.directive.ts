import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tplPlaceHolder]',
})
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

