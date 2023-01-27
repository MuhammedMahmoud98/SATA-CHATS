import {
  Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import {
  animate, group, style, transition, trigger,
} from '@angular/animations';
import { take, takeUntil, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Message, User } from '../../../../models/chats.model';
import { getNetworkStatus, getSelectedUser } from '../../../../store/selectors/users.selector';
import { sendMessage } from '../../../../store/actions/chats.action';
import { ChatsService } from '../../../../services/chats.service';
import { UsersState } from '../../../../store/reducers/users.reducer';
import { NetworkStatus } from '../../../../models/network-status.model';

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
    trigger('showWithOpacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 })),
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

  networkStatus$: Observable<NetworkStatus>;

  readonly destroyed$: Subject<boolean> = new Subject<boolean>();

  items = [];

  constructor(private readonly store: Store, private readonly chatsService: ChatsService) {
    this.createTypingForm();
  }

  ngOnInit(): void {
    this.selectUserChat();
    this.goDownWhenMessageSent();
    this.selectNetworkStatus();
    this.items = Array.from({ length: 1000 }).map((_, i) => `Item ${i}`);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  selectNetworkStatus(): void {
    this.networkStatus$ = this.store.pipe(select(getNetworkStatus));
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
