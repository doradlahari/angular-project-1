
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-users', templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  userlist = ['Hari']; name = 'hari doradla';
  constructor() { }
  ngOnInit(): void { }
  onUserAdded(event: string) {
    this.userlist.push(event);
  }
  onNameChanged() {
    this.name = 'hello hari doradla';
  }
}



