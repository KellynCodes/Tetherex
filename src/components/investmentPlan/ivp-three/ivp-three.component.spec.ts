import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvpThreeComponent } from './ivp-three.component';

describe('IvpThreeComponent', () => {
  let component: IvpThreeComponent;
  let fixture: ComponentFixture<IvpThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvpThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
