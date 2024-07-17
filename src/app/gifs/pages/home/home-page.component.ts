import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
	selector: 'gifs-homepage-home',
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export class HomePageComponent {
	constructor(private gifsService: GifsService) {}

	get getGifs(): Gif[] {
		return this.gifsService.gifList;
	}
}
