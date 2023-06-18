import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'trex-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  windowHeight!: number;
  windowWidth!: number;

  toggleMenu(): void {
    if (this.windowWidth < 1000) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  constructor() {
    this.updateWindowDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateWindowDimensions();
  }

  updateWindowDimensions(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
}
