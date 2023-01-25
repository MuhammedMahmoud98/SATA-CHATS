import {
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Message, User } from '../../../../models/chats.model';
import { getSelectedUser } from '../../../../store/selectors/users.selector';
import { sendMessage } from '../../../../store/actions/chats.action';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit {
  @ViewChild('chatLayer') private myScrollContainer: ElementRef;

  headIcons: string[] = [
    'search',
    'more_vert',
  ]

  user$: Observable<User>;

  typingForm: FormGroup;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.createTypingForm();
    this.selectUserChat();
  }

  selectUserChat(): void {
    this.user$ = this.store.pipe(
      select(getSelectedUser),
    );
  }

  createTypingForm(): void {
    this.typingForm = new FormGroup({
      typeValue: new FormControl(''),
    });
  }

  get getTypingValue(): string {
    return this.typingForm.get('typeValue').value;
  }

  addMessage(userId: number) {
    if (this.getTypingValue.trim()) {
      const messageWrapper: {message: Message, userId: number} = {
        message: {
          body: this.getTypingValue,
          personal: true,
          time: new Date(),
        },
        userId,
      };
      this.store.dispatch(sendMessage(messageWrapper));
      this.typingForm.reset();
      setTimeout(() => this.scrollDown(), 300);
    }
  }

  scrollDown() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  get isMobile(): boolean {
    return window.innerWidth < 992;
  }
}
