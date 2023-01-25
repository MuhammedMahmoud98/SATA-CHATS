import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterUserPipe } from './components/users-list/pipes/filter-user.pipe';

@NgModule({
  declarations: [
    ChatsComponent,
    UsersListComponent,
    UserChatComponent,
    FilterUserPipe,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule,
  ],
})
export class ChatsModule { }
