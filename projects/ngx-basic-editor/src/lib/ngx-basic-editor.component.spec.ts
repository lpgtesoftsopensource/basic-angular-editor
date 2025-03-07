import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBasicEditorComponent } from './ngx-basic-editor.component';

describe('NgxBasicEditorComponent', () => {
  let component: NgxBasicEditorComponent;
  let fixture: ComponentFixture<NgxBasicEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBasicEditorComponent]
    });
    fixture = TestBed.createComponent(NgxBasicEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
