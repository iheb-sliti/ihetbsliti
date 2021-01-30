import { Injectable } from '@angular/core';
import { PARTICIPANTITEMS } from './participants';


@Injectable({
  providedIn: 'root'
})
export class FackeParticpantService {

  constructor() { }
  get(){return PARTICIPANTITEMS; }
  add(participantItem) {
    participantItem.id = PARTICIPANTITEMS.length + 1;
    PARTICIPANTITEMS.push(participantItem);
  }
  delete(participantItem) {
    let index;
    index = PARTICIPANTITEMS.indexOf(participantItem);
    if (PARTICIPANTITEMS.indexOf(participantItem) >= 0) {
      PARTICIPANTITEMS.splice(index, 1);
    }
  }

  getParticipant(id: number) {
    return PARTICIPANTITEMS[id - 1];
  }
}
