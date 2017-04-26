import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  login(email: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
      .map((response: Response) => {
        // jesli w odpowiedzi mamy token - logowanie sie powiodlo
        let token = response.json();
        if (token) {
          // przechowuje email i JWT token w localStorage (dzieki temu po odswiezeniu bedziemy zalogowani)
          localStorage.setItem('currentUser', JSON.stringify(token));
        }
      });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
