import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  warningMsg = "This is the warning message";
  constructor() { }

  ngOnInit() {
  }

  returnString(){
    return "string";
  }

}
