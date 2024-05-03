import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  myFirstInterpolationVar = "Hello World!";
  myImageUrl = "../assets/images/pexels-image-code.jpg";
  isActive = true;

  text2way = "Hello World 1!";
  textArea2way = "Hello World 2!";
  selectedCountry = "India";
  selectedColor = "green";
  isChecked = true;

  getMyValue() {
    return "Hello Function!";
  }

  handleClick($event: MouseEvent) {
    alert("handleClick");
  }

  onKeyUp($event: KeyboardEvent) {
    alert("onKeyUp");
  }

  onMouseOver($event: MouseEvent) {
    alert("onMouseOver");
  }

  onEnterPress($event: Event) {
    alert("onEnterPress");
  }

}
