import { Component } from '@angular/core';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
  selector: 'app-my-parent',
  standalone: true,
  imports: [ MyChildComponent ],
  templateUrl: './my-parent.component.html',
  styleUrl: './my-parent.component.scss'
})
export class MyParentComponent {

  my_parent_child_data = "my data passed from parent";

  updateValueFromEvent(newValue: string){
    this.my_parent_child_data = newValue;
  }

}
