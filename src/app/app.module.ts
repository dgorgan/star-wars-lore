import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlanetsService } from './planets.service';
import { PlanetsComponent } from './planets/planets.component';

const appRoutes: Routes = [
  // { path: 'planet/:name',      component: PlanetDetailComponent },
  {
    path: 'planets',
    component: PlanetsComponent,
    data: { title: 'Planets List' }
  },
  { path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
