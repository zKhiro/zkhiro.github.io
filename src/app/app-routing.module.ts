import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarResolver } from '@resolvers';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    resolve: {
      navbar: NavbarResolver,
    },
    data: {
      showNavbar: false,
    }
  },
  {
    path: 'skill-tree',
    loadChildren: () => import('./views/skill-tree/skill-tree.module').then(m => m.SkillTreeModule),
    resolve: {
      navbar: NavbarResolver,
    },
    data: {
      showNavbar: true,
      title: 'Skill Tree'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
