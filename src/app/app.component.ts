import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();
  activeSection: string = 'hero';

  ngAfterViewInit(): void {
    this.initParticles();
    this.onScroll();
  }

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

  initParticles() {
    const canvas: any = document.getElementById('pageParticles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 100; // more particles for effect

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,188,212,0.6)'; // brighter and more visible
        ctx.fill();
      });

      // draw connecting lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,188,212,${0.3 - dist/400})`; // stronger contrast
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // move particles
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
      });

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
}
