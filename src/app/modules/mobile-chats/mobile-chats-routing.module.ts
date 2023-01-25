import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileChatsComponent } from './mobile-chats.component';
import { UsersListComponent } from '../chats/components/users-list/users-list.component';
import { UserChatComponent } from '../chats/components/user-chat/user-chat.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'user-chat',
    component: UserChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileChatsRoutingModule { }
