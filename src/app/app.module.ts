import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';


import { FormsModule } from "@angular/forms";
import { ResumeComponent } from './resume/resume.component';
import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { OneCoacheComponent } from './one-coache/one-coache.component';
import { MotivationLetterComponent } from './motivation-letter/motivation-letter.component';
import { NotificationComponent } from './notification/notification.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { TestingComponent } from './testing/testing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {
//   MatButtonModule,
//   MatIconModule,
//   MatListModule,
//   MatSidenavModule,
//   MatToolbarModule
// } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {HomeComponent} from './home/home.component'
import {MatBadgeModule} from '@angular/material/badge'
import { from } from "rxjs";
import html2pdf from "html2pdf.js"
import { CoverLetterGeneratorComponent } from './cover-letter-generator/cover-letter-generator.component';

@NgModule({
  declarations: [HomeComponent,AppComponent,TestingComponent, ResumeComponent, CoachesListComponent, OneCoacheComponent, MotivationLetterComponent, NotificationComponent, NavbarUserComponent, TestingComponent, CoverLetterGeneratorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,MatBadgeModule,
    FlexLayoutModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
