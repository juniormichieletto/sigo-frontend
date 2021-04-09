import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Norma } from './domain/norma.model';

@Injectable({
  providedIn: 'root'
})
export class NormaService {

  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.backendUrl}/api/v1/normas`;
  }

  findById(normaId: number): Observable<Norma> {
    return this.httpClient.get<Norma>(`${this.apiUrl}/${normaId}`);
  }

  findAll(): Observable<Array<Norma>> {
    return this.httpClient.get<Array<Norma>>(this.apiUrl);
  }

  save(norma: Norma): Observable<Norma> {
    return this.httpClient.post<Norma>(this.apiUrl, norma);
  }

  update(normaId: number, norma: Norma): Observable<Norma> {
    return this.httpClient.put<Norma>(`${this.apiUrl}/${normaId}`, norma);
  }
}
