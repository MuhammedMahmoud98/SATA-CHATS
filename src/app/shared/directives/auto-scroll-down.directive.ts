import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoScrollDown]',
})
export class AutoScrollDownDirective {
  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('scroll', ['$event'])
  autoScrollDown(event) {
    console.log(event.target.scrollHeight, 'SCROLL DOWN');
    this.el.nativeElement.scrollTo({ left: 0, top: event.target.scrollHeight });
  }
}
