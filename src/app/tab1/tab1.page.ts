import { Component } from '@angular/core';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { MeetingService } from '../services/meeting.service';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Clipboard, WriteOptions } from '@capacitor/clipboard';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  text:string="Randevu detaylarını kopyala";
  meetings:ICreateMeetingModel[]=[];
  constructor(private meetingService:MeetingService, private crudService:CrudService,private firebaseService:FirebaseService, private activatedRoute: ActivatedRoute) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((params)=>{
      this.getMeeting();
      this.getData();
    })
  }
  getMeeting(){
    this.meetingService.getMeeting().subscribe((data)=> (this.meetings = data))
  }
  deleteMeeting(data:ICreateMeetingModel){
    this.meetings = this.meetings.filter((x)=> x !== data);
    this.crudService.deleteMeeting(data).subscribe();
  }
  getMeetingsDetail(copyElement){
   return 'Randevuyu alan kişi :'+copyElement.customerName+copyElement.customerLastName+
   ' Randevu Tarihi ve Saati : '+copyElement.dateOfMeeting+' '+copyElement.timeOfMeeting+' Hizmet Türü : '+copyElement.service
    
  }
  copy(copyElement){
    
    var options:WriteOptions = {
      string:this.getMeetingsDetail(copyElement)
    }    
    Clipboard.write(options).then(()=>{
      alert("Detaylar Kopyalandı")
    })
  }
  getData(){
    this.firebaseService.getData().subscribe(res=> {
      console.log(res);
      
    })
  }

}
