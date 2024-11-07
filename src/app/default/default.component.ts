import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FavoritesService } from '../favorites.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  showFavorites = false;  

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;  
  }
  constructor(private cartService: CartService,public favoritesService: FavoritesService) {}
  items = [
    { name: 'Mini Chicken Biryani', price: 217, quantity: 1, imageUrl: 'assets/Biryani/bpic1.avif' },
    { name: 'Mutton Biryani', price: 416, quantity: 1, imageUrl: 'assets/Biryani/bpic1.avif' }
  ];
  addItemToCart(item: any) {
    this.cartService.addToCart(item);
  }

  addItemToFavorites(item: any) {
    this.favoritesService.addToFavorites(item);
  }

}
