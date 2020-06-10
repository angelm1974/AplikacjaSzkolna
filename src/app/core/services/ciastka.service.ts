import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiastkaService {
  private API_URL= '/ciastka';


  constructor(private db: AngularFireDatabase) { }

  getCiatka(): Observable<any[]> {
    return this.db.list<any>(this.API_URL).snapshotChanges()
    .pipe(map(response =>response.map(ciastka =>this.assignKey(ciastka))))
  }

private assignKey(ciastka){
  return { ...ciastka.payload.val(), key:ciastka.key}
}

}
