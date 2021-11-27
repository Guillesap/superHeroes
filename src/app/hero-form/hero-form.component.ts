import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Buenas Peleas', 'Buenos Villanos',
            'Efectos especiales', 'Buena dosis de drama'];

  model = new Hero(18, 'Avengers', this.powers[0], 'Hulk');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
