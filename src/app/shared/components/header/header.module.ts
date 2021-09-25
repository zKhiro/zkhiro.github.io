import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
