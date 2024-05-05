import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList } from 
'@angular/core';

@Component({
  selector: 'app-my-content-proj-2',
  standalone: true,
  imports: [],
  templateUrl: './my-content-proj-2.component.html',
  styleUrl: './my-content-proj-2.component.scss'
})
export class MyContentProj2Component implements AfterViewInit, AfterContentInit {

  @Input() titleFromParent = "";

  @ContentChild('Myh3TemRef') ngContentAccess: any;

  @ContentChildren('myProjContent1,myProjContent2') ngContentListAccess!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    //console.log("ngAfterViewInit", this.ngContentAccess);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", this.ngContentListAccess);
  }

}
