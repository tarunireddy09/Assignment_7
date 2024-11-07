import { Component } from '@angular/core';
import { WhatonmindComponent } from '../whatonmind/whatonmind.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent,WhatonmindComponent,CommonModule,FooterComponent,RestaurantsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartVisible = false;  

  constructor(public cartService: CartService,public favoritesService: FavoritesService,private router: Router) {}
  navigateToFavorites() {
    this.router.navigate(['/favorites']);
  }

  getFavorites(): any[] {
    return this.favoritesService.getFavorites();
  }
  toggleCartVisibility() {
    this.cartVisible = !this.cartVisible;
  }
  placeOrder() {
    
    const loggedInUser = localStorage.getItem('loggedInUser'); 
    const user = loggedInUser ? JSON.parse(loggedInUser) : null;

    if (user) {
      const orderDetails = {
        items: this.cartService.getCartItems(),
        totalCost: this.cartService.getTotalCost(),
        date: new Date().toLocaleString()
      };

      const userOrdersKey = `orders_${user.id}`;
      let userOrders = JSON.parse(localStorage.getItem(userOrdersKey) || '[]');

      userOrders.push(orderDetails);

      localStorage.setItem(userOrdersKey, JSON.stringify(userOrders));

      this.cartService.clearCart();
      this.cartVisible = false;
      alert('Order placed successfully!');
    } else {
      alert('User not logged in');
    }
  }
}
