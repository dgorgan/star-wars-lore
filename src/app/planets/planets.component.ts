import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet'
import { PlanetsService } from '../planets.service';
import { Subscription } from 'rxjs/Subscription';

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
          console.log("Planets: ", this.planets);
        });
  }

  onSelect(planet) {
    console.log("Selected Planet", this.planets[planet]);
  }
}
