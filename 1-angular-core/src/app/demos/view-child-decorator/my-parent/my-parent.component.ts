import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MyChildComponent } from "../my-child/my-child.component";

@Component({
  selector: 'app-my-view-parent',
  standalone: true,
  templateUrl: './my-parent.component.html',
  styleUrl: './my-parent.component.scss',
  imports: [MyChildComponent]
})
export class MyParentComponent implements OnInit, AfterViewInit {

  parentTitle = "+ Parent title";

  @ViewChild(MyChildComponent, {
    read: ElementRef
  }) 
  private myChildComp1!: ElementRef;

  @ViewChild('childComp2') private myChildComp2!: MyChildComponent;

  @ViewChild('childHeading') private childHeading!: ElementRef;

  @ViewChild('childSpan') private childSpan!: ElementRef;

  @ViewChildren(MyChildComponent) 
  private myChildCompList!: QueryList<MyChildComponent>;

  @ViewChildren(MyChildComponent, { read: ElementRef }) 
  private myChildCompElemRefList!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.myChildCompList);
    this.myChildCompList.changes.subscribe(
      childComp => console.log(childComp)
    );
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.myChildComp1);
  }

  changeChildTitle() {
    console.log("inside changeChildTitle", this.myChildCompElemRefList);
    //this.childHeading.nativeElement.innerHTML = "Child modified heading";
    //console.log(this.childHeading);
    //this.myChildComp.childTitle = "Changed title from Parent!";
  }

}
