import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormCreatorComponent } from './contact-form-creator.component';

describe('ContactFormCreatorComponent', () => {
  let component: ContactFormCreatorComponent;
  let fixture: ComponentFixture<ContactFormCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
