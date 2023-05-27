import { Injectable } from '@angular/core';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  
  apiUrl= 'http://localhost:3000/meeting';
  meetingModel: ICreateMeetingModel[] = [];

  constructor(private httpClient:HttpClient) { }

  getMeeting(): Observable<ICreateMeetingModel[]>{
    return this.httpClient.get<ICreateMeetingModel[]>(this.apiUrl);
  }
  getMeetingId(id:number): Observable<ICreateMeetingModel> {
    return this.httpClient.get<ICreateMeetingModel>(this.apiUrl + '/' + id)
  }

  addMeeting(value:any){
    return this.httpClient.post(this.apiUrl, value);
  }
  
}
