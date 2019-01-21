import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
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
  contactsCards = [
    {
      id: 1,
      header: 'Contact 1',
      content: 'Content 1',
      footer: 'Footer 1'
    },
    {
      id: 2,
      header: 'Contact 2',
      content: 'Content 2',
      footer: 'Footer 2'
    },
    {
      id: 3,
      header: 'Contact 3',
      content: 'Content 3',
      footer: 'Footer 3'
    },
    {
      id: 4,
      header: 'Contact 4',
      content: 'Content 4',
      footer: 'Footer 4'
    },
    {
      id: 5,
      header: 'Contact 5',
      content: 'Content 5',
      footer: 'Footer 5'
    },
    {
      id: 6,
      header: 'Contact 6',
      content: 'Content 6',
      footer: 'Footer 6'
    },
    // {
    //   id: 7,
    //   header: 'Card 7',
    //   content: 'Content 7',
    //   footer: 'Footer 7'
    // },
    // {
    //   id: 8,
    //   header: 'Card 8',
    //   content: 'Content 8',
    //   footer: 'Footer 8'
    // },
    // {
    //   id: 9,
    //   header: 'Card 9',
    //   content: 'Content 9',
    //   footer: 'Footer 9'
    // },
    // {
    //   id: 10,
    //   header: 'Card 10',
    //   content: 'Content 10',
    //   footer: 'Footer 10'
    // },
  ];
  constructor() { }

  ngOnInit() {
  }

}
