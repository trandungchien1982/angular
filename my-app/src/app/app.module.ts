import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDynamic01Component } from './child-dynamic01/child-dynamic01.component';
import { ChildDynamic02Component } from './child-dynamic02/child-dynamic02.component';
import { ChildDynamic03Component } from './child-dynamic03/child-dynamic03.component';
import { PlaceholderDirective } from './placeholder.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildDynamic01Component,
    ChildDynamic02Component,
    ChildDynamic03Component,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
