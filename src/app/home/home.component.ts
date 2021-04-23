import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
UserLoggedIn :boolean = true;
Username:any;
  ngOnInit(): void {
    if(this.UserLoggedIn)
    {
      this.Username="Samy";
    }
    else{
      this.Username="Join Us";
    }
  }
  goto() {
    this.router.navigateByUrl("/form");
  }
  cvClicked()
  {
    alert("hello");
  }
  motivationLetterClicked()
  {
    alert("hello");
  }
  consultationClicked()
  {
    alert("hello");
  }
}


