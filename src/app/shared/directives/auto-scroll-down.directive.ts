import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoScrollDown]',
})
export class AutoScrollDownDirective {
  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('scroll', ['$event'])
  autoScrollDown() {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }
}
