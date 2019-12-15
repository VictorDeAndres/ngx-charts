# @ngx-charts/common
Common libraries for @ngx-charts projects.

## Table of Contents

- [Installation](##Installation)
- [Libraries](##Libraries)
  - [Wrapper Component D3](###wrapper-component-d3)
  - [Colors](###colors)
  - [Circular Measueres](###circular-measures)
- [License](##License)



## Installation
Install @angular-lib as a development dependency:

```bash
npm i @ng-library/common-library --save-dependencies
```
	

## Libraries

### Wrapper Component D3 
Create a new svg element to binding angular-lib d3 components and created data visualizations.

#### Methods:
---
#### svgContainer()
---
> **Parameters:** None.
>
> **Return:** HTML Element
>
> Return created HTML Element with unique id when instance the class.

#### uid()
---
> **Parameters:** None
>
> **Return:** String. 
>
> Return a string with unique id to identificate the created element.

#### width()
---
> **Parameters:** None
>
> **Return:** Number. 
>
> Return the width of the element

#### height()
---
> **Parameters:** None
>
> **Return:** Number.
>
> Return the width of the element

##### Usage:

```javascript
...
import { WrapperComponentD3 } from '@angular-lib/common-library'; 
...
private _WrapperComponentD3:  WrapperComponentD3;

constructor(
    private elementRef: ElementRef
) { }

ngOnInit() {
    // Create D3 Container
    // Generate new svg element with the measures of elementRef.
    this._WrapperComponentD3 = new WrapperComponentD3(this.elementRef);

	// Get the uniqueId
	console.info(this._WrapperComponentD3.uid());
}
```

### Colors
Create a random palettes of colors

#### Methods:
---
#### generateRandomColor()
---
> **Parameters:** Number of colors.
>
> **Return:** HTML Element
>
> Return created HTML Element with unique id when instance the class.



### Circular Measures

Methods to calculate circular measures

#### Methods:
---
#### calcRadius()
---
> **Parameters:** 
>
> width: Width of container.
>
> height: Height of container.
>
> **Return:** number
>
> Calculate the minimum size between the height and width of the container element with this value i will calculate the radius of circle.

---
#### arcValue()
---
> **Parameters:** 
>
> value: value to represent
>
> **Return:** number
>
> Convert the pass value into a number that represent the degrees in a circle.

---
#### toRadians()
---
> **Parameters:** 
>
> degree: value of degree to convert
>
> **Return:** number
>
> Convert degrees values in radians.

## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
