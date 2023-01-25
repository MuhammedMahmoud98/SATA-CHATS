import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/chats.model";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {
  @Input() headIcons: string[] = [];
  @Input() hasUserInfo = false;
  @Input() userInfo: Pick<User, 'name' | 'image' | 'lastSeen'> = {};
  constructor() { }

  ngOnInit(): void {
  }

}
