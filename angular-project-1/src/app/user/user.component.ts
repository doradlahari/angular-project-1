import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit, OnChanges {
  @Input('user')
  username!: string;
  @Input() name!: string;
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(element: SimpleChanges){
    console.log("ngOnchanges called");
    console.log(element);
  }
  ngOnInit(): void {
    console.log('ngOninit called');
  }
  onclick(){
    return this.name;
  }
}