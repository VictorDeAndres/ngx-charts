
# @ngx-chart/doughnut

Angular library for draw doughnut charts.


## Table of Contents

- [Installation](##Installation)
- [Documentation](###Documentation)
    - [Doughnut](###Doughnt)
        - [Params](###Params)
        - [Usage](###Usage)

- [License](##License)



## Installation
Install @ngx-chart/doughnut

```bash
npm i @ngx-chart/doughnut --save
```

## Documentation

### Doughnt

![](https://ng-library-5a812.firebaseapp.com/images/Doughnut.png?raw=true) ![](https://ng-library-5a812.firebaseapp.com/images/Doughnut_external_label.png?raw=true) ![](https://ng-library-5a812.firebaseapp.com/images/Doughnut_internal_label.png?raw=true)


##### Params

param           | type          | description
----------------|---------------|----------------------------------------------------
values          | array<int>    | Array of values to represent.
colors?         | array<string> | Color of segments of doughnt. If there isn't colors are applied random colors.
padding         | boolean       | Draw padding between doughnut segments.
labels          | object        | 
labels.position | string        | Set the position of labels. Allowed values are 'internal' or 'external'.
labels.titles   | array<string> | Array of titles of labels



##### Usage:

```javascript

@ app.module.ts

...
import { DoughnutGraphModule } from '@ngx-chart/doughnut-graph';
...

@NgModule({
    ...
    imports: [
        ...
        DoughnutGraphModule
    ],
    ...
})
```
```javascript
@ file.component.ts

...
ngOnInit() {
    this.DoughnutData = {
        values: [32, 24, 21, 46],
        colors: ['red', 'blue', 'yellow', 'green']
    };
}
...
```
```javascript
@ file.html

<ngl-doughnut
    style="width: 200px; height: 100px; display: block;"
    [graphData]="DoughnutData"
></ngl-doughnut>
```


## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)