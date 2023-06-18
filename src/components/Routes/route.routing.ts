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
import { MissionVisionComponent } from '../mission-vision/mission-vision.component';
import { InvestorsComponent } from '../investors/investors.component';
import { AffiliateComponent } from '../../app/pages/affiliate/affiliate.component';
import { TermOfServiceComponent } from 'src/components/term-of-service/term-of-service.component';
import { IvpThreeComponent } from '../investmentPlan/ivp-three/ivp-three.component';
import { IvpTwoComponent } from '../investmentPlan/ivp-two/ivp-two.component';
import { IvpOneComponent } from '../investmentPlan/ivp-one/ivp-one.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

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

  {
    path: 'investment-plan',
    children: [
      { path: 'ivp-one', component: IvpOneComponent },
      { path: 'ivp-two', component: IvpTwoComponent },
      { path: 'ivp-three', component: IvpThreeComponent },
    ],
  },

  { path: 'blog', component: BlogComponent },
  { path: 'blog-details/:blog-id', component: BlogDetailComponent },
  { path: 'investors', component: InvestorsComponent },
  { path: 'mission-vision', component: MissionVisionComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'affiliate', component: AffiliateComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'term-of-service', component: TermOfServiceComponent },
  { path: 'pageNotFound', component: NotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];
