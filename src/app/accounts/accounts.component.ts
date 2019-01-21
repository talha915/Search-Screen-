import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  menuItems = [
    {
      id: 1,
      name: 'Lead'
    },
    {
      id: 2,
      name: 'Opportunity'
    }
  ];
  accountsCards = [
    {
      id: 1,
      header: 'Account 1',
      content: 'Content 1',
      footer: 'Footer 1'
    },
    {
      id: 2,
      header: 'Account 2',
      content: 'Content 2',
      footer: 'Footer 2'
    },
    {
      id: 3,
      header: 'Account 3',
      content: 'Content 3',
      footer: 'Footer 3'
    },
    {
      id: 4,
      header: 'Account 4',
      content: 'Content 4',
      footer: 'Footer 4'
    },
    {
      id: 5,
      header: 'Account 5',
      content: 'Content 5',
      footer: 'Footer 5'
    },
    {
      id: 6,
      header: 'Account 6',
      content: 'Content 6',
      footer: 'Footer 6'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
