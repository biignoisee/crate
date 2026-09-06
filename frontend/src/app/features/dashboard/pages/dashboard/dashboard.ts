import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class Dashboard {
  readonly points = [20, 45, 32, 60, 50, 75, 68, 90, 80, 95];

  get path(): string {
    const max = Math.max(...this.points);
    const stepX = 300 / (this.points.length - 1);
    return this.points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX},${100 - (p / max) * 90}`)
      .join(' ');
  }
}
