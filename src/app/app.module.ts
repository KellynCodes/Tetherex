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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
