import { Component, Input } from '@angular/core';
import { CardsListComponent } from './cards-list/cards-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my_media_app';
  @Input() cardsList!: CardsListComponent;
}
