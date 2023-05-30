import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore:Firestore) { }

  getData(){
    const dataRef = collection(this.firestore, "datas");
    return collectionData(dataRef,{idField:"data"})
  }

}
