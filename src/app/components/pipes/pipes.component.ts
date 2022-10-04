import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText = 'TESTANDO O PIPER OPERATOR';

  today = new Date();

  numero: number = 1200;

  pi: number = 3.1415926535;

  a: number = 0.259;
  b: number = 1.3495;

  constructor() { }

  ngOnInit(): void {}

}
