import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-box',
  templateUrl: './hello-box.component.html',
  styleUrls: ['./hello-box.component.css']
})
export class HelloBoxComponent implements OnInit {

  name = 'Hello';
  message = '';
  sayHello(){
    this.message ='Hello ' + this.name;
  }
  constructor() { }

  ngOnInit() {
  }

}
