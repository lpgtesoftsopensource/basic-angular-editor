import { NgModule } from '@angular/core';
import { NgxBasicEditorComponent } from './ngx-basic-editor.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module/material.module.module';

@NgModule({
  declarations: [
    NgxBasicEditorComponent,HtmlEditorComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,MaterialModule,
  ],
  exports: [
    NgxBasicEditorComponent,HtmlEditorComponent
  ]
})
export class NgxBasicEditorModule { }
