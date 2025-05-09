***           Erase From...           ***

* You should name this file as "YYYY-Title-of-the-paper.md"
    - This rule is important for the Jekyll to recognize the post.
* When you finalize the post, move this file to "_publications" folder.
* Save figures and pdf you use in "static/pub" folder.

* Highly recommended to use the same name as the file name for figure, pdfs
  so that you can easily find the figure later.
* For pdfs, use the same name as the file name, but add "_Techrxiv" or "_ECC" at the end.
    - For example, if you use "2025-imposing.pdf", use "2025-imposing-Techrxiv.pdf" for Techrxiv.

* You can refer to previous projects for the format in "_publications" folder.

* Change the publication date to the journal date once published.

* For authors, use **bold** for the our lab members and "&#42;" (which makes star) for the corresponding author.

Required: type, title, authors, domestic_or_international, pubs, pub_date, image, abstract

- This template is made by Myeongseok Ryu on 2025-05-09.

*** here, after you read every directions. ***

---
type: "Conference Paper" # Conference Paper, Journal Paper
layout: publication # Do not change this
group: publications # Do not change this
title: "paper title" # Title of the paper
authors: "**Myeongseok Ryu**, **Jiyun Kim**, **Kyunghwan Choi**&#42;" # Author of the paper
domestic_or_international: "international" # "international" or "domestic"
pubs: # Publication information
  - name: Techrxiv 
    doi: "10.36227/techrxiv.173014412.26480551/v1"
    pdf: "/static/pub/2025-imposing-Techrxiv.pdf"
    state: "published" # published, accepted, submitted
  - name: "IEEE European Control Conference (ECC) 2025"
    doi: # Leave it blank if not applicable
    pdf: # Leave it blank if not applicable
    state: "accepted"
pub_date: "2025-06-30" # Date of publication. Change Techrxiv (or other preprint) date to Journal date once accepted
image: "/static/pub/2025-imposing.png" # Representative image of the paper
github: # Leave this blank if not applicable
  - name: "CONAC/ECC25-weight-constraint" # GitHub repository name
    url: "KAIST-MIC-Lab/CoNAC/tree/ECC25-weight-constraint" # GitHub repository URL
    description: "Code for the paper" # Description of the repository
# abstract; emphasize the important part using **bold** or *italic* of markdown syntax
abstract: "
  In this paper, a **neuro–adaptive controller** with weight norm constraints is proposed for uncertain Euler‒Lagrange systems. 
  The boundedness of the weights in the neuro–adaptive controller design is important to prevent excessively large control inputs and system instability. 
  To ensure the boundedness of the weights, the weight norm constraints are imposed as inequality constraints in the weight adaptation. 
  The adaptation law is derived based on the **constrained optimization method**. 
  The stability of the proposed controller is analyzed in the sense of **Lyapunov**, ensuring the **boundedness** of the tracking error and weight estimation. 
  For the comparative study, two benchmark controllers and the proposed controller were evaluated through a numerical simulation of a two-link manipulator system and compared in terms of tracking performance and parameter dependency. 
  The comparative study verified that the proposed controller has better tracking performance and lower parameter dependency.
"
# links: # additional links;
#   - name: 
#     url: 
---