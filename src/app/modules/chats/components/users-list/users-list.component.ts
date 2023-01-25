import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../../models/chats.model';
import { getUsers } from '../../../../store/selectors/users.selector';
import { OpenFriendChat } from '../../../../store/actions/users.action';
import {Router} from "@angular/router";

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

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.selectUsersFromStore();
  }

  selectUsersFromStore() {
    this.users$ = this.store.pipe(
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
    if (window.innerWidth < 992) {
      this.router.navigate(['mobile-chats/user-chat'])
    }
  }
}
