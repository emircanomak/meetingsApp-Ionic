import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUpdateMeetingModel } from '../models/updateMeetingModel';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  meetingUpdateForm:FormGroup;
  meetingUpdate:IUpdateMeetingModel;  
  constructor(private crudService:CrudService , private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute) {}

  ngOnInit():void {
    this.activatedRoute.params.subscribe((params)=>{
      this.getMeetingById(params["id"]);
    });
  }
  // update form
  createMeetingUpdateForm(){
    this.meetingUpdateForm = this.formBuilder.group({
      customerName:[this.meetingUpdate.customerName,Validators.required],
      customerLastName:[this.meetingUpdate.customerLastName,Validators.required],
      dateOfMeeting:[this.meetingUpdate.dateOfMeeting,Validators.required],
      timeOfMeeting:[this.meetingUpdate.timeOfMeeting, Validators.required],
      service:[this.meetingUpdate.service,Validators.required]
    });
  }
  getMeetingById(meetingId:number){
    this.crudService.getMeetingById(meetingId).subscribe((data)=>{
      this.meetingUpdate = data;
      this.createMeetingUpdateForm();
    });
  }
  update(): void {
    this.crudService.meetingUpdate(this.activatedRoute.snapshot.params['id'],this.meetingUpdateForm.value)
    .subscribe((data) => {});
  }
}
