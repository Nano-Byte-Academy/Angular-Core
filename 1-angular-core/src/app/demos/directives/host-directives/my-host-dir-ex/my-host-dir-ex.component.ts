import { Component } from '@angular/core';
import { MyColorHostDirectiveDirective } from '../my-color-host-directive.directive';

@Component({
  selector: 'app-my-host-dir-ex',
  standalone: true,
  imports: [],
  templateUrl: './my-host-dir-ex.component.html',
  styleUrl: './my-host-dir-ex.component.scss',
  // hostDirectives: [MyColorHostDirectiveDirective]
  hostDirectives: [{
    directive: MyColorHostDirectiveDirective,
    inputs: ['myHoverColor', 'myTextDecoration'],
    //outputs: ['outputVars'],
  }]
})
export class MyHostDirExComponent {

}
