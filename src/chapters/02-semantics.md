---
id: semantics
number: 2
title: Semantics
permalink: /chapters/semantics/
description: Why naming something based on what it is, instead of how it looks or behaves is the foundation of well architected and maintainable CSS.
next:
  text: Reuse
  href: /chapters/reuse
---

Semantic HTML isn't only about the elements we use. It's quite obvious that we should use `<a>` for links, `<table>` for tabular data and `<p>` for paragraphs etc. What's less obvious is the names we use for classes.

As Phil Karton says, “there are only two hard things in Computer Science: cache invalidation and **naming things**.” So spending a whole chapter talking about naming is essential.

Naming is the most important aspect of writing maintainable CSS. There are two main approaches: the semantic approach and the non-semantic approach.

## Semantic vs non-semantic

```
<!-- non semantic -->
<div class="red pull-left pb3">
<div class="grid row">
<div class="col-xs-4">

<!-- semantic -->
<div class="basket">
<div class="product">
<div class="searchResults">
```

Non-semantic classes don't convey *what* an element represents. At most they give you an idea of what an element *looks* like. Atomic, visual, behavioural and utility classes are all forms of non-semantic classes.

Semantic classes don't convey their styles, but that's fine—that's what CSS is for. Semantic classes mean something to HTML, CSS, Javascript and automated functional tests.

Let's look at why semantic classes usually work best.

## 1. Because they're readable

Here's a real snippet of HTML using atomic classes:

```
<div class="pb3 pb4-ns pt4 pt5-ns mt4 black-70 fl-l w-50-l">
  <h1 class="f4 fw6 f1-ns lh-title measure mt0">Heading</h1>
  <p class="f5 f4-ns fw4 b measure dib-m lh-copy">Tagline</p>
</div>
```

- Words are generally easier to understand than abbreviations which have to be understood and  interpreted before knowing what they stand for
- It's unclear where the module begins and ends
- We have to wade through a very long list of classes to work out what's going on; which classes override which; and which apply at different breakpoints
- The classes lack clarity—for example, it's not clear whether `black-70` is referring to the foreground or background colour
- The content is obfuscated by the larger surrounding HTML
- The HTML is large in size

Here's the same HTML with semantic classes:

```
<div class="hero">
  <h1 class="hero-title">Heading</h1>
  <p class="hero-tagline">Tagline</p>
</div>
```

- These classes are easy to read without needing to be interpreted
- It's clear where the module begins and ends
- It's easy to read the CSS because it uses the standard syntax for this purpose
- The content is no longer obfuscated
- The HTML is half the size

## 2. Because they make it easier to build responsive sites

Imagine coding a two-column responsive grid whereby:

* each column has `20px` and `50px` padding on small and large screens respectively
* each column has `2em` and `3em` font-size on small and large screens respectively
* the columns stack on small screens. Note that *column* is now a misleading class name.

With non-semantic classes it may look like this:

```
<div class="grid clearfix">
  <div class="col pd20 pd50 fs2 fs3">Column 1</div>
  <div class="col pd20 pd50 fs2 fs3">Column 2</div>
</div>
```

- There are 7 classes—some of which override each other
- To make the columns work responsively we would need a `fs3large` class which means creating a naming convention that recreates language constructs already provided by CSS
- At certain break points, the classes are misleading and redundant—for example `.clearfix` doesn't clear on small screens

With semantic classes it looks like this:

```
<div class="thing">
  <div class="thing-thingA"></div>
  <div class="thing-thingB"></div>
</div>
```

- The classes are encapsulated to the module's design and content
- It's easy to style elements without having to write a multiple classes and changing the HTML
- The classes are meaningful in small and big screens
- Media queries can be used to clear elements when needed

> Question: how valuable is a codified responsive grid system? A [layout should adapt to the content](http://adamsilver.io/articles/stop-using-device-breakpoints/), not the other way around.

## 3. Because they're easier to find

Searching HTML with non-semantic classes yields many results. Searching HTML with semantic classes should yield one result which makes it quick to track down.

## 4. Because they reduce the chance of regression

Updating a non-semantic class could cause regression across multiple elements. Updating a semantic class only applies to the specific module, eliminating the risk of regression.

## 5. Because visual classes aren't necessarily valuable

Atomic CSS and inline CSS aren't totally equivalent. For example, inline CSS can't use media queries and styling in HTML stops us from being able to cache it.

But, in some ways we may as well use inline styles—at least it's explicit and reduces the CSS footprint to zero.

> Question: isn't `.red` the exact same abstraction that CSS already gives us for free with `color: red`?

## 6. Because they provide hooks for automated tests

Automated functional tests work by searching for and interacting with elements. For example, a test might involve:

1. clicking a link
2. finding a text box
3. typing in text
4. submitting a form
5. verifying some criteria

We can't use non-semantic classes to target specific elements. And adding hooks specifically for tests is wasteful as the user now has to download extra code.

## 7. Because they provide hooks for JavaScript

We can't use non-semantic classes to target specific elements in order to enhance them with JavaScript.

## 8. Because they need less maintaining

When you name an element based on what it is, you don't have to update the HTML. That's because, a heading, for example, is always a heading, no matter what it looks like.

With visual classes, both the HTML and the CSS need updating—assuming there aren't any selectors available for use.

## 9. Because they're easier to debug

Inspecting an element with multiple atomic classes, means having to wade through many selectors. With a semantic class, there's only one which is much easier to work with.

## 10. Because the standards recommend it

On using the class attribute, HTML5 specs say in 3.2.5.7:

> "[...] authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content."

## 11. Because styling state is easier

Consider this HTML:

```
<a class="padding-left-20 red" href="#"></a>
```

Changing the padding and colour on hover is a difficult task. Try to avoid having to fix self-induced problems like this.

## 12. Because they produce a small HTML footprint

Atomic classes create extra code in HTML. Semantic classes result in less code. And while the CSS may increase in size, it can be cached.

## Final thought

Semantic classes are a cornerstone of MaintainableCSS. Without them, everything else makes little sense. Name something based on what it is and everything else falls into place.