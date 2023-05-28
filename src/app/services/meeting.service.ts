import { Injectable } from '@angular/core';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  
  apiUrl= 'http://localhost:3000/meeting';
  meetings: ICreateMeetingModel[] = [];

  constructor(private httpClient:HttpClient) { }

  getMeeting(): Observable<ICreateMeetingModel[]>{
    return this.httpClient.get<ICreateMeetingModel[]>(this.apiUrl);
  }
 
}
