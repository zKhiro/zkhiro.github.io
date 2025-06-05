import {
  CardProjectComponent,
} from 'src/app/shared/components/card-project/card-project.component';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardLinkComponent } from '@components';
import { AnimateNumberModule } from '@directives';

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
    CardProjectComponent
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class HomeModule { }
