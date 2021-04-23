import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode");
});
  }
  signUp(n, p, rp) {
    if (p === rp) {
      var obj = {
        name: n,
        password: p,
      };
      this.http
        .post(`${environment.URL}/api/admin`, obj, {
          responseType: "text",
        })
        .subscribe((data) => {
          alert("welcom");
        });
    } else {
      alert("wrong password");
    }

    console.log(obj);
  }
  signIn(password) {
    console.log(environment.URL)
    this.http
      .post(`http://localhost:3000/api/user/${password}`, {
        responseType: "text",
      })
      .subscribe((data) => {
        if (data) {
          var d = data["_id"];
          localStorage.setItem("id", d);
          this.router.navigateByUrl("/resume");
        } else {
          alert("wrong passwor");
        }
      });
  }

}
