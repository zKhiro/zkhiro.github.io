import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '',           loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule) },
  { path: 'skill-tree', loadChildren: () => import('./view/skill-tree/skill-tree.module').then(m => m.SkillTreeModule) },

  { path: '**', redirectTo: '' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
