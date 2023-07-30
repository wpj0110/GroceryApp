import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutItemRowComponent } from './checkout-item-row.component';

describe('CheckoutItemRowComponent', () => {
  let component: CheckoutItemRowComponent;
  let fixture: ComponentFixture<CheckoutItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutItemRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
