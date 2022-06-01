import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddTaskPage } from './add-task.page';

import { Tab3PageRoutingModule } from './add-task-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddTaskPage }]),
    Tab3PageRoutingModule,
  ],
  declarations: [AddTaskPage]
})
export class AddTaskModule {}
