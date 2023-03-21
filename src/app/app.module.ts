import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './component/logo/logo.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { RedsComponent } from './component/reds/reds.component';
import { BannerComponent } from './component/banner/banner.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EduComponent } from './component/edu/edu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgComponent } from './component/prog/prog.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './component/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interseptor-service';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './component/edu/neweducacion.component';
import { EditeducacionComponent } from './component/edu/editeducacion.component';
import { HysComponent } from './component/hys/hys.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { NewSkillComponent } from './component/hys/new-skill.component';
import { EditSobreMiComponent } from './component/sobre-mi/edit-sobre-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    EncabezadoComponent,
    RedsComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EduComponent,
    ProgComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
    }),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
