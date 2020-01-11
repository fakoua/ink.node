# ink

Terminal string color for NodeJs HTML like.

## Examples

```js
const ink = require('ink.node')

let text = ink.colorize('<red>Hello World</red>')
console.log(text)
```

Output:

```diff
- Hello World
```

You can use nested style:

```js
const ink = require('ink.node')

let text = ink.colorize('<bg-blue><red>Hello World</bg-blue></red>')

console.log(text)
```

## Support tags [Simple Mode]

- &lt;b>: bold
- &lt;i>: italic
- &lt;u>: underline
- &lt;s>: strikethrough
- &lt;hidden>: hidden text
- &lt;inv>: inverted color
- &lt;dim>: dim light
- &lt;u>: underline

- &lt;red>: text red
- &lt;green>: text green
- &lt;blue>: text blue
- &lt;yellow>: text yellow
- &lt;magenta>: text magenta
- &lt;cyan>: text cyan
- &lt;white>: text white
- &lt;black>: text black

- &lt;bg-red>: background red
- &lt;bg-green>: background green
- &lt;bg-blue>: background blue
- &lt;bg-yellow>: background yellow
- &lt;bg-magenta>: background magenta
- &lt;bg-cyan>: background cyan
- &lt;bg-white>: background white
- &lt;bg-black>: background black

## Alias to console

You can use the object terminal to call console.log, console.trace ... directly form ink module.

```js
const ink = require('ink.node')

ink.terminal.log('<red>Hello</red> %s', '<b>World</b>')
```

## Advanced mode

You can use html like style for advanced and nested mode using the `ink` tag:

```js
const ink = require('ink.node')let result = ink.html("<ink style='color: #ff0000;font:bold;'>Hello World</ink>")
console.log(result);
```

Ink also supports nested styles:

```js
let html = `
<ink style="color: rgb(255, 0, 0); background-color: #00ff00;font: underline, bold">
    I'm Red, background Green, underlined and bold! 
    <ink style="background-color: rgb(0, 0, 0); font: italic;">
        My BG is black again, but I'm italic :(
    </ink>
    My BG is Green Again!
</ink>
No Format here
`

let result = ink.html(html)
console.log(result);
```

Output:

![output](https://github.com/fakoua/ink/blob/master/forgit/img01.png)

### Supported Styles

- **color**: Hex Or RGB [#ff0000, rgb(0, 255, 0) ...]
- **background-color**: Hex Or RGB [#ff0000, rgb(0, 255, 0) ...]
- **font**: comma separated values [bold, dim, italic, underline, inverse, hidden, strikethrough]

## License

[MIT](LICENSE)
