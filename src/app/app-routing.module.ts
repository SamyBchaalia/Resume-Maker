import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoachesListComponent } from "./coaches-list/coaches-list.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { MotivationLetterComponent } from "./motivation-letter/motivation-letter.component";
import { NavbarUserComponent } from "./navbar-user/navbar-user.component";
import { NotificationComponent } from "./notification/notification.component";
import { ResumeComponent } from "./resume/resume.component";
import { TestingComponent } from "./testing/testing.component";

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "resume", component: ResumeComponent },
  { path: "coachList", component: CoachesListComponent },
  { path: "motivationLetter", component: MotivationLetterComponent },
  { path: "notifications", component: NotificationComponent },
  { path: "test", component: TestingComponent },
  {path:"",component:NavbarUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
