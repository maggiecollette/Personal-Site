import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {AngularWidgetsComponent} from './angular-widgets/angular-widgets.component';
import {OasisProjectComponent} from './oasis-project/oasis-project.component';
import {IMEComponent} from './ime/ime.component';
import {MarbleSolitaireComponent} from './marble-solitaire/marble-solitaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    ProjectsComponent,
    AngularWidgetsComponent,
    OasisProjectComponent,
    IMEComponent,
    MarbleSolitaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
