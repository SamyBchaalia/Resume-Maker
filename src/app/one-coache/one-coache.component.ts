import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-one-coache",
  templateUrl: "./one-coache.component.html",
  styleUrls: ["./one-coache.component.css"],
})
export class OneCoacheComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  coache: any;
  req: any = false;
  ngOnInit(): void {
    var c = localStorage.getItem("coachId");

    this.http
      .post(`${environment.URL}/api/req/${c}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.coache = data;
      });
  }
  senReq() {
    var r = !this.req;
    this.req = r;
  }
  sendRequest(about, data) {
    var id = localStorage.getItem("id");
    var obj = {
      userId: id,
      coachId: this.coache._id,
      userName: "deffult",
      email: "deffult",
      about: about,
      data: data,
    };
    this.http
      .post(`${environment.URL}/api/sendRequest`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("sended");
        this.senReq();
      });
  }
}
