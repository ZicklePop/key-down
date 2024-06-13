# key-down

A web component for quick key commands

## Install

```sh
npm install --save @zicklepop/key-down
```

## Resources

- [Demo](http://zicklepop.github.io/key-down/demo.html)
- [GitHub](https://github.com/zicklepop/key-down)
- [NPM](https://www.npmjs.com/package/@zicklepop/key-down)

## Properties

- **data-key** _string, required_: The key we are watching to be pressed
- **data-action** _enum, optional_: Defaults to 'click', but can be set to be 'focus'
- **data-scroll** _boolean, optional_: If true, the page will scroll the wrapped element in to view
- **data-altKey** _boolean, optional_: Setting this as true or false will require the alt/option key to be pressed or not, otherwise it will not matter.
- **data-ctrlKey** _boolean, optional_: Setting this as true or false will require the control key to be pressed or not, otherwise it will not matter.
- **data-metaKey** _boolean, optional_: Setting this as true or false will require the meta/Windows/command key to be pressed or not, otherwise it will not matter.
- **data-shiftKey** _boolean, optional_: Setting this as true or false will require the shift key to be pressed or not, otherwise it will not matter. If you just want to monitor for a capital letter or symbol, it is recommended to set the `data-key` value to it (ie `A` or `!`)

## Basic Usage

Just requires a clickable child element

```html
<key-down data-key="a">
  <button></button>
</key-down>
```

## With Defined Action

By default, the web component will click the child when the key is pressed, but you can pass in an action like 'focus' for input boxes.

```html
<key-down data-key="b" data-action="focus">
  <input type="text" placeholder="Press 'b' key" />
</key-down>
```

## With Everything

Using every manual property.

```html
<key-down
  data-key="b"
  data-scroll="true"
  data-altKey="false"
  data-ctrlKey="true"
  data-metaKey="false"
  data-shiftKey="false"
>
  <input type="text" placeholder="Press 'ctrl+b' key" />
</key-down>
```
