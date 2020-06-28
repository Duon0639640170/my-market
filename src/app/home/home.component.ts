import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  proJect = 'Market';
  nameTh1 = 'จอย';
  nameTh2 = 'ฮิป';
  constructor() { }

  ngOnInit(): void {
  }

}
