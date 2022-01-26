import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderResolver } from './core/resolvers/header.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule),
    data:         { showHeader: false },
    resolve:      { header: HeaderResolver },
  },
  {
    path:         'skill-tree',
    loadChildren: () => import('./view/skill-tree/skill-tree.module').then(m => m.SkillTreeModule),
    data:         { showHeader: true, title: 'Skill Tree' },
    resolve:      { header: HeaderResolver },
  },

  { path: '**', redirectTo: '' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
