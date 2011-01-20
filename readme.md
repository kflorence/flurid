# [Flurid](http://comato.se/flurid/) - The Fluid CSS Grid

## What is Flurid?

Flurid is a **fluid width grid system** optimized for
flexibility (fluidity), and, as far as I know, is one of the only fluid
grid systems to work in Internet Explorer versions 6 and 7 (and 5, with
the exception of the push/pull classes) without hiding pixels in margins.
Like any [grid system](http://en.wikipedia.org/wiki/Grid_%28page_layout%29),
the basic purpose is to break the page into a series of _rows_ and
_columns_, thus giving the designer an easy, rational way to
organize and present content to the user.

**Fluidity**, as far as I am concerned, is one of the
cornerstones in making web design more _accessible_, _user friendly_,
_customizable_ and, perhaps most importantly, _adaptable_ 
(see: [A Dao of Web Design](http://www.alistapart.com/articles/dao/)).
Fluid designs allow the content of a page to adjust according to the dimensions of
their containing window, which makes it easy to scale up or down, depending upon
the needs of the user or the type of web device being used. If you're interested
in learning more about fluid grid systems, check out the article
[Fluid Grids](http://www.alistapart.com/articles/fluidgrids) on A List Apart.

So why aren't there more fluid grid systems out there that don't hide
pixels in margins?  Well, that is due to how different browsers and web
devices handle sub-pixel rounding (see:
[Sub-pixel Rendering Problems in CSS](http://ejohn.org/blog/sub-pixel-problems-in-css/).
Flurid deals with sub-pixel rounding issues in various ways, namely using
the _overflow: hidden_ and _width: auto_ properties to get
rid of the extra pixels in the last column in a row that would normally
cause a layout to break (in Internet Explorer). Of course, this does make
the width of the last column _slightly_ less precise (in Internet
Explorer), but, as with any compromise, there are always caveats.

## The jQuery.flurid Plugin

Flurid has a companion jQuery plugin to help make developing with the
framework easier. Along with some additional features like equal height
columns, the jQuery plugin can also automatically append alternating "odd"
and "even" classes to rows and columns and apply the "last" class where
needed to fix things for Internet Explorer 7 and below without the need
to include these things directly in the HTML.

## Compatibility and Requirements
Flurid and jQuery.flurid have been tested and verified to work on:

    *   Internet Explorer (Windows) - Versions 6.0+
    *   Mozilla Firefox (Windows/Linux) - Versions 1.0+

Additionally, the jQuery.flurid plugin requires a JavaScript enabled
web browser and the jQuery Library (Versions 1.2.3+).

## Known Bugs and Caveats

    *   A column should be at least as wide as the largest non-breaking item
        inside of it or else the column will stretch.
    *   The class "last" must be applied to the last column in a row in order
        for Flurid to work correctly in _Internet Explorer_ versions 7 and below__*__,
        however, it **should not** be applied to columns inside of a push block. If
        there is only one column in a row, the "last" class may also be omitted.
    *   In general, it is best to wrap _push or pull_ classes around a column
        so that the width is assigned to the child of the pushed/pulled element.
        Internet Explorer seems to like this better.
    *   The immediate child element inside of an **append or prepend** block
        should trigger the _hasLayout_ property in Internet Explorer.
    *   Nesting columns several levels deep can be complicated as it's up to
        you to keep track of the inherited width of parent elements.
    *   The background color/image of a column does not stretch to the bottom
        of the row, it only stretches as far as the content in that column __*__.

__*__ - Can be fixed by using the jQuery.flurid plugin.

## Contact

Found a bug? Have a suggestion? [Submit an issue](https://github.com/kflorence/flurid/issues).
