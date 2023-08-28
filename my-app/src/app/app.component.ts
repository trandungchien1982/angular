import { Component } from '@angular/core';

import { HeroService } from './services/hero.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listAllHero: any = [];
  constructor(
      private heroService: HeroService,
      private logger: LoggerService
  ) {

  }

  ngOnInit() {
    this.logger.info('Init AppComponent ...');
    this.listAllHero = this.heroService.getAllHeroes();
  }

  updateListHeroes() {
    this.logger.info('updateListHeroes() ...');
    this.logger.warn(' hihi, this is a warning log ... ');
    this.listAllHero = this.heroService.getMaximumHeroes();
  }
}
