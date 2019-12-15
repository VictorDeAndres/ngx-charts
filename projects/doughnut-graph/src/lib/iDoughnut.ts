interface Labels {
  position: 'internal' | 'external';
  titles: Array<string>;
}

export interface Doughnut {
  values: Array<number>;
  colors?: Array<string>;
  padding: boolean;
  labels?: Labels;
}
