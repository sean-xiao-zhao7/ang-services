import { Injectable } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Injectable()
export class AccountService {
  accounts: { name: string; status: string }[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor(private loggingService: LoggingService) {}

  addAccount(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);

    this.loggingService.logStatusChange(
      'A server status changed, new status: ' + newAccount.status
    );
  }

  changeStatus(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;

    this.loggingService.logStatusChange(
      'A server status changed, new status: ' + updateInfo.newStatus
    );
  }
}
