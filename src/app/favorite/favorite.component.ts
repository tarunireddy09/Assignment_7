import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(item: any) {
    this.favoritesService.removeFromFavorites(item);
    this.favorites = this.favoritesService.getFavorites();
  }
}
