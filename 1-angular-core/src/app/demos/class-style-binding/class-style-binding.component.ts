import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-style-binding.component.html',
  styleUrl: './class-style-binding.component.scss'
})
export class ClassStyleBindingComponent {

  myFlag: boolean = true;
  myFontValue: string = "4em"; // or "24px"
  myFontValueOnly: string = "24";

  styleStringList: string = "font-size: 24px; color: red;";
  stylesObject: Object = {
    'font-size': '27px',
    'color': 'blue'
  };

  getClassSpaceDelimited(){
    return "myClass1 myClass2 myClass3";
  }

  getClassObject(){
    return {
      "myClass1": true,
      "myClass2": false,
      "myClass3": false
    };
  }

  getClassArray(){
    return ["myClass1", "myClass2", "myClass3"];
  }

}
