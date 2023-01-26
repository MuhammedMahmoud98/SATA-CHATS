import {
  Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import {
  animate, style, transition, trigger,
} from '@angular/animations';
import { take, takeUntil, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Message, User } from '../../../../models/chats.model';
import { getSelectedUser } from '../../../../store/selectors/users.selector';
import { sendMessage } from '../../../../store/actions/chats.action';
import { ChatsService } from '../../../../services/chats.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
  animations: [
    trigger('translateUpWithOpacity', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('150ms', style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
    ]),
  ],
})
export class UserChatComponent implements OnInit, OnDestroy {
  @ViewChild('chatLayer') private myScrollContainer: ElementRef;

  headIcons: string[] = [
    'search',
    'more_vert',
  ]

  user$: Observable<User>;

  typingForm: FormGroup;

  readonly destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store, private readonly chatsService: ChatsService) {
    this.createTypingForm();
  }

  ngOnInit(): void {
    this.selectUserChat();
    this.goDownWhenMessageSent();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
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
    if (this.getTypingValue?.trim()) {
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
      this.scrollDown();
    }
  }

  scrollDown(): void {
    if (this.myScrollContainer && this.myScrollContainer.nativeElement) {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer?.nativeElement?.scrollHeight;
    }
  }

  goDownWhenMessageSent() {
    this.chatsService.isMessageSent.pipe(
      tap(() => {
        setTimeout(() => this.scrollDown(), 0);
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  get isMobile(): boolean {
    return window.innerWidth < 992;
  }

  trackByFn(index: number): number {
    return index;
  }
}
