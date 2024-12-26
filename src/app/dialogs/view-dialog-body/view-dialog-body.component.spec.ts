import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDialogBodyComponent } from './view-dialog-body.component';

describe('ViewDialogBodyComponent', () => {
  let component: ViewDialogBodyComponent;
  let fixture: ComponentFixture<ViewDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
