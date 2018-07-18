import { Component, OnInit } from '@angular/core';
import { setStyles } from '../../../node_modules/@angular/animations/browser/src/util';
import { elementStyle } from '../../../node_modules/@angular/core/src/render3/instructions';
import { observable } from '../../../node_modules/rxjs';
import { BreakpointObserver, BreakpointState } from '../../../node_modules/@angular/cdk/layout';

@Component({
  selector: 'app-the-team',
  templateUrl: './the-team.component.html',
  styleUrls: ['./the-team.component.css']
})
export class TheTeamComponent implements OnInit {

  team = [
    {
      member: 'Glen Musser',
      position: 'Owner - Tucson Location',
      phone: 'tel:5208882211',
      email: 'mailto:glen@azifs.com?subject=More%20Information%20About%20Services',
      image: '../../assets/TheTeam/GlenMusser.jpeg',
      bio: 'Glen brings over 30 years of sales and installation experience to the Tucson marketplace where he is well known in the commercial flooring community. His ability to manage a focused team of flooring professionals has promoted IFS to be one of the largest commercial flooring dealers in southern Arizona.'
    },
    {
      member: 'Pete Perry',
      position: 'Owner - Phoenix Location',
      phone: 'tel:6234349025',
      email: 'mailto:pete@azifs.com?subject=More%20Information%20About%20Services',
      image: '../../assets/TheTeam/PetePerry.jpeg',
      bio: 'Pete has over 30 years of commercial flooring experience in the Phoenix metro marketplace. Throughout his sales career, Pete has maintained a comprehensive network in the construction industry. His extensive knowledge of product manufacturing and his value engineering expertise offer his customers a complete package.'
    },
    {
      member: 'Wanda Houle',
      position: 'CEO - Phoenix Location',
      phone: 'tel:6234349025',
      email: 'mailto:wanda@azifs.com?subject=More%20Information%20About%20Services',
      image: '../../assets/TheTeam/WandaHoule.jpeg',
      bio: 'She has worked for various commercial flooring dealers as a senior project manager and office manager. Her widespread knowledge of the industry from construction start up to project completion is a benefit to the overall flow of the organization.'
    }
  ];
  breakpoint: number;
  constructor() { }

  ngOnInit() {
    if(window.innerWidth <= 600) {
      this.breakpoint = 1;
    } else if(window.innerWidth > 600 && window.innerWidth < 900) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }

  }
  
  onResize(event) {
    if(event.target.innerWidth <= 600) {
      this.breakpoint = 1;
    } else if(event.target.innerWidth > 600 && event.target.innerWidth < 1200) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

}
