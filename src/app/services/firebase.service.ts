import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { ICreateMeetingModel } from '../models/createMeetingModel';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  meetings: ICreateMeetingModel[] = [];
  constructor(private firestore:Firestore) { }

  getData(){
    const dataRef = collection(this.firestore, "new");
    return collectionData(dataRef)
  }

  

}
