import { Component } from '@angular/core';
import {GalleryContent} from "../gallery/gallery.component";

export interface Trainers {
  subtitle: string;
  description: string;
  items: Trainer[];
}

export interface Trainer {
  name: string;
  role: string;
  image: string;
  //socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}
@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {
  config: Trainers =  {
    subtitle: "Наши тренеры",
    description: "Профессиональная команда тренеров с многолетним опытом работы в различных спортивных дисциплинах.",
    items: [
      {
        name: "Буакхау По. Прамук",
        role: "Старший тренер по тайскому боксу",
        image: "assets/images/users/2.jpeg",
      },
      {
        name: "Анна Смирнова",
        role: "Тренер по фитнесу и растяжке",
        image: "assets/images/users/img1.jpg",
      },
      {
        name: "Американский боксер",
        role: "Флойд Мейвезер",
        image: "assets/images/users/1.jpeg",
      },
    ],
  };


}
