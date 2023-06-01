import { Component } from '@angular/core';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { MeetingService } from '../services/meeting.service';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Clipboard, WriteOptions } from '@capacitor/clipboard';
import { FirebaseService } from '../services/firebase.service';
import { TranslateConfigService } from '../services/translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  language: any;
  text:string="Randevu detaylarını kopyala";
  meetings:ICreateMeetingModel[]=[];
  public alertButtons = ['Tamam'];

  constructor(private meetingService:MeetingService, 
    private crudService:CrudService,
    private firebaseService:FirebaseService, 
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private translateConfigService: TranslateConfigService,
    public actionSheetController: ActionSheetController,)
    {    this.translateConfigService.getDefaultLanguage();
         this.language = this.translateConfigService.getCurrentLang();
    }

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
   ' Randevu Tarihi ve Saati : '+copyElement.dateOfMeeting.split('T')[0]+' '+copyElement.dateOfMeeting.split('T')[1]+' Hizmet Türü : '+copyElement.service
    
  }
  //clipboard
  copy(copyElement){
    
    var options:WriteOptions = {
      string:this.getMeetingsDetail(copyElement)
    }    
    Clipboard.write(options).then(()=>{
    })
  }
  getData(){
    this.firebaseService.getData().subscribe(res=> {
      console.log(res);
  
    })
  }

  //translate
  async changeLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Dil Seçenekleri',
      buttons: [{
        text: 'English',
        icon: 'language-outline',
        handler: () => {
          this.language = 'en';
          this.translateConfigService.setLanguage('en');
        }
      }, {
        text: 'Türkçe',
        icon: 'language-outline',
        handler: () => {
          this.language = 'tr';
          this.translateConfigService.setLanguage('tr');
        }
      }, {
        text: 'Vazgeç',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  

}
