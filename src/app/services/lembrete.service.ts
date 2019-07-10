import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembretesApiUrl}lembrete/get`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}lembrete/get/${id}`;
    return this.http.get<Lembrete>(url);
  }

  salvarLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}lembrete/post`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    if (lembrete.id == 0)
      return this.http.post<Lembrete>(`${environment.lembretesApiUrl}lembrete/post`, lembrete);
    else
      return this.http.put<Lembrete>(`${environment.lembretesApiUrl}lembrete/put/`, lembrete)
  }

  // atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
  //   const url = `${environment.lembretesApiUrl}lembrete/put/${lembrete.id}`;
  //   return this.http.put<Lembrete>(url, lembrete);
  // }

  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}lembrete/delete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}
