import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnComponent } from './login-en.component';

describe('LoginEnComponent', () => {
  let component: LoginEnComponent;
  let fixture: ComponentFixture<LoginEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
