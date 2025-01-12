import { Component, HostBinding, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // @HostBinding('class') themeClass = 'dark-theme';
  // toggleTheme(): void {
  //   debugger;
  //   console.log("Theme toggled");
  //   this.themeClass = this.themeClass === 'dark-theme' ? 'light-theme' : 'dark-theme';
  // }
  isDarkTheme: boolean = true;

  constructor(private renderer: Renderer2) {}

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
