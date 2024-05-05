import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-view-child',
  standalone: true,
  imports: [],
  templateUrl: './my-child.component.html',
  styleUrl: './my-child.component.scss'
})
export class MyChildComponent {

  childTitle = "My initial child title ";
  @Input() childInputTitle = "";

  private childPrivateTitle = "private child title";

  publicFunction(){

  }

  private privateFunction(){

  }


}
