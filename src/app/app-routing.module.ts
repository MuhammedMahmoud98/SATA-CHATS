import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full',
  },
  {
    path: 'chats',
    loadChildren: () => import('./modules/chats/chats.module').then((m) => m.ChatsModule),
  },
  {
    path: 'mobile-chats',
    loadChildren: () => import('./modules/mobile-chats/mobile-chats.module').then((m) => m.MobileChatsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
