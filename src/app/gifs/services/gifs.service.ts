import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class GifsService {
	private _tagHistory: string[] = [];
	private gifsApiKey: string = environment.GIFS_API_KEY;

	constructor() {}

	get getTagHistory(): string[] {
		return [...this._tagHistory];
	}

	private organizeHistory(tag: string) {
		tag = tag.toLowerCase();
		if (this._tagHistory.includes(tag)) {
			this._tagHistory = this._tagHistory.filter(
				(oldTag) => oldTag !== tag
			);
		}

		this._tagHistory.unshift(tag);
		this._tagHistory = this._tagHistory.splice(0, 10);
	}

	searchTag(tag: string): void {
		if (tag.length === 0) return;
		this.organizeHistory(tag);
	}
}
