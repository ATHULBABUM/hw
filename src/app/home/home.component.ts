import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppService } from '../my-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,private myAppServices:MyAppService) { }

  ngOnInit() {
  }

}
