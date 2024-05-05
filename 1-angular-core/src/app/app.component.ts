import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyParentComponent } from './parent-child-demo/my-parent/my-parent.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ControlFlowComponent } from './demos/control-flow/control-flow.component';
import { MyParentComponent as MyParent1 } from './demos/view-child-decorator/my-parent/my-parent.component';
import { MyContentProj1Component } from './demos/content-projection/my-content-proj-1/my-content-proj-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MyFirstComponentComponent,
    MyParentComponent,
    DataBindingComponent,
    ControlFlowComponent,
    MyParent1,
    MyContentProj1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-angular-core';
}
