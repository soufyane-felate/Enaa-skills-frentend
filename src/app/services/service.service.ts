import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../auth/User';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private registerLink = '';
  private loginLink = '';
  private userSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User | null>(
      this.getUserFromLocalStorage()
    );
    this.currentUser = this.userSubject.asObservable();
  }
  register(credential: any): Observable<User> {
    return this.http.post<User>(this.registerLink, credential);
  }
  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.loginLink, credentials).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('AuthService: Login response user:', response.user);
          if (response.user) {
            localStorage.setItem('user', JSON.stringify(response.user));
            this.userSubject.next(response.user);
          } else {
            localStorage.removeItem('user');
            this.userSubject.next(null);
          }
        }
      })
    );
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private getUserFromLocalStorage(): User | null {
    try {
      const storedUser = localStorage.getItem('user');
      console.log('AuthService: Stored user from localStorage:', storedUser);
      if (storedUser && storedUser !== 'undefined' && storedUser !== 'null') {
        return JSON.parse(storedUser);
      }
    } catch (error) {
      console.error(
        'AuthService: Error parsing stored user data from localStorage:',
        error
      );
      localStorage.removeItem('user');
    }
    return null;
  }

  getUser(): User | null {
    return this.getUserFromLocalStorage();
  }
}
