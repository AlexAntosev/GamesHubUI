import { Injectable } from '@angular/core';
import { PagesStore } from './pages/pages.store';

@Injectable()
export class Store {
  pagesStore = new PagesStore();
}
