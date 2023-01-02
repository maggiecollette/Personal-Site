import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ResumeComponent} from "./resume/resume.component";
import {ProjectsComponent} from "./projects/projects.component";
import {AngularWidgetsComponent} from "./angular-widgets/angular-widgets.component";
import {IMEComponent} from "./ime/ime.component";
import {OasisProjectComponent} from "./oasis-project/oasis-project.component";
import {MarbleSolitaireComponent} from "./marble-solitaire/marble-solitaire.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'angular-widgets', component: AngularWidgetsComponent },
  { path: 'ood-ime', component: IMEComponent },
  { path: 'oasis-project-fall2022', component: OasisProjectComponent },
  { path: 'ood-marble-solitaire', component: MarbleSolitaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
