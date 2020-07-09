---
title: Clone this website!
author: Ben Barad and James Fraser
layout: post
group: news
---
If you are starting a new lab or want an easy (democratized) way to run your lab website - please: Clone this website!

The Fraser lab website was built by [Ben Barad](https://benjaminbarad.com) 6 years ago using [Github Pages](https://pages.github.com/). Since then, it has been improved upon by many members of the lab, and has been updated over 1000 times by James.

We love our lab website because it is so easy to use and update. Updates are done in markdown, which is very easy to learn. As part of on-boarding, new members add their own bio and picture. This also serves to teach people git and to get comfortable with the idea of modifying, breaking, and fixing the website! The publications page is particularly powerful with easy formatting based on IDs for Pubmed, the Protein Data Bank, BioRxiv etc. Similarly the members page makes it easy to add accounts for Twitter, github, and other services. We keep adding more features. For example, Jen will be adding alumni links for lab websites or LinkedIn pages in the near future!

In keeping with our lab principles on sharing, we decided from the beginning to share it with a [permissive open source license](https://en.wikipedia.org/wiki/MIT_License), so that others in the community are able to copy and modify it to make their own lab websites. We're glad they have!

## Quite a few people have made websites based on the original Fraser Lab template, with varying degrees of customization:
### Sites Ben Made:
* [Frost Lab @ UCSF](https://frostlab.org)
* [Grotjahn Lab @ Scripps Research](https://grotjahnlab.org)
* [Benjamin Barad @ Scripps Research](https://benjaminbarad.com) (Personal site)

### Sites other people made (in no particular order):
* [Zunder Lab @ UVa](http://zunderlab.com/)
* [Keedy Lab @ CUNY](https://keedylab.org/)
* [Thompson Lab @ UCM](https://thompsonlab.science/)
* [Gross Lab @ UCSF](https://grosslab.ucsf.edu/)
* [Kern Lab @ Brandeis](https://kernlab-brandeis.github.io/)
* [Herzik Lab @ UCSD](https://herziklab.com/)
* [Wiseman Lab @ Scripps Research](https://wisemanlab.github.io)
* [Ramani Lab @ UCSF](http://kamakshi.ucsf.edu/)
* [Koch Lab @ Manchester](https://reconfiglab.github.io)
* [Ma Lab @ Georgetown](https://junfengmalab.org/)
* [Mel Lab @ Inha](https://mellab-inha.github.io/)
* [Reuter Lab @ MIT](https://deep-mi.org/)
* [Li Lab @ UCSD](https://wheatgenomics-sdsu.github.io/)
* [Chiong Lab @ UCSF](https://decisionlab.ucsf.edu/team/)
* [Chowdhury Lab @ BITS Pilani](https://cancerlab.github.io/)
* [Li Lab @ PKU](https://jianlilab.github.io/)
* [Roberts Lab @ Dickinson](https://robertslabdson.github.io/)
* [Parkin Lab @ U Saskatchewan](https://parkingenomics.github.io/)
* [Mege Lab @ Ramnarain Ruia](https://regelab.github.io/)
* [Shi Lab @ UCM](https://shi-theory-group.github.io/)
* [Tewhey Lab @ Tufts](https://tewhey-lab.github.io)
* [Amii XAI Lab @ U Alberta](https://amiixailab.github.io/)
* [Arnaout Lab @ UCSF](http://arnaoutlab.ai/)
* [Corces Lab @ Gladstone](https://www.corceslab.com/)
* [Gati Lab @ SLAC](https://gati-lab.slac.stanford.edu/)

<!-- * [Herman Lab @ Duke](https://hermanlab.github.io/) -->

Have you made a website using the Fraser lab or one of these sites as a template? We'd love to add yours to our list!

## So what do I do to make my own?
_Recently, our lab website has gone through some significant ugprades. These include moving to collections for most things instead of using the `_data` folder, moving to a CDN to load large files, and support for structure loading with [UglyMol](https://uglymol.github.io/). This guide predates these, and while it is relatively easy to copy the website still, for this guide we recommend taking a copy of one of the releases we made before incorporating these edits: [https://github.com/fraser-lab/fraser-lab.github.io/releases](https://github.com/fraser-lab/fraser-lab.github.io/releases)_
1. Fork [this Github repository](https://github.com/fraser-lab/fraser-lab.github.io) (or one of the ones others have made - just make sure it has a license to do so!) to your own organization, and rename it to `organization_name.github.io` - right away, you'll start seeing a website appear at that URL! Optionally, download the site, and try building it using the instructions in the readme so you can edit locally. Either way, delete the current `CNAME` file, which points to https://fraserlab.com. Once you've done this, the website will start showing up automatically at https://organization_name.github.io - no further hosting or configuration required.
2. Update the license - you can choose not to relicense your site if you don't want others to use it as a template, but you need to include a copy of the Fraser Lab license somewhere (can be in an `external` folder)
3. Change the readme, `config.yml` and `news.xml` files to be your lab's name!
4. Update `_includes/header.html` and `_includes/footer.html` for your website! In particular, change the university brand image and link in the header, and the link in the footer.
5. Remove all the Fraser lab's images and PDFs from the `static` folder, and put in member photos, key images/PDFs for papers, and any extra images that you want to use on your site.
6. Remove all the posts from the `_posts` folder and write one or two of your own!
7. Remove any extra pages that you don't intend to use (in particular, Fraser lab has many pages related to different UCSF classes) by deleting the folder with the respective name. The minimum folders you probably need are `_data`, `_includes`, `_layouts`, `_drafts`,`_posts`, `publications`, `research`, `members`, `static`, and maybe `news` and `join`.
8. Update `index.md` to change the homepage! You can change the image in `_layouts/home.html`. Change the sidebar on the homepage at `_includes/sidebar.html`
9. Go into `_data` and do the following:
	* Replace entries in `members.yml` and `alumni.yml` with your own members and alumni!
	* Replace or delete `sep.yml` and `visitors.yml` based on your needs - do you have visiting scientists or undergrads/high school students to list?
	* Update `navlinks.yml` based on your needs - this controls what is in the navbar at the top of each page.
	* Replace entries in `publications.yml` with your own publications.
10. Update the members page photos by changing `_layouts/members.html`. Update the members page sidebar by editing `_includes/alumni_sidebar.html`.
11. Update the research page at `research/index.md`. Similarly update any other specific pages by editing the `index.md` or `index.html` file in each folder.
12. Either update disqus to your own account at `_includes/disqus.html`, or remove it at `_layouts/post.html` if you don't like comments on your posts.
47. Remove `sitemap.xml` and optionally make another one of your own.
48. Replace `favicon.ico` with one of your own!
49. Add a custom domain using [Github's instructions](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
50. Edit styles in `static.css` and `_layouts` and `_includes` to customize the site to your heart's content!

## Once I have my own, how do I edit it?
For a new publication, just upload a photo and PDF, then update the `_data/publications.yml` file. Similarly, for a new member, just update `_data/members.yml`. New blog posts can be made by adding a new markdown file in `_posts`
