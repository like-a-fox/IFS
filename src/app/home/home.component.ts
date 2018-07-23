import { Component, OnInit } from '@angular/core';
import { Expansion } from '../../../node_modules/@angular/compiler';

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

  expansion =[
    {
      title: 'More About The Company',
      pOne: 'IFS Flooring LLC serves our customers and employees with leadership, pride, and innovations.',
      pTwo: 'Under its current ownership, IFS Flooring was established in 2008. ',
      pThree: 'We are a full-service commercial flooring contractor dedicated to providing superior customer service in the Arizona marketplace!',
      colspan: 2
    },
    {
      title: 'Offered Flooring Finishes',
      pOne: 'Commercial carpeting, ceramic tile and marble;',
      pTwo: 'resilient surfaces, such as vinyl, rubber, luxury vinyl tile and cork;',
      pThree: 'and concrete coatings such as stain, seal, and epoxy.',
      colspan: 2
    }
  ];
  expansOne = this.expansion[0];
  expansTwo = this.expansion[1];
  banner = [
    {
      title: 'IFS Flooring LLC',
      subtitle: 'The Arizona Commercial Flooring Dealer',
      link: '/contact',
      colspan:2
    },
    {
      title: 'Phoenix Office',
      subtitle: '(623) 434-9025',
      link: 'tel:6234349025',
      colspan:1
    },
    {
      title: 'Tucson Office',
      subtitle: '(520) 888-2211',
      link: 'tel:5208882211',
      colspan:1
    }
  ];

 
  values = [
    {
      value: 'reliability',
      link: '/the-team',
      imgSrc: '../../assets/ValueButtons/reliablility.jpeg'
    },
    {
      value: 'workmanship',
      link: '/ifs-services',
      imgSrc: '../../assets/ValueButtons/workmanship.jpeg'
    },
    {
      value: 'experience',
      link: '/ifs-gallery',
      imgSrc: '../../assets/ValueButtons/experience.jpeg'
    }
  ];
  height: string = 'auto';
  autoPlay: boolean = true;
  autoPlayInterval: number = 4000;
  width: string = '100%';
  showArrows: boolean = false;
 
  breakpoint: number;

  valuecols:number;
  constructor() { }

  ngOnInit() {
    
    if(window.innerWidth <= 800) {
      this.breakpoint =2;
    } 
    else {
      this.breakpoint = 4;
    }

    if(window.innerWidth <=600) {
      this.valuecols = 1;
    } else {
      this.valuecols = 3;
    }

  }
  
  onResize(event) {
    if(event.target.innerWidth <= 800) {
      this.breakpoint = 2;
    }  else {
      this.breakpoint = 4;
    }

    if(event.target.innerWidth <=600) {
      this.valuecols = 1;
    } else {
      this.valuecols = 3;
    }
  }

}

