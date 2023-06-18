import { Component } from '@angular/core';

@Component({
  selector: 'trex-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  isMenuOpen: boolean = false;

  toggleFaq(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
