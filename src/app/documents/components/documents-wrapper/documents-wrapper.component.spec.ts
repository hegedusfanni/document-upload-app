import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsWrapperComponent } from './documents-wrapper.component';

describe('DocumentsWrapperComponent', () => {
  let component: DocumentsWrapperComponent;
  let fixture: ComponentFixture<DocumentsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
