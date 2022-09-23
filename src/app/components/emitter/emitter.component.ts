import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;

  myNumber2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }

  onChangeNumber2() {
    this.myNumber2 = Math.floor(Math.random() * 10)
  }

}
