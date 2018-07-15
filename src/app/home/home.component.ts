import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls = [
  '../../assets/Slideshow/Dentist.jpeg',
  '../../assets/Slideshow/Hospital.jpeg',
  '../../assets/Slideshow/Lobby.jpeg'
  ];
  height: string = 'auto';
  autoPlay: boolean = true;
  autoPlayInterval: number = 4000;
  width: string = '100%';
  showArrows: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
