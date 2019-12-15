import { Input } from '@angular/core';

import * as d3 from 'd3';
import { Colors } from '@ngx-chart/common';
import { CircularGraphs } from './circular-graphs.class';

import { Doughnut } from './iDoughnut';
import { CircularGraph } from './iCircular-graphs';

export abstract class DoughnutGraph extends CircularGraphs {

  @Input() graphData: Doughnut;

  protected graphElement;
  protected minSize: number;
  protected segmentsDegree: Array<number>;

  constructor() {
    super();
  }


  /**
   * scaleData
   *
   * Convert the data values to array of values in percentage scale
   * @param data array of values
   * @returns Array
   */
  scaleData(data: Array<number>): Array<number> {
    const sumData = data.reduce( (prev, curr) => {
      return prev + curr;
    });

    const interValue = d3.scaleLinear()
      .domain([0, sumData])
      .range([0, 100]);

    return data.map( value => interValue(value));
  }



  /**
   * checkGraphDataColors
   *
   *
   * Check if the number of colors is the same in the values. If it is different, it generates a random color palette
   * @returns Doughnut['colors']
   */
  checkGraphDataColors(): Doughnut['colors'] {
    const colors = new Colors();
    return this.graphData.colors
      ? this.graphData.colors.length === this.graphData.values.length
        ? this.graphData.colors
        : [...this.graphData.colors, ...colors.generateRandomPallete(this.graphData.values.length - this.graphData.colors.length || 0 )]
      : colors.generateRandomPallete(this.graphData.values.length);
  }




  /**
   * drawSegment
   *
   * Draw circular segment
   * @param startAngle start angle of arc
   * @param endAngle end angle of arc
   * @param idx index of arc
   */
  drawSegment(startAngle: number, endAngle: number, idx: number): void {
    const currenData = {
      id: `${this.graphElement.uid}__${idx}`,
      radius: this.minSize / 2,
      startAngle,
      endAngle,
      color: this.graphData.colors[idx],
      padding: this.graphData.padding
    };

    const arc = this.drawCircle(currenData, this.graphElement);

    if ( this.graphData.labels && this.graphData.labels.position === 'internal') {
      this.appendIntLabels(`${this.graphElement.uid}__${idx}`, arc.centroid(), idx);
    }

    if ( this.graphData.labels && this.graphData.labels.position === 'external') {
      this.appendExtLabels(currenData, `${this.graphElement.uid}__${idx}`, arc.centroid(), idx);
    }
  }




  /**
   * appendExtLabels
   *
   * Append external labels
   * @param arcId arc id
   * @param centro center of arc
   * @param idx index of arc
   */
  appendIntLabels(arcId: string, centro: Array<number>, idx: number): void {

    this.graphElement.svgContainer
      .select(`#${arcId}`)
        .append('text')
        .attr('x', centro[0])
        .attr('y', centro[1])
        .attr('dy', '0.33em')
        .attr('dx', '-0.33em')
        .style('fill', 'white')
        .text(this.graphData.labels.titles[idx]);
  }




  /**
   * appendExtLabels
   *
   * Append external labels
   * @param arcId arc id
   * @param centro center of arc
   * @param idx index of arc
   */
  appendExtLabels(data: CircularGraph, arcId: string, centro: Array<number>, idx: number): void {



    /**
     * calculateExternalPos
     *
     * Calculate the position of external pos to draw diagonal line.
     * @param  dataArc data of arc
     * @returns Array
     */
    function calculateEdgePos(dataArc: CircularGraph): Array<number> {
      const edgeCircle = d3.arc()
        .innerRadius(dataArc.radius)
        .outerRadius(dataArc.radius)
        .startAngle(this.circularMeasures.toRadians(dataArc.startAngle))
        .endAngle(this.circularMeasures.toRadians(dataArc.endAngle));

      return edgeCircle.centroid();
    }

    /**
     * calculateExternalPos
     *
     * Calculate the position of external pos to draw diagonal line.
     * @param  dataArc data of arc
     * @returns Array
     */
    function calculateExternalPos(dataArc: CircularGraph): Array<number> {
      const extCircle = d3.arc()
        .innerRadius(dataArc.radius)
        .outerRadius(dataArc.radius + 20)
        .startAngle(this.circularMeasures.toRadians(dataArc.startAngle))
        .endAngle(this.circularMeasures.toRadians(dataArc.endAngle));

      return extCircle.centroid();
    }

    const edgeCentro = calculateEdgePos.call(this, data);
    const extCentro = calculateExternalPos.call(this, data);

    const paddingHorizontalLabel = extCentro[0] >= 0 ? extCentro[0] + 4 : extCentro[0] - 4;
    const paddingVerticalLabel = extCentro[1] + 4;

    // Draw line
    this.graphElement.svgContainer
      .select(`#${arcId}`)
        .append('line')
        .style('stroke', 'black')
        .style('opacity', .7)
        .attr('x1', edgeCentro[0])
        .attr('y1', edgeCentro[1])
        .attr('x2', extCentro[0])
        .attr('y2', extCentro[1]);


    this.graphElement.svgContainer
      .select(`#${arcId}`)
        .append('text')
        .attr('text-anchor', () => extCentro[0] > 0 ? 'start' : 'end')
        .attr('transform', `translate(${paddingHorizontalLabel}, ${paddingVerticalLabel})`)
        .text(this.graphData.labels.titles[idx]);
  }

}
