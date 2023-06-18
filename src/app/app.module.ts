import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from '../components/404/404.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AppRoutingModule } from '../components/Routes/app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from '../components/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/users/dashboard/dashboard.component';
import { FaqComponent } from '../components/faq/faq.component';
import { InvestorsComponent } from '../components/investors/investors.component';
import { MissionVisionComponent } from '../components/mission-vision/mission-vision.component';
import { TermOfServiceComponent } from '../components/term-of-service/term-of-service.component';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';
import { IvpOneComponent } from 'src/components/investmentPlan/ivp-one/ivp-one.component';
import { IvpTwoComponent } from 'src/components/investmentPlan/ivp-two/ivp-two.component';
import { IvpThreeComponent } from '../components/investmentPlan/ivp-three/ivp-three.component';
import { AffiliateComponent } from './pages/affiliate/affiliate.component';
import { AffComponent } from '../components/affiliate/affiliate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    BlogComponent,
    BlogDetailComponent,
    ContactComponent,
    DashboardComponent,
    FaqComponent,
    InvestorsComponent,
    MissionVisionComponent,
    TermOfServiceComponent,
    PrivacyPolicyComponent,
    IvpOneComponent,
    IvpTwoComponent,
    IvpThreeComponent,
    AffiliateComponent,
    AffComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
