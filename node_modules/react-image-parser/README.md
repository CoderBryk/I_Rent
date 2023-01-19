# React-Image-Parser
With this component you can easily parse the image.  

#### Features:
- get image data;
- get image size.

#### Install:
```bash
npm i react-image-parser
```

#### Add:

```javascript
import ImageParser from 'react-image-parser';
```

#### Use:

```javascript
<ImageParser
    img={'./path/to/image'}
    maxImgSideSize={400}
    onImageParsed={data => console.log(data)}
/>
```

#### Props:

| Name        | Type           | Required  |  Default |  Description |
|:------------|:---------------|:----------|:---------|:-------------|
| img        | String | Yes  |  null |  Path to image. For example, './my/image/path.png' |
| maxImgSideSize | Number | No  |  bigger side of image | The maximum size of the sides of the canvas on which the image will be parsed. |
| onImageParsed | Function | No  |  null | The function in which the image parsing result will be passed. |

#### Result Structure:

```
{
    data: Uint8ClampedArray(64) [255, 202, 0, 134, 205, 159...], // image data
    size: { width: 100, height: 200 } // image size
} 
```

#### Demo:

For more information and examples check the [demo page](https://vadimfedorov.ru/lab/react-image-parser/).