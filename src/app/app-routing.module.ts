import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewLocaleResolver } from '@resolvers';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    data: {
      locale_key: "HOME",
    },
    resolve: { locale: viewLocaleResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
