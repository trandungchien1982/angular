import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceholderDirective } from './placeholder.directive';
import { BaseDynamicComponent } from './base-dynamic.component';
import { ChildDynamic01Component } from './child-dynamic01/child-dynamic01.component';
import { ChildDynamic02Component } from './child-dynamic02/child-dynamic02.component';
import { ChildDynamic03Component } from './child-dynamic03/child-dynamic03.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Cho phép hiển thị thành phần View thuộc tplPlaceHolder
  @ViewChild(PlaceholderDirective, {static: true}) tplPlaceHolder!: PlaceholderDirective;

  title = 'AngularUI+@Input+@Output';
  padding4Parent: string = '5px';
  background4Parent: string = 'lightcyan';

  inputValue01: string = 'Test 123';

  // Lưu trữ Template đang được chọn cho DynamicComponentUI
  selectedTemplate: any;

  private LIST_DYNAMIC_COMPONENT:any = [
  {
    "component" : ChildDynamic01Component,
    "data": {
      "staticValue": "The first HeadLine - ",
      "headline": "The first HeadLine - " + this.inputValue01,
      "body": "The first BODY"
    }
  },
  {
    "component" : ChildDynamic02Component,
    "data": {
      "staticValue": "The SECOND HeadLine - ",
      "headline": "The SECOND HeadLine - " + this.inputValue01,
      "body": "The Second BODY"
    }
  },
  {
      "component" : ChildDynamic03Component,
      "data": {
        "staticValue": "The THIRD HeadLine - ",
        "headline": "The THIRD HeadLine - " + this.inputValue01,
        "body": "The THIRD BODY",
        "customContent": "Nội dung Custom 03, haha ..."
      }
    }
  ];

  ngOnInit(): void {
    this.loadComponent(0);
  }

  loadComponent(selectedIndex: number) {
    console.log(' >> Load component at index: ' + selectedIndex + ' at time: ' + new Date());
    this.selectedTemplate = this.LIST_DYNAMIC_COMPONENT[selectedIndex];

    const viewContainerRef = this.tplPlaceHolder.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<BaseDynamicComponent>(this.selectedTemplate.component);
    componentRef.instance.data = this.selectedTemplate.data;
    this.changeInputValue01(null);
  }

  loadComponentUI($event: any) {
    this.loadComponent($event.target.value);
  }

  changeInputValue01($event: any) {
    this.selectedTemplate.data.headline = this.selectedTemplate.data.staticValue + this.inputValue01;
  }

}
