import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  show = true;
  buttonClicks = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.show)
      this.show = false;
    else
      this.show = true;

    this.buttonClicks.push(Date.now());
    console.log(this.buttonClicks);
  }
}
