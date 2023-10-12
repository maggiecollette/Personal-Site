import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";
import {ProjectsComponent} from "./projects/projects.component";
import {AngularWidgetsComponent} from "./angular-widgets/angular-widgets.component";
import {IMEComponent} from "./ime/ime.component";
import {OasisProjectComponent} from "./oasis-project/oasis-project.component";
import {MarbleSolitaireComponent} from "./marble-solitaire/marble-solitaire.component";
import {RISCVProcessorComponent} from "./risc-v-processor/risc-v-processor.component";
import {FileSystemComponent} from "./file-system/file-system.component";
import {ShellComponent} from "./shell/shell.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'angular-widgets', component: AngularWidgetsComponent},
  {path: 'ood-ime', component: IMEComponent},
  {path: 'oasis-project-fall2022', component: OasisProjectComponent},
  {path: 'ood-marble-solitaire', component: MarbleSolitaireComponent},
  {path:'risc-v-processor', component: RISCVProcessorComponent},
  {path:'file-system', component: FileSystemComponent},
  {path:'basic-shell', component: ShellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
