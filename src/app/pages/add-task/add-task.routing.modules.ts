import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskPage } from './add-task.page';

const routes: Routes = [
  {
    path: '',
    component: AddTaskPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTaskRoutingModules {
}
