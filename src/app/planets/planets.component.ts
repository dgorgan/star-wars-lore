import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Planet } from '../planet'
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})

export class PlanetsComponent implements OnInit {

  planets: any[];

  constructor(private planetsService: PlanetsService) {

  }

  ngOnInit() {
    this.planetsService.getPlanets()
        .subscribe(data => {
          this.planets = data;
          console.table(this.planets);
        });
  }

  onSelect(planet) {
    console.log("Selected Planet", this.planets[planet]);
  }
}
