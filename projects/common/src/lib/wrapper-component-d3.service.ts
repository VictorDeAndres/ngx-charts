import { ElementRef } from '@angular/core';

import * as d3 from 'd3';

export class WrapperComponentD3 {

  private _svgContainer;
  private _uid: string;
  private _height: number;
  private _width: number;

  constructor(
    _elementRef: ElementRef
  ) {

    // Initialize private variables
    this._uid = this.generateUID();
    this._height = _elementRef.nativeElement.clientHeight;
    this._width = _elementRef.nativeElement.clientWidth;

    // Add Id to Element;
    _elementRef.nativeElement.id = this._uid;

    // Create svg container
    this._svgContainer = d3.select(`#${this._uid}`)
      .append('svg')
      .attr('id', `svg-${this._uid}`)
      .attr('height', this._height)
      .attr('width', this._width);
  }

  /**
   * svgContainer
   * return svg container
   * @returns HTMLElement
   */
  get svgContainer(): HTMLElement {
    return this._svgContainer;
  }

  /**
   * uid
   * return uid of container
   * @returns string
   */
  get uid(): string {
    return this._uid;
  }

  /**
   * height
   * return height of container
   * @returns number
   */
  get height(): number {
    return this._height;
  }

  /**
   * width
   * return width of container
   * @returns number
   */
  get width(): number {
    return this._width;
  }

  /**
   * generateUID
   * Generate new UID. The uid is make with Date.now and plus random number and then replace it to string.
   * @returns string
   */
  private generateUID(): string {
    return (Date.now() + Math.random()).toString(36).replace('.', '-');
  }
}
