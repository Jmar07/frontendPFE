import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArComponent } from './login-ar.component';

describe('LoginArComponent', () => {
  let component: LoginArComponent;
  let fixture: ComponentFixture<LoginArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
