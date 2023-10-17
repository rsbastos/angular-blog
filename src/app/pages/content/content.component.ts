import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
  contentTitle:string = "NEWS NEWS NEWS NEWS"
  contentDescription:string = "DESCRIPTION DIV"

  constructor() { }

  ngOnInit(): void {
  }

}
