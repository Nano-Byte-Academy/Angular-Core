import { Component } from '@angular/core';
import { MyPostsServiceService } from '../services/my-posts-service/my-posts-service.service';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {

  constructor(private myPostSvc: MyPostsServiceService) {
    this.myPostSvc.getMyPosts().subscribe((data: any) => {
      console.log(data);
    });
  }

}
