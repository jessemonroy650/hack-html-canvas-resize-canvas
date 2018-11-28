# hack-html-canvas-resize-canvas
Test the difference drawing an image with a different size and using scale()



https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images

**NOTE:** If you try to call drawImage() before the image has finished loading, it won't do anything (or, in older browsers, may even throw an exception). So you need to make sure the images is loaded. Some solutions suggest using 

```
img.addEventListener('load', function() {
```

I used `timeout()`.

