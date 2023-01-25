import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountantComponent } from './accountant/accountant.component';



@NgModule({
  declarations: [
    AccountantComponent
  ],
  exports: [
    AccountantComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountantModule { }
