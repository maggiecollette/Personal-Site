import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {AngularWidgetsComponent} from './angular-widgets/angular-widgets.component';
import {OasisProjectComponent} from './oasis-project/oasis-project.component';
import {IMEComponent} from './ime/ime.component';
import {MarbleSolitaireComponent} from './marble-solitaire/marble-solitaire.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ShellComponent } from './shell/shell.component';
import { FileSystemComponent } from './file-system/file-system.component';
import { RISCVProcessorComponent } from './risc-v-processor/risc-v-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    AngularWidgetsComponent,
    OasisProjectComponent,
    IMEComponent,
    MarbleSolitaireComponent,
    ProjectPageComponent,
    ShellComponent,
    FileSystemComponent,
    RISCVProcessorComponent
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
