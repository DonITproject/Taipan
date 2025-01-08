import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  features: FeatureCard[];
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  // linkText: string;
  // linkHref: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  config: Feature = {
    title: "Особливості Тренувань",
    description:
      "Ми пропонуємо сучасні методи тренувань для досягнення ваших спортивних цілей. Тайський бокс та кросфіт — це ідеальний вибір для покращення витривалості та сили.",
    features: [
      {
        icon: "mdi-boxing-glove",
        title: "Тайський Бокс",
        description:
          "Покращуйте свою техніку, витривалість та силу з нашими досвідченими тренерами з тайського боксу."
      },
      {
        icon: "mdi-dumbbell",
        title: "Кросфіт",
        description:
          "Зміцнюйте тіло та розвивайте силу за допомогою інтенсивних та ефективних тренувань кросфіт.",
      },
      {
        icon: "mdi mdi-weight-lifter",
        title: "Силові Зони",
        description:
          "Тренуйтесь з нашим професійним обладнанням для розвитку сили та нарощування м'язів.",
      }
    ],
  };
}
