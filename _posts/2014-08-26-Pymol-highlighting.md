---
title: Syntax Highlighting for Pymol Scripts
author: Ben Barad
layout: post
group: news
---

<img class="img-responsive" src="/static/img/pymol/Combined_screenshots.png" alt="Screenshots of pymol script before and after syntax highlighting">

We write lots of pymol scripts here in the Fraser lab, and to this end I have written a language grammar to allow highlighting of the pymol syntax in `.pml` files in [Sublime Text](https://www.sublimetext.com/) (and any other editor that uses textmate style grammars). It should work with just about any basic syntax that you throw at it, though more capability (for things like for loops) will be added as time goes on. 

It is publically available for installation through [Package Control](https://sublime.wbond.net/packages/Pymol%20Language), which will automatically update with new releases. You can also get it from [Github](https://github.com/bbarad/pymol_syntax), which will have the most up to date changes between releases (including potential new bugs).

_For the curious, I wrote a longer article discussing the details of making the language grammar, and where it currently stands, on [my personal website](http://benjaminbarad.com/2014/08/26/Pymol-highlighting/)._