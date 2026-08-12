import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Clients } from '../../sections/clients/clients';
import { Services } from '../../sections/services/services';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Programs } from '../../sections/programs/programs';
import { Newsletter } from '../../sections/newsletter/newsletter';

@Component({
  selector: 'home',
  imports: [About, Clients, Services, Testimonials, Programs, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
