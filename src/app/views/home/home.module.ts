import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardLinkComponent, CardProjectComponent, ToastComponent } from '@components';
import { AnimateNumberModule, PositionStickyDirective } from '@directives';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    HomeRoutingModule,

    AnimateNumberModule,

    CardLinkComponent,
    CardProjectComponent,
    ToastComponent,

    PositionStickyDirective,
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class HomeModule { }
