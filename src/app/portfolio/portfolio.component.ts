import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
_.padStart("Hello TypeScript!", 20, " ");

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private route: ActivatedRoute) { }

}
