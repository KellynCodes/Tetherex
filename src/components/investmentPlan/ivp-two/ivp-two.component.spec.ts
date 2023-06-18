import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvpTwoComponent } from './ivp-two.component';

describe('IvpTwoComponent', () => {
  let component: IvpTwoComponent;
  let fixture: ComponentFixture<IvpTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvpTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
