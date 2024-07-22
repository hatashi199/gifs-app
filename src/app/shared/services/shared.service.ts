import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
	constructor() {
		this.loadThemeFromStorage();
	}

	toggleThemeFromStorage(): void {
		if (!localStorage.getItem('theme')) {
			this.applyDarkMode();
		}

		const theme = localStorage.getItem('theme');

		if (theme === 'dark') {
			this.applyLightMode();
		}

		if (theme === 'light') {
			this.applyDarkMode();
		}
	}

	loadThemeFromStorage(): void {
		const theme = localStorage.getItem('theme');

		if (theme === 'dark') {
			this.applyDarkMode();
		}

		if (!theme || theme === 'light') {
			this.applyLightMode();
		}
	}

	private applyDarkMode(): void {
		const html = document.querySelector('html');
		html!.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}

	private applyLightMode(): void {
		const html = document.querySelector('html');
		html!.classList.remove('dark');

		if (html!.classList.length === 0) html!.removeAttribute('class');

		localStorage.setItem('theme', 'light');
	}

	whichTheme(): string | null {
		return localStorage.getItem('theme');
	}
}
