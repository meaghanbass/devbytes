---
title: "markdown styling"
date: "2019-09-22"
---

<h1 style="text-align:center;border-top: solid 1px rgba(102,119,136,.2);padding-top:16px;"></h1>

# This is an h1 tag
## This is an h2 tag
### This is an h3 tag
#### This is an h4 tag
##### This is an h5 tag
###### This is an h6 tag

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

http://github.com - automatic!
[GitHub](http://github.com)

As Kanye West said:

    > We're living the future so
    > the present is our past.

I think you should use an
`<addr>` element here instead.

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

    def foo():
    if not bar:
        return True

    - [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

<h1 style="text-align:center;border-top: solid 1px rgba(102,119,136,.2);padding-top:16px;"></h1>

Intro
-----

Variants
--------
{: .-three-column}

### H2 sections

| `-one-column` | |
| `-two-column` | _(default)_|
| `-three-column` | |
| `-left-reference` | 3 columns<br>_(short first column)_ |
| `-no-hide` | Don't hide H2 |

See: [H2 sections](#two-columns)

### H3 sections

| `-prime` | Highlight |

See: [H3 sections](#h3-sections-1)

### Tables

| `-bold-first` | Bold first column |
| `-headers` | Show headers |
| `-left-align` | Don't right align last column |
| `-mute-em` | Lower opacity for italics |
| `-no-wrap` | Don't wrap text |
| `-shortcuts` | Shortcut keys |

See: [Tables](#tables-1)

### Code

| `-box-chars` | Less line height<br>_for box drawing chars_ |
| `-setup` | Gray background |
| `-wrap` | Enables line-wrapping |

See: [Code](#code-1)

### Paragraphs

| `-setup` | Gray background |
| `-crosslink` | Has arrow on the link |
{: .-gray}

See: [Paragraphs](#paragraphs-1)

### Lists

| `-also-see` | Lighter background |
| `-four-column` | |
| `-six-column` | |

See: [Lists](#lists-1)

### Adding variants
{: .-prime}

```
## Section
{: .-two-column}
```

Devhints uses Kramdown, and supports adding classes via Kramdown's syntax.

H3 sections
-----------
{: .-three-column}

### Supported

Each section can have the following children:

#### White

- `pre`
- `ul`
- `table`

#### Gray

- `p`
- `h4`

### Prime section
{: .-prime}

This is a section with `{: .-prime}`. Notice the fancy highlight! Great for "getting started" kind of snippets.

### H3 section

Every box is an H3 section. The box will encompass everything inside the body of the H3.

This is a basic section with paragraphs in it.

Code
----
{: .-three-column}

### Basic code

```js
here.is(() => {
  some.code()
})
```

```js
here.is.some.more()
```

Code blocks can be placed one after the other.

See: [Cheatsheets](/)

### Code with headings

#### index.js
{: .-file}

```js
here.is(() => {
  some.code()
})
```

#### other.js
{: .-file}

```js
here.is.some.more()
```

Code blocks can have headings.

### Highlighted lines

```js
app.start(() => {
  const port = app.server.port
  console.log(`Started at ${port}`)
})
```
{: data-line="3"}

Add `{: data-line="3"}` to add line highlights.

### Multiple highlights

```js
app.start(() => {
  const port = app.server.port
  console.log(`Started at ${port}`)
})
```
{: data-line="2,3"}

Add `{: data-line="2,3"}` to add multiple line highlights.

### Setup blocks

```js
import React from 'react'
```
{: .-setup}

```js
class Hello extends React.Component {
  render () {
    return <span>Hello</span>
  }
}
```

Add `{: .-setup}` to a `pre` or `table` or `ul`.

### Long lines

```js
function createNode(nodeName: string, options: { key: string }) {
  return true
}
```

Long lines will have scrollbars.

### Line wrapping

```js
<script>(function(d,s){if(window.Promise&&[].includes&&Object.assign&&window.Map)return;var js,sc=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src='https://cdn.polyfill.io/v2/polyfill.min.js';sc.parentNode.insertBefore(js, sc);}(document,'script'))</script>
```
{: .-wrap}

Add `-wrap` to wrap long lines.

## Lists
{: .-three-column}

### Lists

- This is
- a list
- with a few items

Here's an extra paragraph after the list.

### Lists with headings

#### Part 1

- `createElement()`
- `componentDidMount()`
- `componentWillUnmount()`

#### Part 2

- `shouldComponentUpdate()`
- `componentWillReceiveProps()`


Here's an extra paragraph after the list.

## List columns
{: .-one-column}

### Six columns

- One
- Two
- Three
- Four
- Five
- Six
- Seven
- Eight
- Nine
- Ten
- Eleven
{: .-six-column}

Add `{: .-six-column}` to make large lists.

### Four columns

- One
- Two
- Three
- Four
- Five
- Six
- Seven
- Eight
- Nine
- Ten
- Eleven
{: .-four-column}

Add `{: .-four-column}` to make large lists.

### Also see

- One
- Two
- Three
- Four
- Five
- Six
- Seven
- Eight
- Nine
- Ten
{: .-also-see}

Add `{: .-also-see}`.

## Paragraphs
{: .-three-column}

### Basic paragraphs

This is a basic section with paragraphs in it. When paragraphs are the first elements in an H3 section's body, they appear as white.

### Basic paragraphs

```
···
```

When paragraphs appear after `pre`/`table`/`ul`, they appear with a gray background.

### Preludes

Here's a prelude paragraph. Add `{: .-setup}` to make paragraphs appear with a gray background.
{: .-setup}

```
···
```

### Crosslink

Add `{: .-crosslink}` to make big loud external links:

```
···
```

[Home](/)
{: .-crosslink}

## Tables
{: .-three-column}

### Basic table

#### Date

| Example         | Output                 |
| ---             | ---                    |
| `%m/%d/%Y`      | `06/05/2013`           |
| `%A, %B %e, %Y` | `Sunday, June 5, 2013` |
| `%b %e %a`      | `Jun 5 Sun`            |

#### Time

| Example         | Output                 |
| ---             | ---                    |
| `%H:%M`         | `23:05`                |
| `%I:%M %p`      | `11:05 PM`             |

This is a basic table with h4's.

### Shortcuts

| `V` | Vector |
| `P` | Pencil |
| `T` | Text |
| `L` | Line |
| `R` | Rectangle |
| `O` | Oval |
| `U` | Rounded |
{: .-shortcuts}

Add `{: .-shortcuts}` to tables.

### With headers

| Prefix | Example               | What     |
| ---    | ---                   | ---      |
| `//`   | `//hr[@class='edge']` | Anywhere |
| `./`   | `./a`                 | Relative |
| `/`    | `/html/body/div`      | Root     |
{: .-headers}

Add `{: .-headers}` to add headers.

## Two columns

### One

```
···
```

### Two

```
···
```

## Left reference
{: .-left-reference}

### One

```
···
···
···
···
···
···
···
···
```

### Two

```
···
```

### Three

```
···
```

## One column
{: .-one-column}

### One

```
···
```
