import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFontAwesomeModule } from 'angular-font-awesome/dist/angular-font-awesome';
// import { ngChart } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountBasicDetailsCardsComponent } from './account-basic-details-cards/account-basic-details-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountBasicDetailsCardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
