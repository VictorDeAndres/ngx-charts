import { storiesOf, moduleMetadata } from '@storybook/angular';

import { DoughnutGraphComponent } from '../../projects/doughnut-graph/src/lib/doughnut-graph.component';
import './style.css';

export const DoughnutData = {
  values: [32, 24, 21, 46],
  colors: ['red', 'blue', 'yellow', 'green'],
  padding: true
};

export const DoughnutDataRandomColors = {
  values: [32, 24, 21, 46],
  colors: ['red']
};

export const DoughnutDataInternalLabel = {
  values: [32, 24, 21, 46],
  colors: ['#F2CB05', '#426AF4', '#BF1797', '#ABBF17'],
  labels: {
    position: 'internal',
    titles: ['A', 'B', 'C', 'D']
  }
};

export const DoughnutDataExternalLabel = {
  values: [32, 24, 21, 46],
  colors: ['#F2CB05', '#426AF4', '#BF1797', '#ABBF17'],
  labels: {
    position: 'external',
    titles: ['Alfa', 'Bravo', 'Charlie', 'Delta']
  }
};

storiesOf('Circular Graphs/Doughnut', module)
  .addDecorator(
    moduleMetadata({
      declarations: [DoughnutGraphComponent],
    }),
  )

  .add('default', () => {
    return {
      template: `<ngl-doughnut
        style="width: 300px; height: 200px; display: block;"
        [graphData]="DoughnutData"></ngl-doughnut>`,
      props: {
        DoughnutData
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  })

  .add('random colors', () => {
    return {
      template: `<ngl-doughnut
        style="width: 300px; height: 200px; display: block;"
        [graphData]="DoughnutDataRandomColors"></ngl-doughnut>`,
      props: {
        DoughnutDataRandomColors
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  })

  .add('internal label', () => {
    return {
      template: `<ngl-doughnut
        style="width: 300px; height: 200px; display: block;"
        [graphData]="DoughnutDataInternalLabel"></ngl-doughnut>`,
      props: {
        DoughnutDataInternalLabel
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  })

  .add('external label', () => {
    return {
      template: `<ngl-doughnut
        style="width: 300px; height: 200px; display: block;"
        [graphData]="DoughnutDataExternalLabel"></ngl-doughnut>`,
      props: {
        DoughnutDataExternalLabel
      },
    };
  }, {
    notes: {
      // markdown: readme
    }
  });


