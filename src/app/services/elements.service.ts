import { Injectable } from '@angular/core';
import { IElement } from '../models/ielement';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  fireStoreRef = this.fireStore.collection('NetflixDB');

  constructor(private fireStore: AngularFirestore) {}

  addElementFire(element: IElement) {
    return new Promise<any>((resolve, reject) => {
      this.fireStoreRef.add(element).then(
        (response) => {
          console.log(response);
        },
        (error) => reject(error)
      );
    });
  }

  getElementsListFire() {
    return this.fireStoreRef.snapshotChanges();
  }

  getElementByIdFire(id: string): Observable<IElement> {
    return this.fireStoreRef
      .doc(id)
      .get()
      .pipe(
        map((doc) => {
          if (doc.exists) {
            return doc.data() as IElement;
          } else {
            throw new Error(`Document with ID ${id} does not exist`);
          }
        })
      );
  }

  updateElementFire(element: IElement): Promise<void> {
    return this.fireStoreRef.doc(element.id).update(element);
  }

  deleteElementFire(element: IElement) {
    return this.fireStoreRef.doc(element.id).delete();
  }
}
