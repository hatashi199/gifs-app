import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
	selector: 'shared-darklight-mode',
	templateUrl: 'darklight-mode.component.html',
	styleUrl: 'darklight-mode.component.css'
})
export class DarklightModeComponent {
	public saveTheme: string | null = '';

	constructor(private sharedService: SharedService) {
		this.saveTheme = this.sharedService.whichTheme();
	}

	setTheme(): void {
		this.sharedService.toggleThemeFromStorage();
		this.saveTheme = this.sharedService.whichTheme();
	}
}
