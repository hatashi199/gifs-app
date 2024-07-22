import { SharedService } from './shared/services/shared.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'gifs-app';

	public sidebarActive: boolean = false;

	constructor(private sharedService: SharedService) {}

	setSideActive(active: boolean) {
		this.sidebarActive = active;
	}
}
