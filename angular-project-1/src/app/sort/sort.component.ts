import { Component, OnInit } from '@angular/core';
import { sortService } from './sort.service';
import { Users } from '../users';
import { FilterComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class  SortComponent  implements OnInit {

  users: Users[] = [];
  firstName: any;
  p: number = 1;


  constructor(public rs: sortService) {

   }

  ngOnInit() {
    this.rs.getUsers().subscribe((response: Users[]) =>{
      this.users = response;
    })
  }
  Search() {
    if (this.firstName == ""){
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res =>{
        return res.firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  key:String = 'id';
  reverse!: boolean; Boolean = false;

  sort(_key: any) {
    this.key = this.key;
    this.reverse = !this.reverse;
  }



  }
  