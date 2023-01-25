import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileChatsRoutingModule } from './mobile-chats-routing.module';
import { MobileChatsComponent } from './mobile-chats.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MobileChatsComponent
  ],
  imports: [
    CommonModule,
    MobileChatsRoutingModule,
    SharedModule,
  ]
})
export class MobileChatsModule { }
