import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@components/card/card.component';
import { CardBodyComponent } from '@components/card/card-body/card-body.component';
import { CardHeaderComponent } from '@components/card/card-header/card-header.component';
import { CardFooterComponent } from '@components/card/card-footer/card-footer.component';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export default class Register {
  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');

  onSubmit() {
    console.log(this.name(), this.email(), this.password());
  }
}
