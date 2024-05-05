import { Component } from '@angular/core';
import { TemplateComp2Component } from "../template-comp-2/template-comp-2.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-template-comp-1',
    standalone: true,
    templateUrl: './template-comp-1.component.html',
    styleUrl: './template-comp-1.component.scss',
    imports: [ CommonModule, TemplateComp2Component]
})
export class TemplateComp1Component {

}
