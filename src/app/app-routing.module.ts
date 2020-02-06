import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'gallary', loadChildren: () => import('./gallary/gallary.module').then(m => m.GallaryModule) }, 
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, 
  { path: 'locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) }, 
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
