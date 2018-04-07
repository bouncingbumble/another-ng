import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  hovering = "you are not hovering over the button";
  text = "hehehe";
  d = true;
  buttonHovered = false;

  constructor(){
    this.text = Math.random() > .5 ? "boo" : "yay";
  }

  setMouseStatusHover(){
    this.buttonHovered = true;
    return this.hovering = "you are hovering over the button. the text is " + this.text;
  }

  setMouseStatusNoHover(){

    return this.hovering = "you are no longer hovering over the button.";
  }

  getColor(){
    return this.text === "boo" ? "red" : "blue";
  }

}
