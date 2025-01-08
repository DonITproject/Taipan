import { Component } from '@angular/core';

interface PricingContent {
  subtitle: string;
  description: string;
  plans: PricingPlan[];
}

interface PricingPlan {
  discount?: string;
  name: string;
  price: PriceValue;
  pricingDetails: PricingDetail[];
}

interface PriceValue {
  value: string;
  currency: string;
  sub: string;
}

interface PricingDetail {
  value: string;
  available: boolean;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  config: PricingContent = {
    subtitle: "Наші ціни",
    description: "Обирайте свій план та тренуйтеся із задоволенням у нашому спортзалі! Ми пропонуємо різноманітні пакети для будь-яких потреб.",
    plans: [
      {
        name: "Базовий",
        price: {
          value: "2500",
          currency: "₴",
          sub: "місяць",
        },
        pricingDetails: [
          { value: "Доступ до всіх тренажерів", available: true },
          { value: "Немає", available: false },
          { value: "Немає", available: false },
          { value: "Немає", available: false },
          { value: "09:00 - 18:00", available: true },
        ]
      },
      {
        name: "Стандартний",
        discount: "20%",
        price: {
          value: "3200",
          currency: "₴",
          sub: "місяць",
        },
        pricingDetails: [
          { value: "Доступ до всіх тренажерів", available: true },
          { value: "3 заняття на тиждень", available: true },
          { value: "1 раз на місяць", available: true },
          { value: "Немає", available: false },
          { value: "07:00 - 22:00", available: true },
        ]
      },
      {
        name: "Преміум",
        price: {
          value: "4200",
          currency: "₴",
          sub: "місяць",
        },
        pricingDetails: [
          { value: "Доступ до всіх тренажерів", available: true },
          { value: "Необмежено", available: true },
          { value: "4 рази на місяць", available: true },
          { value: "Доступна", available: true },
          { value: "24/7", available: true },
        ]
      },
    ]
  };

  ngAfterViewInit() {
  }
}
