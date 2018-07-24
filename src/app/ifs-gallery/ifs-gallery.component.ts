import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Gallery, ImageItem, GalleryItem, ThumbnailPosition, GalleryConfig } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-ifs-gallery',
  templateUrl: './ifs-gallery.component.html',
  styleUrls: ['./ifs-gallery.component.css']
})
export class IfsGalleryComponent implements OnInit {

  items: GalleryItem[];

  imageData = data;

  imageIndex = 1;

  galleryId = 1;

  masonryImages;


  readonly media$: Observable<GalleryConfig>;

  constructor(public gallery: Gallery, public lightbox: Lightbox, media: ObservableMedia) {
    this.media$ = media.asObservable().pipe(
      map((res:MediaChange) => {
        if (res.mqAlias ==='sm' || res.mqAlias === 'xs') {
          return {
            thumbPosition: ThumbnailPosition.Bottom,
            thumbWidth: 50,
            thumbHeight: 50,
            counter: false,
            loop: true,
            fluid: true,
            gestures: true
          };
        }
        return {
          thumbPosition: ThumbnailPosition.Left,
          counter: false,
          loop: true,
          fluid: true,
          gestures: true
        };
      })
    );
  }
  
  public masonryOptions: NgxMasonryOptions = {
		transitionDuration: '0.2s',
		resize: true,
		initLayout: true,
    gutter: 10,
    percentPosition: true
  };

 config: GalleryConfig = {
    thumbPosition: ThumbnailPosition.Bottom,
    counter: false,
    loop: true,
    gestures: true,
    thumbHeight: 60,
    thumbWidth: 80
  };
  


  ngOnInit() {

    this.items = this.imageData.map(item => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
    
    this.gallery.ref('lightbox', this.config).load(this.items);

  }

}
const data =   [
  {
    srcUrl: '../../assets/ServicesGallery/1.jpeg',      
    previewUrl: '../../assets/ServicesGallery/1.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/2.jpeg',      
    previewUrl: '../../assets/ServicesGallery/2.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/3.jpeg',      
    previewUrl: '../../assets/ServicesGallery/3.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/4.jpeg',      
    previewUrl: '../../assets/ServicesGallery/4.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/5.jpeg',      
    previewUrl: '../../assets/ServicesGallery/5.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/6.jpeg',      
    previewUrl: '../../assets/ServicesGallery/6.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/7.jpeg',      
    previewUrl: '../../assets/ServicesGallery/7.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/8.jpeg',       
    previewUrl: '../../assets/ServicesGallery/8.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/9.jpeg',      
    previewUrl: '../../assets/ServicesGallery/9.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/10.jpeg',
    previewUrl: '../../assets/ServicesGallery/10.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/11.jpeg',
    previewUrl: '../../assets/ServicesGallery/11.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/12.jpeg',      
    previewUrl: '../../assets/ServicesGallery/12.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/13.jpeg',      
    previewUrl: '../../assets/ServicesGallery/13.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/14.jpeg',      
    previewUrl: '../../assets/ServicesGallery/14.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/15.jpeg',      
    previewUrl: '../../assets/ServicesGallery/15.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/16.jpeg',      
    previewUrl: '../../assets/ServicesGallery/16.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/17.jpeg',      
    previewUrl: '../../assets/ServicesGallery/17.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/18.jpeg',      
    previewUrl: '../../assets/ServicesGallery/18.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/19.jpeg',       
    previewUrl: '../../assets/ServicesGallery/19.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/20.jpeg',      
    previewUrl: '../../assets/ServicesGallery/20.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/21.jpeg',
    previewUrl: '../../assets/ServicesGallery/21.jpeg'
  },
  {
    srcUrl: '../../assets/ServicesGallery/22.jpeg',      
    previewUrl: '../../assets/ServicesGallery/22.jpeg'
  },      
  {
    srcUrl: '../../assets/ServicesGallery/23.jpeg',
    previewUrl: '../../assets/ServicesGallery/23.jpeg'
  }
];

