import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogInViewRoutingModule } from './log-in-view-routing.module';
import { LogInViewComponent } from './log-in-view.component';
import { IgxCoreModule } from 'src/app/shared/igx-core.module';

@NgModule({
  declarations: [
    LogInViewComponent
  ],
  imports: [
    CommonModule,
    LogInViewRoutingModule,
    IgxCoreModule,
    FormsModule
  ],
})
export class LoginViewViewModule { }
