import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-comp-2',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './template-comp-2.component.html',
  styleUrl: './template-comp-2.component.scss'
})
export class TemplateComp2Component {

  isSectionEnabled: boolean = false;

  @Input() myBodyTemplate: any;

  myContextObject: any = {
    "myKey1": "placeholder value 1",
    "myKey2": "placeholder value 2"
  };

}
