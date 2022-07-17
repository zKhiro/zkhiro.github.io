import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesModel } from '@models/route.model';
import { FooterResolver, NavbarResolver } from '@resolvers';


const routes: RoutesModel = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    resolve: {
      footer: FooterResolver,
      navbar: NavbarResolver,
    },
    data: {
      footer: {
        containerClass: 'container',
      },
      navbar: {
        showNavbar: false,
      }
    },
  },
  {
    path: 'skill-tree',
    loadChildren: () => import('./views/skill-tree/skill-tree.module').then(m => m.SkillTreeModule),
    resolve: {
      footer: FooterResolver,
      navbar: NavbarResolver,
    },
    data: {
      footer: {
        containerClass: 'container-fluid',
      },
      navbar: {
        showNavbar: true,
        title:      'Skill Tree',
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
