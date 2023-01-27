import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../models/chats.model';
import { getUsers } from '../../../../store/selectors/users.selector';
import { OpenFriendChat } from '../../../../store/actions/users.action';
import { ChatsService } from '../../../../services/chats.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  headerIcons: string[] = [
    'people_alt',
    'chat_bubble_outline',
    'more_vert',
  ];

  users$!: Observable<User[]>;

  searchForm: FormGroup;

  constructor(private store: Store, private router: Router, private readonly chatsService: ChatsService) { }

  ngOnInit(): void {
    this.createForm();
    this.selectUsersFromStore();
  }

  selectUsersFromStore() {
    this.users$ = this.store.pipe(
      // take(1),
      select(getUsers),
    );
  }

  createForm(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  get getSearchValue(): string {
    return this.searchForm.get('search').value;
  }

  trackByFn(index: number, item: any) {
    return item;
  }

  openFriendChat(userId: number) {
    this.store.dispatch(OpenFriendChat({ userId }));
    // FIRE GO DOWN FUNCTION
    this.chatsService.isMessageSent.next(true);
    if (window.innerWidth < 992) {
      this.router.navigate(['mobile-chats/user-chat']);
    }
  }
}
