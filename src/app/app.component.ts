import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService],
})
export class AppComponent {
  accounts: { name: string; status: string }[] = this.accountService.accounts;

  constructor(private accountService: AccountService) {}

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accountService.addAccount(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accountService.changeStatus(updateInfo);
  }
}
