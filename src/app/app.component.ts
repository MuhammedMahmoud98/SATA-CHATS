import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './models/chats.model';
import { LoadUsers } from './store/actions/users.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: 'muhammed mahmoud',
      image: 'assets/images/1.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 2,
      name: 'shady alaa',
      image: 'assets/images/0.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 3,
      name: 'saleh mahmoud',
      image: 'assets/images/2.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 4,
      name: 'mustafa mahmoud',
      image: 'assets/images/3.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 5,
      name: 'hamza muhammed',
      image: 'assets/images/4.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 6,
      name: 'sherif nasser',
      image: 'assets/images/5.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 7,
      name: 'zeyad elshafey',
      image: 'assets/images/6.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 8,
      name: 'ahmed ramadan',
      image: 'assets/images/7.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 9,
      name: 'ahmed ramadan',
      image: 'assets/images/7.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
    {
      id: 10,
      name: 'ahmed ramadan',
      image: 'assets/images/7.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    }, {
      id: 11,
      name: 'ahmed ramadan',
      image: 'assets/images/7.jpg',
      messages: [],
      lastSeen: new Date(),
      outerMessage: 'Hey there i\'m using this chats app',
    },
  ];

  constructor(
    public store: Store,
  ) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.store.dispatch(LoadUsers({ users: this.users }));
  }
}
