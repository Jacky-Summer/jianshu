import { createGlobalStyle } from 'styled-components'
export const GlobalStyledIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1563961082996'); /* IE9 */
  src: url('./iconfont.eot?t=1563961082996#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAakAAsAAAAADIwAAAZVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDbAqLMIkOATYCJAMgCxIABCAFhG0HdRuNChGVpIOS/TjIyVxNcUSliGcqnC2rjq2JtpWp/sfDv2uf9yWZ/OzMAjvgEjpgDahR1q2q21NV1x5PIHxVja4wLCwNj2f+S1JxDY5CcALaze3mYkKvk9zbh9nNpSbp9oUVEAGSCcO6+eSqX171S++Z8fPHUi8tIp/dNdCdUkT+y1U0jUcJNKCooOHhdBhiE9WprCbpzMqJ+ms8TqC37KC4nJFHgqZgf2DAo/bWetBCCSWHHlq4plxaQDwHbC2tgB8B4Jn9+/EbhAQPSLoM+NRrLelN4Pzn4MtiRGlRqjIxwNkewvUqMg6iEE9T808A4rYelPXvt7HcAUxqkvoNfI597vh5xOctXxZbLITN0KmMwqQkTv+LR5UUI1kniAoQGD8RH7aN+AZ0NZVvqJrEN0xN4Zujo2wwAjEZwRYgnR13wrWjgUaXTGOF+AxAugKYdFIg7Yxdv9ugzshxEY+HCaVWMhGbSyhEYsJK6CKR9D6j5OXX4NUrEiIpaH6eUZlpOthD+bqYuWJ+DAePW67OQ2YznbLn69eUZj6xWac5qJpItp1sCRUzm6UCWkQKOoXlFXoHwVarsvqLQg0AfQiuCdRPIBXDqATqOOrUPqDcL9TchCCGaQ1kVGIXWq8FJNpEbXQzv7rxgQ1eudm2lWC2HDx72p06/9pvUmTcZ8XR7ReKNQcJrv7AmPoAbjgo1OzHtPsYEVvMahFCQjDcqleb8I4DZl/m4MNI8en73tT+V15tWuOE8RxKapVYu47oNOzAaf0FD0qm1qsMhFynU2ob1HiDXm8wYPU6nVb44xGMQWMr7mcCMcKQVIWi2kQwDURitzhtnRoPOCEd5v9p1dqrcfyMw4TlerwCV95doMb1eqL21qxDq7TSpXOvVbBmDW2EzOay2fyFzUc9mb3ntx1yI7WUGjcdsWW2XDx92IrU7iNzLAjO/OdSefl7gYPJ8LJTp5bBSbP8raTLrH//lMuVqbv+WRhabil1Kjh1lyuRVHv1JsIbbt7cgEiraTNuu/7mrQ1wYp/3a4lkk02oTfhHv18tPnp0sfAiyMGLYd9mWfG5wLWWzOdeac+bJZaGVHNHQiEFpzS0J8yz/jm7M3Q7KhBiJwf0etPt4mphblLMpzXM0ENr7B+brZ/cl8Ff0fY++KomrAKCoeUFYDrcj1NYf/HBipPZ72zpP2M3SVgJ8ZM2X2aHVuz6o2PYell+BlaQDg4/yL8H0uStpOnye/J0aZo4U/JJjyRYKmLJxWaF4tCrPQd2H90926OcrJ6c2n8R/J8p++DIGoUvlO7bP2f1PngGvuf1m3yhNN816OGn0g2MU/LWxK5TLivXKA4f1u+wEqzsN21Ndnr3Z8MZFY0WtRTRQR+x2SHcH0/0Y8dCL3vZc8aEqZrZVOGYSFSHHNjJcbpsDD02JgilbCt3nKr0qTuX4xam0Kt/8aNssGyjERVgMcUyS0gvzy1nzx4sD+3qdOETZeT+E+7rT27A9h/HoktkCCIricbeicT27MnG3o2KBPOfWO++i8xJ9O57Jst6zrLmWP6Qd+dMk7DRCBveSbLBc9r/uki2vrBUEX4/ITzkrPXu/kVqbn3GgtL4+43OmgVk/L3ahW8lyNcXki4R9+PDXe6KqgYur+E5hEy4Xxo8qUjFWYXrQSL4fz1fQ5IvWAsWyFW5HJmWX8xiJP/oc/l9JAsgv0BkSu4wM28TiFpp3G884d9w3deazL9p1H+M3SLvom6CSjsVmLPkkvJxc7KV19x0R2ll887QnNDLVSis8qz320wvaL89NAs+JCNLkDWb2EI86OveoZOAqjkHvQMyrx7MGXAlyhj2WyIgTDsKyaQvkE17jC3E96Cz6DuopuMKenfi8ZaD7fDqJRNWGuDvDF4LGy1dlTPwk2yLmINuW/ZLufgG2AUERTs+iCm3cUbpdl+rAZNlhHfxNIpRYMoSSNe1q3U6bAJb0t6w1jLOlEsygioyAA3Opmk7TTCzdqViP/+JWE2Ecs6Mb9NfJCv8zkGwAEElsB8BLjXjWIYP6qy9IUIG6OMzMQIZhEiUrQL0pR8UEK1aa6vRPDkIpJVaygbW/YfGI70NevzqFilylOiixihajCk7k2dlkO2AwZs1iydcbslrV9qR/ve8LE5a8CePF/R3l4ZcnFcXPcvIVEM8mwEAAAA=') format('woff2'),
  url('./iconfont.woff?t=1563961082996') format('woff'),
  url('./iconfont.ttf?t=1563961082996') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1563961082996#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`