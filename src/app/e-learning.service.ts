import { Injectable } from '@angular/core';
import { ELearning } from 'src/models/elearning';

@Injectable({
  providedIn: 'root'
})
export class ELearningService {

  constructor() { }

  async load(url){
    var response = await fetch(url);
    var json = await response.json()
    return <ELearning>json;
  } 
}
