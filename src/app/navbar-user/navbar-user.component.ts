import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import {ResumeComponent} from '../resume/resume.component'
import {HomeComponent} from '../home/home.component'
import { TestingComponent } from '../testing/testing.component';


@Component({
  selector: "app-navbar-user",
  templateUrl: "./navbar-user.component.html",
  styleUrls: ["./navbar-user.component.css"],
})
export class NavbarUserComponent implements OnInit {
  constructor(private router: Router) {}
  UserLoggedIn :boolean = true;
  Username:any;
  content:any="home"
  ngOnInit(): void {
    if(this.UserLoggedIn)
    {
      this.Username="Samy";
    }
    else{
      this.Username="Join Us";
    }
  }
  profile() {
    this.router.navigateByUrl("/resume");
  }
  motivation() {
    this.router.navigateByUrl("/motivationLetter");
  }
  coach() {
    this.router.navigateByUrl("/coachList");
  }
  notif() {
    this.router.navigateByUrl("/notifications");
  }
  
  
}
