import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { DarklightModeComponent } from './components/darklight-mode/darklight-mode.component';

@NgModule({
	declarations: [
		SidebarComponent,
		LazyImageComponent,
		HamburgerMenuComponent,
		DarklightModeComponent
	],
	imports: [CommonModule],
	exports: [
		SidebarComponent,
		LazyImageComponent,
		HamburgerMenuComponent,
		DarklightModeComponent
	]
})
export class SharedModule {}
