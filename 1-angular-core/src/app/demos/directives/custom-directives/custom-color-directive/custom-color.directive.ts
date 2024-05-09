import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
  standalone: true
})
export class CustomColorDirective {

  @Input() myHoverColor = '';
  @Input() myTextDecoration = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.textDecoration = this.myTextDecoration;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.myHoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('red');
    this.el.nativeElement.style.textDecoration = 'underline';
  }



}
