import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskPage } from './add-task.page';

import { AddTaskRoutingModules } from './add-task.routing.modules';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddTaskPage }]),
    AddTaskRoutingModules,
  ],
  declarations: [AddTaskPage],
  exports: [AddTaskPage],
})
export class AddTaskModule {
}
