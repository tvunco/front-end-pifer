import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './component/edu/editeducacion.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { NewSkillComponent } from './component/hys/new-skill.component';
import { NeweducacionComponent } from './component/edu/neweducacion.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditSobreMiComponent } from './component/sobre-mi/edit-sobre-mi.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: NeweducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editarsobremi/:id', component: EditSobreMiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
