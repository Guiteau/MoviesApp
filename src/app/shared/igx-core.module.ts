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
    IgxDisplayDensityModule,
    IgxDialogModule,
	  IgxComboModule,
	  IgxSimpleComboModule,
    IgxNavbarModule
,
    
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
    IgxDisplayDensityModule,
    IgxDialogModule,
    IgxComboModule,
    IgxSimpleComboModule,
    IgxNavbarModule
  ],
  imports: [
    RouterModule
  ]
})
export class IgxCoreModule { }
