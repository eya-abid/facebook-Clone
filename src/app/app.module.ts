import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        FormsModule,
        MatDialogModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
