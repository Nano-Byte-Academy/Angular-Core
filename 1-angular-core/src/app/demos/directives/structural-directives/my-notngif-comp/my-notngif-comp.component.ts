import { Component } from '@angular/core';
import { NotNgIfDirective } from '../not-ng-if.directive';

@Component({
  selector: 'app-my-notngif-comp',
  standalone: true,
  imports: [NotNgIfDirective],
  templateUrl: './my-notngif-comp.component.html',
  styleUrl: './my-notngif-comp.component.scss'
})
export class MyNotngifCompComponent {

  myBoolFlag: boolean = false;

}
