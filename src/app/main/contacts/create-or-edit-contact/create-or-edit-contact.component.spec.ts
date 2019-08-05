import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditContactComponent } from './create-or-edit-contact.component';

describe('CreateOrEditContactComponent', () => {
  let component: CreateOrEditContactComponent;
  let fixture: ComponentFixture<CreateOrEditContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
