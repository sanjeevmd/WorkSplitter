import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MaterialModule } from 'src/app/Shared/material.module';

@NgModule({
    imports: [HomeRoutingModule, MaterialModule ,CommonModule, AngularFontAwesomeModule,
        FlexLayoutModule.withConfig({useColumnBasisZero: false})],
    declarations: [HomeComponent],
})
export class HomeModule { }
