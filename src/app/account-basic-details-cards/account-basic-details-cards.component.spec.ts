import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBasicDetailsCardsComponent } from './account-basic-details-cards.component';

describe('AccountBasicDetailsCardsComponent', () => {
  let component: AccountBasicDetailsCardsComponent;
  let fixture: ComponentFixture<AccountBasicDetailsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBasicDetailsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBasicDetailsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
