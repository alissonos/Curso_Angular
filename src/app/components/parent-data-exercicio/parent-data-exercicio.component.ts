import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data-exercicio',
  templateUrl: './parent-data-exercicio.component.html',
  styleUrls: ['./parent-data-exercicio.component.css']
})
export class ParentDataExercicioComponent implements OnInit {

  @Input() name: string ='';

  @Input() teste: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
