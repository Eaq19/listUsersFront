import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listCourse: string[] = ['TypeScript', 'Java', 'Angular'];
  btnDisplay: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
