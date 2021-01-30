import { Component, OnInit } from '@angular/core';
import {FackeParticpantService} from '../facke-particpant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-participant-add',
  templateUrl: './participant-add.component.html',
  styleUrls: ['./participant-add.component.css']
})
export class ParticipantAddComponent implements OnInit {

  constructor(private participantService: FackeParticpantService  , private router: Router ){ }

  ngOnInit(): void {
  }
  addParticipant(participantItem) {
    console.log(participantItem);
    this.participantService.add(participantItem);
    this.router.navigate(['/admin/participant']);
  }
}
