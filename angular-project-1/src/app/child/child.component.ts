import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit,OnDestroy{
  @Input()
  msg!: string;
 @Input() Name='';
  constructor() {
    console.log("child constructor is called");
   }
  ngOnInit() {
    console.log("child ngOnInit is called");
  console.log(this.msg);
  }

  ngOnDestroy(){
    console.log("child OnDestroy is called");
  }

  @Output() otpFromChild : EventEmitter<string> = new EventEmitter();
  name!: string;

  sendDataToParent() {
    this.otpFromChild.emit(this.name);
    }

}


