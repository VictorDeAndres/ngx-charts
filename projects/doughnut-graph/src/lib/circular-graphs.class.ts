import * as d3 from 'd3';

import { CircularGraph } from './iCircular-graphs';
import { CircularMeasures } from '@ngx-chart/common';
export abstract class CircularGraphs {

  public circularMeasures = new CircularMeasures();

  constructor() { }

  /**
   * drawCircle
   *
   * Draw Circle
   */
  drawCircle(data: CircularGraph, graphElement ): any {

    data = this.defaultValues(data);

    const circle = d3.arc()
      .innerRadius(data.radius * 3 / 5)
      .outerRadius(data.radius)
      .startAngle(this.circularMeasures.toRadians(data.startAngle))
      .endAngle(this.circularMeasures.toRadians(data.endAngle))
      .padAngle(() => data.padding ? 0.03 : 0);

    graphElement.svgContainer
      .append('g')
        // Center of wrapper
        .attr('transform', `translate(${graphElement.width / 2}, ${graphElement.height / 2})`)
        .attr('id', data.id)
          .append('path')
          .attr('fill', data.color)
          .style('opacity', data.opacity)
          .attr('d', circle);

    return circle;
  }

  private defaultValues(data: CircularGraph) {
    data.opacity = !data.opacity ? 1 : data.opacity;
    return data;
  }
}
