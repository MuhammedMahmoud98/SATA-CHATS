import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appWindowResize]',
})
export class WindowResizeDirective {
  constructor(private el: ElementRef<HTMLElement>, private router: Router) { }

  @HostListener('window:resize', ['$event'])
  windowResize(event) {
    if (event.target.innerWidth > 992) {
      this.router.navigate(['chats']);
    } else {
      this.router.navigate(['mobile-chats']);
    }
  }
}
