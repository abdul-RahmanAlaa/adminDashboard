import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddingModalComponent } from './components/adding-modal/adding-modal.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.development';
import { EditComponent } from './components/edit/edit.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './components/login/login.component';
import { WiledCardComponent } from './components/wiled-card/wiled-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    CardViewComponent,
    AddingModalComponent,
    EditComponent,
    LoginComponent,
    WiledCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
