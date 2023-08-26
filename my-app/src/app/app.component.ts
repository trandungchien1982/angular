import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUI+@Input+@Output';
  padding4Parent: string = '5px';
  background4Parent: string = 'lightcyan';

  inputValue01: string = 'Test 123';
  inputValue02: string = 'Giá trị 02';

  parentProcessForChangePaddingRequest(currentOptionValue: string) {
    console.log(' >> PARENT: Receive the changePaddingRequest with optionValue: ' + currentOptionValue);
    this.padding4Parent = currentOptionValue;
  }

  parentProcessForChangeBackground(currentOptionValue: string) {
    console.log(' >> PARENT: Receive the changeSelectedBackground with optionValue: ' + currentOptionValue);
    this.background4Parent = currentOptionValue;
  }
}
