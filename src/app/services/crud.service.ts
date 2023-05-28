import { Injectable } from '@angular/core';
import { IAddMeetingModel } from '../models/addMeetingModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl= 'http://localhost:3000/meeting';
  addMeetings: IAddMeetingModel[] = [];

  constructor(private httpClient:HttpClient) { }
  
  addMeeting(value:any){
    return this.httpClient.post(this.apiUrl, value);
  }
  
}
