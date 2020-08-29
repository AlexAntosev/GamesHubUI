import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export abstract class BaseRepository {
  constructor(private httpClient: HttpClient) {}

  protected get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(url));
  }

  private buildUrl(url: string): string {
    return `${environment.serverURL}${url}`;
  }
}
