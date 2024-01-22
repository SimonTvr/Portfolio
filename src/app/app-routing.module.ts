import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { EducationComponent } from './Pages/education/education.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
