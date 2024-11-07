import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatonmindComponent } from './whatonmind/whatonmind.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DefaultComponent } from './default/default.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultComponent, RouterOutlet,NavbarComponent,WhatonmindComponent,CommonModule,FooterComponent,RestaurantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'swiggy';
}
