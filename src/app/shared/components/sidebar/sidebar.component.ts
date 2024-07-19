import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
	selector: 'shared-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
	@Input()
	public sidebarActive: boolean = false;

	constructor(private gifsService: GifsService) {}

	get getTags(): string[] {
		return this.gifsService.getTagHistory;
	}

	searchTagSelected(selectedTag: string): void {
		this.gifsService.searchTag(selectedTag);
	}
}
