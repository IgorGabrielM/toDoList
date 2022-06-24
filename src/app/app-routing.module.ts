import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'auth-register',
    loadChildren: () => import('./pages/auth-register/auth-register.module').then( m => m.AuthRegisterPageModule)
  },
  {
    path: 'auth-login',
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( m => m.AuthLoginPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
