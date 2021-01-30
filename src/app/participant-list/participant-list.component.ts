import { Component, OnInit } from '@angular/core';
import {FakesessionitemService} from '../fakesessionitem.service';
import {FackeParticpantService} from '../facke-particpant.service';
import {Participant} from '../participant';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
 participantlist: Participant[];
  constructor(private participantService: FackeParticpantService) { }

  ngOnInit(): void {
    this.participantlist = this.participantService.get();
  }
  onDelete(id: number)
  {
    this.participantService.delete(this.participantService.getParticipant(id));
  }
}
