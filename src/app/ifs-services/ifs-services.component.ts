import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-ifs-services',
  templateUrl: './ifs-services.component.html',
  styleUrls: ['./ifs-services.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IfsServicesComponent implements OnInit {

  suppliers = [
    { 
      company:'Daltile'
    },
    { 
      company:'American Olean'
    },
    { 
      company:'Marazzi Tile'
    },
    { 
      company:'Armstrong'
    },
    { 
      company:'Arizona Tile'
    },
    { 
      company:'Interface Carpet'
    },
    { 
      company:'Shaw Commercial'
    },
    { 
      company:'Karndean'
    },
    { 
      company:'Mohawk'
    },
    { 
      company:'Beaulieu Carpets'
    },
    { 
      company:'J&J Carpet'
    },
    { 
      company:'Johnsonite'
    },
    { 
      company:'Tandus – Centiva'
    },
    { 
      company:'Roppe'
    },
    { 
      company:'Mannington – Amtico'
    },
    { 
      company:'...just to name a  few'
    }
  ];

materials = [
  {
    type: 'Ceramic Tile'
  },
  {
    type: 'Porcelain tile '
  },
  {
    type: 'Modular Carpet '
  },
  {
    type: 'broadloom carpet'
  },
  {
    type: 'rubber flooring'
  },
  {
    type: 'luxury vinyl tile'
  },
  {
    type: 'Luxury vinyl plank'
  },
  {
    type: 'sheet vinyl'
  },
  {
    type: 'linoleum'
  },
  {
    type: 'VCT'
  },
  {
    type: 'epoxy coatings'
  },
  {
    type: 'Concrete staining'
  },
  {
    type: 'Concrete sealing'
  },
  {
    type: 'gym floors'
  }
]

  
  constructor() { }

  ngOnInit() {


  }
  
}
  

