import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  activeSection: string = 'hero';

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['hero','about','projects','experience','contact'];
    const scrollPos = window.scrollY + window.innerHeight / 2;
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) this.activeSection = id;
      }
    }
  }
}
