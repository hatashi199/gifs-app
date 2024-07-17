import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
	public gifList: Gif[] = [];
	private _tagHistory: string[] = [];
	private gifsApiKey: string = environment.GIFS_API_KEY;
	private searchGifsUrl: string = environment.SEARCH_GIFS_URL;

	constructor(private http: HttpClient) {
		this.loadLocalStorage();
	}

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
		this.saveLocalStorage();
	}

	private saveLocalStorage(): void {
		localStorage.setItem('history', JSON.stringify(this._tagHistory));
	}

	private loadLocalStorage(): void {
		if (!localStorage.getItem('history')) return;

		this._tagHistory = JSON.parse(localStorage.getItem('history')!);

		if (this._tagHistory.length === 0) return;
		this.searchTag(this._tagHistory[0]);
	}

	async searchTag(tag: string): Promise<void> {
		try {
			if (tag.length === 0) return;
			this.organizeHistory(tag);

			const params = new HttpParams()
				.set('api_key', this.gifsApiKey)
				.set('q', tag)
				.set('limit', 10);

			this.http
				.get<SearchResponse>(`${this.searchGifsUrl}`, { params })
				.subscribe((res) => {
					this.gifList = res.data;
				});
		} catch (error) {
			console.error(error);
		}
	}
}
