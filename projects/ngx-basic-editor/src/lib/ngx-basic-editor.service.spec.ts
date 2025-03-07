import { TestBed } from '@angular/core/testing';

import { NgxBasicEditorService } from './ngx-basic-editor.service';

describe('NgxBasicEditorService', () => {
  let service: NgxBasicEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBasicEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
