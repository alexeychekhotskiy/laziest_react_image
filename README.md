[link to the npm registry](https://www.npmjs.com/package/laziest-react-image)

React Component to lazy load images. The package uses "lazy" attribute of an img element to optimize loading when an image is in the viewport or close to it. Put a src of the image placeholder and the image itself to make the widget work. The Low-res placeholder can be generated on https://blurha.sh/

## Installation

```bash
# Yarn
$ yarn add laziest-react-image

# NPM
$ npm i laziest-react-image
```

## Usage

```javascript
import React from "react";
import { LazyImage } from "react-laziest-image";
import image from "/image.png";
import placeholder from "/placeholder.png";

const ExampleComponent = () => (
    <LazyImage placeholder={placeholder} img={image} alt="alt attribute" />
);
```
