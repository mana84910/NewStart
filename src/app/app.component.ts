import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  nav: Object;

  constructor(
    public heroService: HeroService,
    private navSvc: NavService
    ) { }
  ngOnInit() {
    this.navSvc.getJSON().subscribe((data => {
      this.nav = data;
    }));
  }
}
