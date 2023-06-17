import { Routes } from '@angular/router';
import { NotfoundComponent } from '../404/404.component';
import { HomeComponent } from '../../app/pages/home/home.component';
import { AboutComponent } from '../../app/pages/about/about.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { DashboardComponent } from 'src/app/pages/users/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/pages/users/profile/profile.component';
import { FaqComponent } from '../faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'users',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'pageNotFound', component: NotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];
