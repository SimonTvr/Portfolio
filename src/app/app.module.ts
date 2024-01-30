import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ColorRectangleComponent } from './Components/color-rectangle/color-rectangle.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { EducationComponent } from './Pages/education/education.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PolaroidComponent } from './Components/polaroid/polaroid.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ExperienceComponent,
    HeaderComponent,
    FooterComponent,
    ColorRectangleComponent,
    AboutMeComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    MainPageComponent,
    PolaroidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
