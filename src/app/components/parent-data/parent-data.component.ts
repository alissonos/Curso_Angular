import { Component, OnInit, Input } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() user!: {email: String, role: String}

  constructor() { }

  ngOnInit(): void {
  }

}
