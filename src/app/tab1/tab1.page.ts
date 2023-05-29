import { Component } from '@angular/core';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { MeetingService } from '../services/meeting.service';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  meetings:ICreateMeetingModel[]=[];
  constructor(private meetingService:MeetingService, private crudService:CrudService, private activatedRoute: ActivatedRoute) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((params)=>{
      this.getMeeting();
    })
  }
  getMeeting(){
    this.meetingService.getMeeting().subscribe((data)=> (this.meetings = data))
  }
  deleteMeeting(data:ICreateMeetingModel){
    this.meetings = this.meetings.filter((x)=> x !== data);
    this.crudService.deleteMeeting(data).subscribe();
  }


}
