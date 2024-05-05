import { Component } from '@angular/core';
import { MyContentProj2Component } from '../my-content-proj-2/my-content-proj-2.component';

@Component({
  selector: 'app-my-content-proj-1',
  standalone: true,
  imports: [ MyContentProj2Component ],
  templateUrl: './my-content-proj-1.component.html',
  styleUrl: './my-content-proj-1.component.scss'
})
export class MyContentProj1Component {

}
