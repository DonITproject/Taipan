import { Component } from '@angular/core';

export interface GalleryContent {
  subtitle: string;
  description: string;
  items: GalleryItem[];
}

export interface GalleryItem {
  image?: string;
  video?: string;
  name: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  config: GalleryContent = {
    subtitle: 'Тайский бокс для всех',
    description: 'Откройте для себя мир тайского бокса, где каждый найдет своё место: от детей до профессионалов.',
    items: [
      {
        image: 'assets/images/gallery/rec1280.png',
        name: 'Тренировки для детей',
        subtitle: 'От 6 до 14 лет',
        description: 'Занятия помогают развивать координацию, уверенность и дисциплину в дружеской обстановке.',
      },
      {
        image: 'assets/images/gallery/trenning-zone-1280.jpg',
        name: 'Тренировки для взрослых',
        subtitle: 'Для новичков и опытных бойцов',
        description: 'Интенсивные тренировки для улучшения физической формы и освоения техники тайского бокса.',
      },
      {
        image: 'assets/images/gallery/main-slider-9.jpg',
        name: 'Соревнования',
        subtitle: 'Международные и локальные турниры',
        description: 'Боритесь за титулы или поддерживайте своих друзей на ринге.',
      },
      {
        image: 'assets/images/gallery/1233.jpg',
        name: 'Дружеское сообщество',
        subtitle: 'Единая команда',
        description: 'Станьте частью семьи единомышленников, которые поддерживают друг друга и растут вместе.',
      },
      {
        video: 'assets/video/1.mp4',
        name: 'Жаркие тренировки',
        subtitle: 'Умение переступить через себя',
        description: 'Станьте частью семьи единомышленников, которые поддерживают друг друга и растут вместе.',
      },
    ],
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    effect: 'fade',
    autoplay:true,
    autoplaySpeed:1500
  };
}
