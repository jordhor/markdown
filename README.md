
<!--<style type="text/css">
    pre, .code {
        font-family: Consolas, Courier;
        font-size: 90%;
    }
</style>-->

<!-- Google fonts -->
<!-- <link rel='stylesheet' type="text/css" href='https://fonts.googleapis.com/css?family=Open+Sans:300' /> -->

<!-- Material.Design Icons set -->
<!-- <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> -->

<!-- Font Awesome -->
<!-- <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" /> -->

<!-- Ayudas y documentación -->
<!-- <link type="text/css" rel="stylesheet" href="documents.css"> -->

<!-- Modelos de datos -->
<!-- <link type="text/css" rel="stylesheet" href="model.doc.css"> -->


<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<!-- <i class="material-icons">face</i> -->

# Markdown guide

[Text styles](#text-style) | [Headings](#headings) | [Paragraphs](#paragraphs) | [Lists](#lists) | [Code blocks](#code-blocks) | [Links](#links) | [Images](#images) | [Tables](#tables)

Markdown was created by John Gruber in 2004. It’s meant to be an easy to read and write syntax which converts easily to HTML (and now many other formats as well).

- Tutorial: [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/){:target="_blank"}
- Tutorial: [Five minutes to Markdown mastery](https://www.remarq.io/articles/five-minutes-to-markdown-mastery/){:target="_blank"}
- Specifications: [GitHub Flavored Markdown Spec](https://github.github.com/gfm/){:target="_blank"}
- Sublime Package: [Sublime Text 3 Markdown Preview in Browser](https://github.com/facelessuser/MarkdownPreview){:target="_blank"}
- Api Service: [GitHub Developer Markdown Rest Api service](https://developer.github.com/v3/markdown/){:target="_blank"}

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
<span class="code">This text has \*emphasis\*.</span> | This text has *emphasis*.
<span class="code">This text \*\*is bold\*\*.</span> | This text **is bold**.
<span class="code">This text \*\*\*is emphasized and bold\*\*\*.</span> | This text ***is emphasized and bold***.
<span class="code">This text \~\~is strikethrough.\~\~</span> | This text ~~is strikethrough.~~
<span class="code">Indicate a \`code block\`.</span> | Indicate a `code block`.
<span class="code">&lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;Shift&lt;/kbd&gt; | <kbd>Ctrl</kbd> + <kbd>Shift</kbd>

<br />


### Headings

Markdown | Rendered
:-- | :--
<span class="code">\# This is a title</span> | <h1>This is a title  &lt;h1&gt;</h1>
<span class="code">\## This is a title</span> | <h2>This is a title  &lt;h2&gt;</h2>
<span class="code">\### This is a title</span> | <h3>This is a title  &lt;h3&gt;</h3>
<span class="code">\#### This is a title</span> | <h4>This is a title  &lt;h4&gt;</h4>
<span class="code">\##### This is a title</span> | <h5>This is a title  &lt;h5&gt;</h5>
<span class="code">\###### This is a title</span> | <h6>This is a title  &lt;h6&gt;</h6>

Another alternative for heading is type:
<pre>This is an h1<br />=============</pre>
<pre>This is an h2<br />-------------</pre>

<br />


### Paragraphs

You can end a paragraph with two or more spaces and then begin a new paragraph. 

You can also use ```<br />```.

###### Blockquotes

Markdown | Rendered
:-- | :--
<span class="code">\> This is a block quote.</span> | <blockquote>This is a block quote.</blockquote>
<span class="code">\> You can also use more than one level<br />\>\> of indentation?</span> | <blockquote>You can also use more than one level<blockquote>of indentation?</blockquote></blockquote>

###### Horizontal rules

To break up sections of a document you may want to include a horizontal rule. Three or more dashes on a line will do it. Instead of `-` you could also use `*` or `_`.


Markdown | Rendered
:-- | :--
<span class="code">\-------</span> | <hr />

<br />


### Lists

Lists come in two varieties, unordered (bulleted) and ordered (numbered). 
Use lines starting with asterisks (```*```) to create unordered lists, and lines 
starting with ```#.``` to create numbered lists.

Markdown | Rendered
:-- | :--
<span class="code">* This is an unordered lists<br />* The asterisks are turned into bullets<br />&nbsp;&nbsp;&nbsp;&nbsp;* Indenting an item makes a sub list</span> | <ul><li>This is an unordered lists</li><li>The asterisks are turned into bullets<ul><li>Indenting an item makes a sub list</li></ul></li></ul>
<span class="code">1. This is an ordered lists<br />1. The 1 are turned into numbers<br />&nbsp;&nbsp;&nbsp;&nbsp;1. Indenting an item makes a sub list</span> | <ol><li>This is an ordered lists</li><li>The 1 are turned into numbers<ol><li>Indenting an item makes a sub list</li></ol></li></ol>

Boxes below without the 'x' are unchecked HTML checkboxes.

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
<span class="code">What the \`go_to()\` function did!</span> | What the `go_to()` function did!

You can indicate a code block (which uses the &lt;code&gt; element) by indenting a line with four spaces or a tab.

<pre class="code">&nbsp;&nbsp;&nbsp;&nbsp;This is code<br />&nbsp;&nbsp;&nbsp;&nbsp;So is this</pre> 

In GitHub Flavored Markdown, you can use a special syntax for code indicating one of the [supported languages](http://www.rubycoloredglasses.com/2013/04/languages-supported-by-github-flavored-markdown/){:target="_blank"}.

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
<span class="code">Click \[this link](http://test.com/).</span> | Click [this link](http://test.com/).
<span class="code">Click \[this link](http://test.com/)\{:target="_blank"}.</span> | Click [this link](http://test.com/){:target="_blank"}.
<span class="code">Click \[this link](http://test.com/ "Link to Test.com").</span> | Click [this link](http://test.com/ "Link to Test.com").
<span class="code">&lt;http://test.com/> equivalent to \[http://test.com/]\(http://test.com/) | [http://test.com/](http://test.com/)
<span class="code">Auto-link for email: &lt;foo@bar.com&gt;</span> | Auto-link for email: <foo@bar.com>.
<span class="code">Click this \[relative link]\(../img/ball.png).</span> | Click this [relative link](../img/ball.png).

Markdown also supports reference style links. Declare using ```:``` after link name (you can omit parenthesis for url):

[foo]:(http://bar.biz/ "Cool!")

Markdown | Rendered
:-- | :--
<pre><b>\[foo]</b>: http://bar.biz/ "Cool!"<br />Click \[this link]<b>\[foo]</b> for more details.</pre> | Click [this link][foo] for more details.

###### Bookmarks

You can bookmark any heading (paragraph starting with `#`) converting title in lowercase and replacing spaces by `-`.

Markdown | Rendered
:-- | :--
<span class="code">Link to section \[Code blocks]\(#code-blocks).</span> | Link to section [Code blocks](#code-blocks).

<br />


### Images

Images are done the same way as links but with an exclamation point in front!

Markdown | Rendered
:-- | :--
<span class="code">\![This is the alt-attribute]\(https://static.com/ball8.png "An optional title")</span> | ![This is the alt-attribute](https://github.global.ssl.fastly.net/images/icons/emoji/8ball.png?v5 "An optional title")

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

