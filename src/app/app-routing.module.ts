import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginComponent } from './components/login/login.component';
import { WiledCardComponent } from './components/wiled-card/wiled-card.component';

import { adminGuard } from './Guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: SearchBarComponent,
    title: 'home',
    canActivate: [adminGuard],
  },
  { path: 'login', component: LoginComponent, title: 'Log In' },
  { path: '**', component: WiledCardComponent, title: '404 Page Not Fond' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
