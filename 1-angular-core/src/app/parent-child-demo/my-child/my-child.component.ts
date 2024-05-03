import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-child',
  standalone: true,
  imports: [],
  templateUrl: './my-child.component.html',
  styleUrl: './my-child.component.scss'
})
export class MyChildComponent {

  @Input() my_data_from_parent = '';
  @Output() newDataEvent = new EventEmitter<string>();

  emitValueToParent(value: string){
    this.newDataEvent.emit(value);
  }

}
