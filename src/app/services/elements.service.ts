import { Injectable } from '@angular/core';
import { IElement } from '../models/ielement';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  collectionRef = this.fireStore.collection('NetflixClone');

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

  getElementsListFire(lastId?: any) {
    // let collectionRef = this.fireStore.collection('NetflixClone', (ref) => {
    //   let query = ref.orderBy('timestamp', 'desc').limit(10);

    //   if (lastId) {
    //     let lastVisible = this.collectionRef.doc(lastId);
    //     query = query.startAfter(lastVisible);
    //   }
    //   return query;
    // });

    // return collectionRef.snapshotChanges();
    return this.collectionRef.snapshotChanges();
  }

  getElementByIdFire(id: string): Observable<IElement> {
    console.log(`Document with ID ${id} `);

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
