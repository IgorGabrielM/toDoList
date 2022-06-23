import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPageRoutingModule } from './auth-login-routing.module';

import { AuthLoginPage } from './auth-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPageRoutingModule
  ],
  declarations: [AuthLoginPage]
})
export class AuthLoginPageModule {}
