import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvpOneComponent } from './ivp-one.component';

describe('IvpOneComponent', () => {
  let component: IvpOneComponent;
  let fixture: ComponentFixture<IvpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
