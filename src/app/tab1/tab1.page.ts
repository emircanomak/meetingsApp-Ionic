import { Component } from '@angular/core';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { MeetingService } from '../services/meeting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  meetings:ICreateMeetingModel[]=[];
  constructor(private meetingService:MeetingService, private activatedRoute: ActivatedRoute) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((params)=>{
      this.getMeeting();
    })
  }
  getMeeting(){
    this.meetingService.getMeeting().subscribe((data)=> (this.meetings = data))
  }


}
