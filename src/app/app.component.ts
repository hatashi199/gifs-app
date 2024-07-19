import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'gifs-app';

	public sidebarActive: boolean = false;

	setSideActive(active: boolean) {
		this.sidebarActive = active;
	}
}
