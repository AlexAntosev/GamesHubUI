import { PagesStore } from "./pages/pages.store";
import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  pagesStore = new PagesStore();
}
