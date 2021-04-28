import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Observable, Observer } from 'rxjs';
import html2pdf from 'html2pdf.js'
@Component({
  selector: 'app-motivation-letter',
  templateUrl: './motivation-letter.component.html',
  styleUrls: ['./motivation-letter.component.css']
})
export class MotivationLetterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getMotivationLetter()
  {
    var element = document.getElementById('coverLetter');
    html2pdf(element);
 
  }
}
