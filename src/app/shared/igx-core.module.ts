/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Igx */
import {
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,
    IgxPaginatorModule,
    IgxForOfModule,
    IgxDisplayDensityModule
} from "igniteui-angular";

@NgModule({
  exports: [
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,
    IgxPaginatorModule,
    IgxForOfModule,
    IgxDisplayDensityModule
  ],
  imports: [
    RouterModule
  ]
})
export class IgxCoreModule { }
