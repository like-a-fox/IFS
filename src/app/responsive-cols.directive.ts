import { Directive, Input, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

export interface IResponsiveColumnsMap {
  sm?: number;
  md?: number;
  lg?: number;

}

// Usage: <mat-grid-list [responsiveCols]="{xs: 2, sm: 2, md: 4, lg: 6, xl: 8}">
@Directive({
  selector: '[responsiveCols]'
})
export class ResponsiveColsDirective implements OnInit {
  private countBySize: IResponsiveColumnsMap = {sm: 1, md: 2, lg:3};

  public get cols(): IResponsiveColumnsMap {
    return this.countBySize;
  }

  @Input('responsiveCols')
  public set cols(map: IResponsiveColumnsMap) {
    if (map && ('object' === (typeof map))) {
      this.countBySize = map;
    }
  }

  public constructor(
    private grid: MatGridList,
    private media: ObservableMedia
  ) {
    this.initializeColsCount();
  }

  public ngOnInit(): void {
    this.initializeColsCount();

    this.media.asObservable()
      .subscribe((changes: MediaChange) => 
        this.grid.cols = this.countBySize[changes.mqAlias]
      );
  }

  private initializeColsCount(): void {
    Object.keys(this.countBySize).some( 
      (mqAlias: string): boolean => {
        const isActive = this.media.isActive(mqAlias);

        if (isActive) {
          this.grid.cols = this.countBySize[mqAlias];
        }

        return isActive;
    });
  }
}

