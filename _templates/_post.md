***           Erase From...           ***

* You should name this file as "YYYY-MM-DD-Title-of-the-post.md"
    - This rule is important for the Jekyll to recognize the post.
* When you finalize the post, move this file to "_posts" folder.
* Save figures you use in "static/posts" folder.

* Highly recommended to use the same name as the file name for figure, 
  so that you can easily find the figure later.

* You can refer to previous posts for the format in "_posts" folder.

Required: Published, Title, Author, Tags
Available tags: general, ... (will be added later)

When you filled the required fields, write the post content after line "---".
You can use markdown syntax to write the post content.
However, for advanced features like figure, HTML syntax is recommended.

- This template is made by Myeongseok Ryu on 2025-05-09.

*** here, after you read every directions. ***

---
published: True # True or False
title: Example Post # Title of the post
author: Myeongseok Ryu # Author of the post
layout: post # Do not change this
group: news # Do not change this
tags: general # Tags for the post
---
<div class="row">

    This is example post.

    You can add figure like following:

    <div style="text-align: center;">
        <img class="img-fluid" src="/static/posts/GISTLabCrew.jpg" alt="qFit" style="width: 60%; height: auto;">
    </div>

</div>