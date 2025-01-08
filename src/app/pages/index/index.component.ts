import { Component } from '@angular/core';

interface HomeContent {
  subtitle: string;
  description: string;
  textButton: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  config: HomeContent = {
    subtitle: "Досягай своїх цілей",
    description:
      "Приєднуйся до нашого сучасного фітнес-центру, щоб покращити своє здоров'я та самопочуття. Незалежно від вашого рівня підготовки, у нас є все для вашого успіху.",
    textButton: "ТВІЙ СТАРТ"
  }
}
