import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init-life-hook',
  templateUrl: './ng-after-view-init-life-hook.component.html',
  styleUrls: ['./ng-after-view-init-life-hook.component.sass']
})
export class NgAfterViewInitLifeHookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
