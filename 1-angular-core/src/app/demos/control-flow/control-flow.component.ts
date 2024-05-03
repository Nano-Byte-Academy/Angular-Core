import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  myImageUrl = "../assets/images/pexels-image-code.jpg";

  myImageUrl1 = "../assets/images/pexels-image-code.jpg";
  myImageUrl2 = "../assets/images/pexels-image-code.jpg";
  
  coursesList = [
    { "id": 1, "name": "My Course 1", "courseId": 101, "courseTag": "Frontend" },
    { "id": 2, "name": "My Course 2", "courseId": 102, "courseTag": "Frontend" },
    { "id": 3, "name": "My Course 3", "courseId": 103, "courseTag": "Backend" },
    { "id": 4, "name": "My Course 4", "courseId": 104, "courseTag": "Cloud" }
  ];

  myTrackingFunction(index:number, course:any) {
    return course.id + course.courseId;
  }

}
