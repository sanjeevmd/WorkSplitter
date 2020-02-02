import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { MaterialModule } from 'src/app/Shared/material.module';

@NgModule({
    imports: [MaterialModule ,CommonModule, AngularFontAwesomeModule,
        FlexLayoutModule.withConfig({useColumnBasisZero: false})],
    declarations: [],
})
export class GroupModule { }
