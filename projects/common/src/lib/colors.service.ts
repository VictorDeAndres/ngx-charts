import { ElementRef } from '@angular/core';

export class Colors {

  constructor() { }

  /**
   * generateRandomPallete
   *
   * Generate random palette of colors
   * @param length. Number of colors in generate pallete
   * @returns Array
   */
  generateRandomPallete(length: number): Array<string> {
    const letters = '0123456789ABCDEF';
    const pallete = new Array(length).fill('');
    return pallete.map( () => {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    });
  }
}
