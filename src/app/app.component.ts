import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`, // ✅ Required
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce_Project';
}
