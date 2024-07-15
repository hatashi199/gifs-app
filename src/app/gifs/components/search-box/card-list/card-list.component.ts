import { Component } from '@angular/core';

@Component({
	selector: 'gifs-card-list',
	templateUrl: './card-list.component.html'
})
export class CardListComponent {
	public cardList: number[] = [1, 2, 3, 4, 5];
}
