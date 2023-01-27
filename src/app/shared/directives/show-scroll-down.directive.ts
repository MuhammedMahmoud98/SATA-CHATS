import { Directive, ElementRef, HostListener } from '@angular/core';
import {ChatsService} from "../../services/chats.service";

@Directive({
  selector: '[appShowScrollDown]',
})
export class ShowScrollDownDirective {
  lastScrollTop = 0;

  constructor(private el: ElementRef<HTMLElement>, private chatsService: ChatsService) { }

  @HostListener('scroll', ['$event'])
  showScrollBtn(): void {
    const scrollDiff = this.el.nativeElement.scrollHeight - this.el.nativeElement.scrollTop;
    console.log(scrollDiff, 'SCROLL DIFF')
    if (scrollDiff > 800) {
      this.chatsService.showScrollDownBtn.next(true);
    } else {
      this.chatsService.showScrollDownBtn.next(false);
    }
    // const currentScrollValue = this.el.nativeElement.scrollTop;
    // // CHECK IF USER SCROLLED UP
    // if (this.lastScrollTop > currentScrollValue) {
    //   console.log('go up');
    //   this.chatsService.showScrollDownBtn.next(true);
    // } else {
    //   this.chatsService.showScrollDownBtn.next(false);
    //   console.log('go down');
    // }
    // this.lastScrollTop = this.el.nativeElement.scrollTop;
  }
}
