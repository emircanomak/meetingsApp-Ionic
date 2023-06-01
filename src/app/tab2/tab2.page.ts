import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  alertButtons = ['OK'];
  meetingAddForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private crudService:CrudService,private activatedRoute:ActivatedRoute,) {}
  
  ngOnInit():void {
    this.createMeetingAddForm();
  }
  
  createMeetingAddForm(){
    this.meetingAddForm = this.formBuilder.group({
      customerName:["",Validators.required],
      customerLastName:["",Validators.required],
      dateOfMeeting:["",Validators.required],
      timeOfMeeting:["", Validators.required],
      service:["",Validators.required]
    })
    console.log(this.createMeetingAddForm);

  }
  addMeeting(){
    if(this.meetingAddForm.value) {
      let meetingInputDatas = Object.assign(
        {},
        this.meetingAddForm.value
      );
      this.crudService.addMeeting(meetingInputDatas).subscribe((data)=>{})


    }
  }
  

 
}
