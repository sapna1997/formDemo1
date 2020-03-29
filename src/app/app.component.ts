import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = new FormGroup({

    FirstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    LastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
  });
  isboolean = true;
  isboolean1 = true;
  isboolean2 = true;
  display1() {
    this.isboolean = false;
  }
  display2() {
    this.isboolean = false;
    this.isboolean1 = false;
  }
  display3() {
    this.isboolean = false;
    this.isboolean2 = false;
  }
}
