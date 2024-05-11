import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomColorDirective } from '../custom-color-directive/custom-color.directive';

@Component({
  selector: 'app-my-custom-color',
  standalone: true,
  imports: [CustomColorDirective],
  templateUrl: './my-custom-color.component.html',
  styleUrl: './my-custom-color.component.scss'
})
export class MyCustomColorComponent implements AfterViewInit {

  @ViewChild(CustomColorDirective)
  customColorDirective!: CustomColorDirective;

  ngAfterViewInit(): void {
    console.log("customColorDirective = ", this.customColorDirective);
  }


  handleToggColorEvent($event: any) {
    console.log("my emitted message in component.ts = ", $event);
  }

}
