import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ngaftercontent-init-life-hook',
  templateUrl: './ngaftercontent-init-life-hook.component.html',
  styleUrls: ['./ngaftercontent-init-life-hook.component.sass']
})
export class NgaftercontentInitLifeHookComponent implements OnInit {

  constructor() { 
    console.log(" constructor is called");
  }
  ngAfterViewChecked(): void {
    console.log("ViewChecked called")
  }
  ngAfterViewInit(): void {
    console.log("ViewInit called")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentCheked called")
  }
  ngAfterContentInit(): void {
   console.log("AfterContentInit called")
  }
  ngDoCheck(): void {
    console.log(" DoCheck is called");
  }
  ngOnInit() {
    console.log(" ngOnInit is called");

  }

  ngOnDestroy(){
    console.log(" OnDestroy is called");
  }
ngOutput(){
  console.log(" ngOutput is called");
}

}
