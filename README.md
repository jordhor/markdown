# Markdown guide

[Text styles](#text-style) | [Headings](#headings) | [Paragraphs](#paragraphs) | [Lists](#lists) | [Code blocks](#code-blocks) | [Links](#links) | [Images](#images) | [Tables](#tables)

Markdown was created by John Gruber in 2004. It’s meant to be an easy to read and write syntax which converts easily to HTML (and now many other formats as well).

- Specifications: [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- Tutorial: [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/)
- Tutorial: [Five minutes to Markdown mastery](https://www.remarq.io/articles/five-minutes-to-markdown-mastery/)
- Sublime Package: [Sublime Text 3 Markdown Preview in Browser](https://github.com/facelessuser/MarkdownPreview)
- Api Service: [GitHub Developer Markdown Rest Api service](https://developer.github.com/v3/markdown/)

<br />

### HTML Elements

Markdown is a superset of HTML, so any HTML file is valid Markdown.

<pre>&lt;!--This means we can use HTML elements in Markdown, such as the comment 
element, and they won't be affected by a markdown parser. However, if you 
create an HTML element in your markdown file, you cannot use markdown syntax 
within that element's contents.--&gt;</pre>


<br />


### Text styles:

Markdown | Rendered
:-- | :--
```This text has *emphasis*.``` | This text has *emphasis*.
```This text **is bold**.``` | This text **is bold**.
```This text ***is emphasized and bold***.``` | This text ***is emphasized and bold***.
```This text ~~is strikethrough.~~``` | This text ~~is strikethrough.~~
```Indicate a `code block`.``` | Indicate a `code block`.
```<kbd>Ctrl</kbd> + <kbd>Shift</kbd>``` | <kbd>Ctrl</kbd> + <kbd>Shift</kbd>

<br />


### Headings

Markdown | Rendered
:-- | :--
```# This is a title``` | <h1>This is a title  &lt;h1&gt;</h1>
```## This is a title``` | <h2>This is a title  &lt;h2&gt;</h2>
```### This is a title``` | <h3>This is a title  &lt;h3&gt;</h3>
```#### This is a title``` | <h4>This is a title  &lt;h4&gt;</h4>
```##### This is a title``` | <h5>This is a title  &lt;h5&gt;</h5>
```###### This is a title``` | <h6>This is a title  &lt;h6&gt;</h6>

Another alternative for heading is type:
<pre>This is an h1<br />=============</pre>
<pre>This is an h2<br />-------------</pre>

<br />


### Paragraphs

You can end a paragraph with two or more spaces and then begin a new paragraph. 

You can also use ```<br />```.

#### Blockquotes

```
> This is a block quote.
```
<blockquote>This is a block quote.</blockquote>

```
> You can also use more than one level
>> of indentation?
```
<blockquote>You can also use more than one level<blockquote>of indentation?</blockquote></blockquote>

#### Horizontal rules

To break up sections of a document you may want to include a horizontal rule. Three or more dashes on a line will do it. Instead of `-` you could also use `*` or `_`.

```
-------
```
<hr />

<br />


### Lists

Lists come in two varieties, unordered (bulleted) and ordered (numbered). 
Use lines starting with asterisks (```*```) to create unordered lists, and lines 
starting with ```#.``` to create numbered lists.

#### Unordered lists
```
* This is an unordered lists
* The asterisks are turned into bullets
    * Indenting an item makes a sub list
```
<ul><li>This is an unordered lists</li><li>The asterisks are turned into bullets<ul><li>Indenting an item makes a sub list</li></ul></li></ul>

#### Ordered lists

```
1. This is an ordered lists
1. The 1 are turned into numbers
    1. Indenting an item makes a sub list
```
<ol><li>This is an ordered lists</li><li>The 1 are turned into numbers<ol><li>Indenting an item makes a sub list</li></ol></li></ol>

#### With Boxes

<pre>
- [ ] First task to complete.
- [ ] Second task that needs done
- [x] This task has been completed
</pre>

- [ ] First task to complete.
- [ ] Second task that needs done
- [x] This task has been completed

<br />


### Code blocks

Inline code can be created using the backtick character ``` ` ```:

Markdown | Rendered
:-- | :--
```What the `go_to()` function did!``` | What the `go_to()` function did!

You can indicate a code block (which uses the &lt;code&gt; element) by indenting a line with four spaces or a tab.

<pre class="code">&nbsp;&nbsp;&nbsp;&nbsp;This is code<br />&nbsp;&nbsp;&nbsp;&nbsp;So is this</pre> 

In GitHub Flavored Markdown, you can use a special syntax for code indicating one of the [supported languages](http://www.rubycoloredglasses.com/2013/04/languages-supported-by-github-flavored-markdown/).

<pre style="padding-bottom: 6px;">```html
&lt;div class="container"&gt;
    &lt;a href="https://api.ggogle.com"&gt;Google Api&lt;/a&gt;
&lt;/div&gt;
```</pre>

```html
<div class="container">
    <a href="https://api.ggogle.com">Google Api</a>
</div>
```
An example with another language

<pre style="padding-bottom: 6px;">```javascript
var bar = function() {
    console.log('Hello World!');
}
```</pre>

```javascript
var bar = function() {
    console.log('Hello World!');
}
```
<br />


### Links

Markdown | Rendered
:-- | :--
```Click [this link](http://test.com/).``` | Click [this link](http://test.com/).
```Click [this link](http://test.com/ "Link to Test.com").``` | Click [this link](http://test.com/ "Link to Test.com").
```<http://test.com/>``` equivalent to ```[http://test.com/](http://test.com/)``` | [http://test.com/](http://test.com/)
```Auto-link for email: <foo@bar.co>``` | Auto-link for email: <foo@bar.com>.
```Click this [relative link](../img/ball.png).``` | Click this [relative link](../img/ball.png).

Markdown also supports reference style links. Declare using ```:``` after link name (you must omit parenthesis for url):

[foo]: http://bar.biz/ "Cool!"

Markdown | Rendered
:-- | :--
```[foo]: http://bar.biz/ "Cool!"```<br />```Click [this link][foo] for more details.``` | Click [this link][foo] for more details.

### Bookmarks

You can bookmark any heading (paragraph starting with `#`) converting title in lowercase and replacing spaces by `-`.

Markdown | Rendered
:-- | :--
```Link to section [Code blocks](#code-blocks).``` | Link to section [Code blocks](#code-blocks).

<br />


### Images

Images are done the same way as links but with an exclamation point in front!

Markdown | Rendered
:-- | :--
```![This is the alt-attribute](https://static.com/ball8.png "An optional title")``` | ![This is the alt-attribute](https://github.global.ssl.fastly.net/images/icons/emoji/8ball.png?v5 "An optional title")

```html
<img alt="This is the alt-attribute" src="https://static.com/ball8.png" title="An optional title" />
```
And reference style works as expected.

<pre><b>[myimage]</b>: https://static.com/ball8.png "An optional title"

![This is the alt-attribute]<b>[myimage]</b></pre>


<br />


### Tables

Tables are only available in GitHub Flavored Markdown and are slightly cumbersome, but if you really want it:

<pre>| Col1         | Col2     | Col3          |
| :----------- | :------: | ------------: |
| Left-aligned | Centered | Right-aligned |
| blah         | blah     | blah          |</pre>

| Col1         | Col2     | Col3          |
| :----------- | :------: | ------------: |
| Left-aligned | Centered | Right-aligned |
| blah         | blah     | blah          |

or, for the same results

<pre>Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**</pre>

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**


<br />
<br />
<br />
<br />

