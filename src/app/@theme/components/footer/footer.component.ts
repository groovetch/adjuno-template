import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <a href="https://www.evcargo.co.uk" title="EV Cargo">
    <img class="logo" src="assets/images/evcargo-powered.png" alt="EV Cargo Logo">
  </a>
  `,
})
export class FooterComponent {
}
