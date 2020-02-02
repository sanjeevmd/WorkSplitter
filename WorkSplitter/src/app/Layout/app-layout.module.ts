import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MaterialModule } from '../Shared/material.module';
import { LayoutComponent } from './app-layout.component';
import { LayoutRoutingModule } from './app-layout.routing';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
    imports: [LayoutRoutingModule,MaterialModule, CommonModule, AngularFontAwesomeModule,
        FlexLayoutModule.withConfig({useColumnBasisZero: false})],
    declarations: [LayoutComponent],
})

export class LayoutModule { }
