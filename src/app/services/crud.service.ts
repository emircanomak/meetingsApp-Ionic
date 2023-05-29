import { Injectable } from '@angular/core';
import { IAddMeetingModel } from '../models/addMeetingModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreateMeetingModel } from '../models/createMeetingModel';
import { IUpdateMeetingModel } from '../models/updateMeetingModel';

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
  getMeetingById(id:number): Observable<ICreateMeetingModel> {
    return this.httpClient.get<ICreateMeetingModel>(this.apiUrl + '/' + id)
  }
  meetingUpdate(id:number, data:IUpdateMeetingModel): Observable<IUpdateMeetingModel>{
    return this.httpClient.put<IUpdateMeetingModel>(this.apiUrl + "/" + id, data)
  }
  deleteMeeting(data:ICreateMeetingModel):Observable<ICreateMeetingModel>{
    return this.httpClient.delete<ICreateMeetingModel>(this.apiUrl + '/' + data.id)
  }
  
}
