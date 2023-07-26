import { Injectable } from '@angular/core';
import { IElement } from '../models/ielement';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  collectionRef = this.fireStore.collection('NetflixDB');

  constructor(private fireStore: AngularFirestore) {}

  addElementFire(element: IElement) {
    return new Promise<any>((resolve, reject) => {
      this.collectionRef.add(element).then(
        (response) => {
          console.log(response);
        },
        (error) => reject(error)
      );
    });
  }

  getElementsListFire() {
    return this.collectionRef.snapshotChanges();
  }

  getElementByIdFire(id: string): Observable<IElement> {
    return this.collectionRef
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

  updateElementFire(element: IElement, id: string): Promise<void> {
    return this.collectionRef.doc(id).update(element);
  }

  deleteElementFire(id: string) {
    return this.collectionRef.doc(id).delete();
  }
}
