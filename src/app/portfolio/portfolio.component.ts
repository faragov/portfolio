import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import * as WOW from 'wow.js';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    const wow = new WOW.default();
    wow.init();
  
    // Parallax effect for banner
    (() => {
      let posY: number;
      const image = document.getElementById("parallax") as HTMLElement;

      function parallax() {
        posY = window.pageYOffset;
        image.style.top = posY * 0.9 + "px";
      }

      window.addEventListener("scroll", parallax);
    })();
  }
}
