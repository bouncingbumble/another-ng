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

  constructor(){
    setTimeout(()=>{
      this.d = false;
    }, 2000);
  }

  setMouseStatusHover(){
    return this.hovering = "you are hovering over the button. the text is " + this.text;
  }

  setMouseStatusNoHover(){
    return this.hovering = "you are no longer hovering over the button.";
  }

}
