import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditTitleComponent } from './create-or-edit-title.component';

describe('CreateOrEditTitleComponent', () => {
  let component: CreateOrEditTitleComponent;
  let fixture: ComponentFixture<CreateOrEditTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
