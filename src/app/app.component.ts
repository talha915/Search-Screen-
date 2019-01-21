import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  message:any;

  receiveMessage($event) {
    this.message = $event.value;
    console.log("Message Got", this.message);
  }
}
