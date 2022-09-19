import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Artur';
  usuario = 'Álisson';

  testando = 'Marilia';

  userData = {
    email: 'artur@gmail.com',
    role: 'Admin',
  };

  title = 'Curso_angular';
}
