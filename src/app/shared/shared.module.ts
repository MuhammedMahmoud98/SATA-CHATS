import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MaterialApisModule } from './material-apis/material-apis.module';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { AutoScrollDownDirective } from './directives/auto-scroll-down.directive';
import { WindowResizeDirective } from './directives/window-resize.directive';
import { TruncateChatTextPipe } from './pipes/truncate-chat-text.pipe';
import { NetworkErrorComponent } from './components/network-error/network-error.component';

@NgModule({
  declarations: [
    ChatHeaderComponent,
    AutoScrollDownDirective,
    WindowResizeDirective,
    TruncateChatTextPipe,
    NetworkErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialApisModule,
    MatRippleModule,
  ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialApisModule,
        ChatHeaderComponent,
        AutoScrollDownDirective,
        WindowResizeDirective,
        MatRippleModule,
        TruncateChatTextPipe,
        NetworkErrorComponent,
    ],
})
export class SharedModule { }
