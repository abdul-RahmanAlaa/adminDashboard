import { Injectable } from '@angular/core';
import { IElement } from '../models/ielement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  constructor(private _http: HttpClient) {}

  addElement(data: any): Observable<any> {
    return this._http.post<IElement>('http://localhost:3000/elements', data);
  }

  getElements(): Observable<any> {
    return this._http.get<IElement>('http://localhost:3000/elements');
  }
}
