import { SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Animal } from '../Animal';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  removendo(animals: Animal[], animal: Animal) {
    return animals.filter((qualquerCoisa) => animal.name !== qualquerCoisa.name);
  }
}
