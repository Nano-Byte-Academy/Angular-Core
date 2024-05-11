import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
  standalone: true
})
export class CustomColorDirective {

  @Input() myHoverColor = '';
  @Input() myTextDecoration = '';

  // class bindings
  @HostBinding('class.myHostBindingClass') get myClass() { return true; }

  // style binding
  @HostBinding('style.font-family') get fontFamily() { return 'Verdana'; }
  @HostBinding('style.font-size.px') @Input() fontSize: number = 24;

  // attribute binding
  @HostBinding('attr.aria-required')
  @Input() ariaRequired: boolean = false;

  // property binding
  @HostBinding('id') get id() { return 'myCustomId'; }

  @Output() toggleColor = new EventEmitter();

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

  @HostListener('mouseover', ['$event'])
  onMouseOver($event: any) {
    //console.log("$event = ",$event);
    this.toggleColor.emit("my custom emitted Red color message");
  }



}
