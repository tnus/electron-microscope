import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'em-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;



  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'em-dashboard-card-graph',
  template: '<ng-content></ng-content>'
})
export class DashboardCardGraphComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}

@Component({
  selector: 'em-dashboard-card-content',
  template: '<ng-content></ng-content>'
})
export class DashboardCardContentComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}

@Component({
  selector: 'em-dashboard-card-actions',
  template: '<ng-content></ng-content>'
})
export class DashboardCardActionsComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
