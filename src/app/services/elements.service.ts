import { Injectable } from '@angular/core';
import { IElement } from '../models/ielement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  constructor(private _http: HttpClient, private fireStore: AngularFirestore) {}

  // getElementListFire() {
  //   return this.fireStore.collection('NetflixClone').snapshotChanges();
  // }
  getElementListFire() {
    return this.fireStore
      .collection('NetflixClone')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as IElement;
            return { ...data };
          })
        )
      );
  }

  addElement(data: any): Observable<any> {
    return this._http.post<IElement>('http://localhost:3000/elements', data);
  }

  getElements(): Observable<any> {
    return this._http.get<IElement>('http://localhost:3000/elements');
  }

  getElementById(id: number): Observable<IElement> {
    return this.getElements().pipe(
      map((elements) => elements.find((element: IElement) => element.id === id))
    );
  }

  editElement(element: IElement): Observable<IElement> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.put<IElement>(
      `http://localhost:3000/elements/${element.id}`,
      JSON.stringify(element),
      httpOptions
    );
  }

  deleteElement(id: number): Observable<IElement> {
    return this._http.delete<IElement>(`http://localhost:3000/elements/${id}`);
  }
}
