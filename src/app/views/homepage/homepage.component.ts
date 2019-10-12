import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  cities = ['Chennai'];
  areas = ['Thoraipakkam', 'Velachery'];
  constructor() {}

  ngOnInit() {}
}
