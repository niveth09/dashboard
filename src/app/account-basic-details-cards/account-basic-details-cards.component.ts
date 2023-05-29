import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-account-basic-details-cards',
  templateUrl: './account-basic-details-cards.component.html',
  styleUrls: ['./account-basic-details-cards.component.scss'],
})
export class AccountBasicDetailsCardsComponent implements OnInit {
  accountBasicDetails: any;
  constructor(private apiService: ApiService) {
    this.checkBalance();
  }

  ngOnInit(): void {}
  checkBalance() {
    this.apiService.checkBalance().subscribe((res) => {
      this.accountBasicDetails = {
        balance: res.balance,
        income: res.income,
        savings: res.savings,
        expenses: res.expenses,
      };
    });
  }
}
