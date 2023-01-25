import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.isMobile) {
      this.router.navigate(['mobile-chats'])
    }
  }




  get isMobile(): boolean {
    return window.innerWidth < 992;
  }
}
