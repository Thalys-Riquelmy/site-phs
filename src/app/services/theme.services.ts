import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(true);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    // Verifica preferência salva ou usa dark mode como padrão
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    this.setDarkMode(isDark);
  }

  setDarkMode(isDark: boolean) {
    if (isDark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
    this.isDarkModeSubject.next(isDark);
  }

  toggleTheme() {
    const current = this.isDarkModeSubject.value;
    this.setDarkMode(!current);
  }
}
