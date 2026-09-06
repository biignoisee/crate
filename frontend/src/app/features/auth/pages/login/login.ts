import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@components/card/card.component';
import { CardBodyComponent } from '@components/card/card-body/card-body.component';
import { CardHeaderComponent } from '@components/card/card-header/card-header.component';
import { CardFooterComponent } from '@components/card/card-footer/card-footer.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  readonly email = signal('');
  readonly password = signal('');

  onSubmit() {
    // wire up auth call here later
    console.log(this.email(), this.password());
  }
}
