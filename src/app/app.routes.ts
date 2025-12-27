import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LocationCardComponent } from './components/location-card/location-card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'location', component: LocationCardComponent },
];
