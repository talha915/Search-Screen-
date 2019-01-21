import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {
  filterList = [
    {
      id: 1,
      name: 'Accounts'
    },
    {
      id: 2,
      name: 'Contacts'
    }, 
    {
      id: 3,
      name: 'All'
    }
  ];

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    console.log("Changed", event);
    this.messageEvent.emit(event)
  }
}
