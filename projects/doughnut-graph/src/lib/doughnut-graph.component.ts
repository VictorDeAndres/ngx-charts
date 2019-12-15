import { Component, ElementRef } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';
import { WrapperComponentD3, CircularMeasures } from '@ngx-chart/common';
import { DoughnutGraph } from './doughnut.class';

@Component({
  selector: 'ngl-doughnut',
  template: ``,
  styles: [],
  providers: [
    CircularMeasures
  ]
})
export class DoughnutGraphComponent extends DoughnutGraph implements OnChanges  {

  currentElementId: string;

  constructor(
    public elementRef: ElementRef,
    public circularMeasures: CircularMeasures
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {

    // Remove previous graphs
    if ( changes.graphData.previousValue ) {
      d3.select(`#svg-${this.currentElementId}`).remove();
    }

    this.graphElement = new WrapperComponentD3(this.elementRef);
    this.currentElementId = this.graphElement.uid;

    this.minSize = this.circularMeasures.calcRadius(this.graphElement.width, this.graphElement.height);
    // If graph has labels and the position of if are extenal reduce radius in 25 points.
    this.minSize = this.graphData.labels && this.graphData.labels.position === 'external'
      ? this.minSize - 25
      : this.minSize;
    this.segmentsDegree = this.scaleData(this.graphData.values).map( value => this.circularMeasures.arcValue(value) );


    this.graphData.colors = this.checkGraphDataColors();

    this.segmentsDegree.map( (arc, idx) => {
      const startAngle = idx === 0
        ? 0
        : this.segmentsDegree.slice(0, idx).reduce( (curr, prev) => curr + prev);
      const endAngle = idx === this.segmentsDegree.length
        ? 360
        : this.segmentsDegree.slice(0, idx + 1).reduce( (curr, prev) => curr + prev);

      this.drawSegment(startAngle , endAngle, idx);
    });
  }

}
