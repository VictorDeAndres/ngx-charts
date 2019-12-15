import * as d3 from 'd3';

export class CircularMeasures {

  constructor() { }

  /**
   * calcRadius
   *
   * Calculate the minimum size between the height and width of the container element
   * with this value i will calculate the radius of circle.
   *
   * @param width width of container
   * @param height width of container
   * @returns number
   */
  calcRadius(width: number, height: number): number {
    return width > height
      ? height
      : width;
  }




  /**
   * arcValue
   *
   * Calculate the arc to show.
   * Convert the pass value into a number that represent the degrees in a circle
   *
   * @param value value to represent
   * @returns number
   */
  arcValue(value: number): number {
    const interValue = d3.scaleLinear()
      .domain([0, 100])
      .range([0, 360]);

    return interValue(value);
  }




  /**
   * toRadians
   *
   * Convert degrees values in radians
   *
   * @param degree value of degree
   * @returns number
   */
  toRadians(degree: number): number {
    return degree * Math.PI / 180;
  }

}
