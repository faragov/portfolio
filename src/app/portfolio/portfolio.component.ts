import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import WOW from 'wow.js';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  wow: any;

  ngOnInit(): void {
    const wow = new WOW();
    wow.init();
  
  }
}
