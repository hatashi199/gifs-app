import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'shared-hamburger-menu',
	templateUrl: 'hamburger-menu.component.html',
	styleUrl: 'hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
	@Output() sidebarActive: EventEmitter<boolean> =
		new EventEmitter<boolean>();

	public hamburgerMenuActive: boolean = false;

	constructor() {}

	toggleHamburgerMenu(): void {
		this.hamburgerMenuActive = !this.hamburgerMenuActive;
		this.emitSidebarActive();
	}

	emitSidebarActive(): void {
		this.sidebarActive.emit(this.hamburgerMenuActive);
	}
}
