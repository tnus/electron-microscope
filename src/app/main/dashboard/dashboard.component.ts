import { Component, OnInit } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'em-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private userOS = type();

  constructor() { }

  ngOnInit() {
  }

}
