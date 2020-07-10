---
title: How we include protein structures in our posts
author: Daniel Hogan
layout: post
group: news
---

To display 3D structural models, we use [UglyMol](https://github.com/uglymol/uglymol/), an open-source web-based macromolecular viewer focused on electron density.
It's embedded within a separate HTML page that is included in posts using an iframe.
The document that the iframe inserts is located at `/static/uglymol.html`, which can be viewed [here](https://github.com/fraser-lab/fraser-lab.github.io/tree/master/static/uglymol/view.html).
The structure to show is selected using a [query string](https://en.wikipedia.org/wiki/Query_string).
For example, the structure for entry [3K0N on the PDB](https://www.rcsb.org/structure/3K0N) can be inserted into any page on our site by simply including `<iframe src="/static/uglymol.html#id=3k0n"></iframe>`, which would cause it to look for files called `3k0n.pdb` and `3k0n.mtz` within the `/static/uglymol/` directory.
Note that the files are stored locally and not loaded from the PDB.

<iframe style="height:500px;width:100%" src="/static/uglymol.html#id=3k0n"></iframe>

Further parameters can also be added, such as `#id=3k0n&xyz=10,5,15&eye=90,-30,60&zoom=50`, yielding the following figure:

<iframe style="height:500px;width:100%" src="/static/uglymol.html#id=3k0n&xyz=14,18,12&eye=80,71,-41&zoom=50"></iframe>

For a concrete example, the document creating this post can be viewed [here](https://github.com/fraser-lab/fraser-lab.github.io/blob/master/_posts/2020-07-08-structures-in-posts.md).
It, like everything else on this site, is released under an MIT license.
