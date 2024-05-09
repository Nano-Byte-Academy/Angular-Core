import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-built-in-directives',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './built-in-directives.component.html',
  styleUrl: './built-in-directives.component.scss'
})
export class BuiltInDirectivesComponent implements OnInit {

  myModelName = 'John Doe';

  myBooleanFlag: boolean = true;
  myClassesList: Record<string, boolean> = {};
  myStylesList: Record<string, string> = {};

  my1stBoolFlag: boolean = true;
  my2ndBoolFlag: boolean = false;
  my3rdBoolFlag: boolean = true;

  myBooksList: Array<Record<string, string>> = [
    { "bookId": "1", "bookName": "My Book 1", "category": "Fiction" },
    { "bookId": "2", "bookName": "My Book 2", "category": "Science" },
    { "bookId": "3", "bookName": "My Book 3", "category": "AI" }
  ];

  ngOnInit(): void {
    this.getMyStylesListOnLoad();
    this.getMyClassListOnLoad();
  }

  getMyStylesListOnLoad(){
    this.myStylesList = {
      'font-size': this.my1stBoolFlag ? '24px' : '12px',
      'color': this.my2ndBoolFlag ? 'red' : 'green',
      'font-style': this.my3rdBoolFlag ? 'italic' : 'normal',
    };
  }

  getMyClassListOnLoad(){
    this.myClassesList = {
      my1stCssClass: this.my1stBoolFlag,
      my2ndCssClass: this.my2ndBoolFlag,
      my3rdCssClass: this.my3rdBoolFlag,
    };
  }


}
