import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string  = "Álisson";
  age: number = 34;
  job = "programador";
  hobbies = ['correr', 'estudar', 'jogar'];
  car = {
    name: 'Polo',
    year: 2019,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
