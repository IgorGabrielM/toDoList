import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../pages/calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: 'add-task',
        loadChildren: () => import('../pages/add-task/add-task.module').then(m => m.AddTaskModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('../pages/chart/chart.module').then(m => m.ChartPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
