---
title: The Fraser Lab Method of Following the Scientific Literature
author: James Fraser
layout: post
group: news
---

A guide to using RSS Feeds to quickly scan and triage the scientific literature by James Fraser

Yesterday I got an email from a colleague:

“Jaime - should I use RSS or Twitter to stay tuned into what is being published in different journals?”

I was already primed to rant about this issue because I had participated in a follow up interview with a staff member at PLoS about their new structured post-publication review tool earlier in the day.  One of the ideas that emerged in the interview - an idea that got me a bit fired up - was that PLoS is motivated to create this tool to help researchers sort through the massive and overwhelming scientific literature. This is a widely held idea, but it rings completely false to me. This idea is even part of the motivation for a company started by some friends of mine (PubChase, which is part of ZappyLabs).  

I find it very easy to stay on top of the literature. I consider scanning and reading papers  to be one of my most important and enjoyable responsibilities as a scientist. It doesn’t take that much time (a few hours per week, most of which is while walking or waiting) and I almost never miss papers that I should have read.

First, you need to define a set of journals that have most of the papers you want to read. Therefore, the first level of finding most (but not all) of the relevant papers is using RSS to follow the big weekly journals, a few bimonthly journals, and about a dozen monthly journals.  Staying on top of the literature leverages on our current journal stratification system.  Despite its flaws, I know that I’m more likely to want to read a paper in Nature than a paper in PLoS1 (sorry, Mike!). Second, to bring your attention to papers in the journals that you otherwise wouldn’t read, you can use a series of RSS feeds for keyword, author, and citation-based searches.

Ultimately if PLoS1 is successful in absorbing all of Pubmed, sorting through the literature will become a bit harder. When this happens, it might necessitate the type of post-publication ranking systems that PLoS is trying to implement now.  That day is not here, yet.  So, while I am happy that PLoS is thinking about how we will struggle, in the future, to find and prioritize papers worth reading, I thought it would be helpful to outline my strategy for using RSS feeds for journals, authors, keywords, and citations.

I use an RSS reader on my iPhone to scan through the titles of papers almost anytime I am walking within our building.  I read abstracts on my phone anytime I am sitting down waiting for something to start. I read papers on my computer in the morning when I’m drinking coffee. I probably spend 10-20 minutes a day engaged in the literature, almost all of it while waiting or walking. How do I set this up?  Read on...

###What is RSS?

RSS is a web syndication format that allows publishers to automatically update their audience of changes in content.  For the audience (us) this eliminates the need to check the website for updates - any new content is delivered via an RSS feed.  For scientific publishing, each journal generally has its own feed and each article is a separate item in the feed.  By directing all of these feeds to the same place, we can aggregate all the articles you would want to read. Google Reader was a very popular aggregator, but Google killed it.  I use Feedly now and find that it is pretty reliable and easy to use. It has a little more style than I would like, because I find the uneven formatting distracting.   I’ll detail more on how to use Feedly and my general workflow below.

Most newspaper sites, blogs, etc also have RSS feeds - but I keep my science and personal RSS feeds separate.
The RSS logo is this: 

![RSS Logo](/static/img/news/rss-logo.png "RSS")

More information can be found on [Wikipedia](http://en.wikipedia.org/wiki/RSS)

###Why RSS instead of emailed TOC or Twitter?

You can use RSS feeds to automatically collect all the new articles in one place, read through the titles rapidly, save the titles that look interesting, and then read only a limited subset of those articles. Like receiving table of contents (TOC) emails, RSS feeds will notify you when a journal publishes a new issue and give you titles of all the articles.  

There are two major advantages over email TOC: 1) in the RSS feed, articles are discretized (often with the abstract) - meaning you can quickly sort through the entire issue and save the relevant portions for later, 2) email is for back and forth communication - I am often overwhelmed by the amount of email that I get and have set up several filters to try to reserve my inbox to actual back and forth communication, leaving all non-urgent notifications to sort through at a later time. Separating the literature into RSS feeds (away from email) also creates a psychological divide between one of my most joyful activities as a scientist (reading the literature) from one of my most hated (email).

Why not Twitter? RSS feeds will give you the opportunity to (quickly) sort through every article. If you buy the premise that the literature is overwhelming, then Twitter might be good for you. I worry that the signal-to-noise on literature commenting/highlighting on Twitter will be very low - but I haven’t really used it much.

###How to set up RSS feeds:

1) [Create a feedly account](http://cloud.feedly.com/#start) 

Feedly is a good RSS aggregator. Right now you will first have to add a feed.  Search for “Plos biology” and click “add to my feedly” to be prompted to create an account. Link the account to your google account.  

2) Set up chrome to add RSS feeds properly. 

Install the [Google chrome extension](https://chrome.google.com/webstore/detail/rss-subscription-extensio/nlbjncdgjeocebhnmkbbbdekmmmcbfjd?hl=en)
After it is installed, alter the options for this extension in Chrome:
<li>Window->Extensions
<li>Find RSS Subscription Extension (by Google) and click Options
<li>In “RSS Subscription options” click add
<li>Enter:
<li>Description: Feedly
<li>URL: http://www.feedly.com/home#subscription/feed/%s

Make sure this is the default selection, and click “Always use my default reader when subscribing to feeds.”

Now, anytime you are on a website with an RSS feed, the RSS logo will appear at the right of the location/search bar.  Clicking on the logo will take you to feedly to add the RSS feed to your list.

3) Add RSS feeds for journals. 

This is a just  first step - don’t worry you will get a broader range of journals through keyword, author and citation based searches!

Now that the Chrome extension is set up, go the websites of your favourite journals - if there is an RSS logo in the location bar, add it.  If not, search for RSS in the text (this is especially bad for the Cell Press family).  I suggest making a quick list first of the journals you want to hit first.  Below is my list, followed by the url for the RSS feed so you can just copy and paste it into the “add content” bar in feedly.

The big/weekly/general interest journals (everyone cares):
<li>Nature -http://www.nature.com/nature/current_issue/rss
<li>Science - http://www.sciencemag.org/rss/current.xml
<li>Cell - http://rss.sciencedirect.com/publication/science/00928674
<li>eLife - http://elife.elifesciences.org/rss/recent.xml
<li>PLoS Biology - http://www.plosbiology.org/article/feed
<li>PNAS - http://www.pnas.org/rss/current.xml

biweekly/npg/baby plos/etc (most people probably care):
<li>Nature Methods: http://www.nature.com/nmeth/current_issue/rss
<li>Molecular Systems Biology: http://www.nature.com/msb/current_issue/rss/
<li>Nature Genetics: http://feeds.nature.com/ng/rss/current
<li>NSMB: http://www.nature.com/nsmb/current_issue/rss
<li>Nature ChemBiol: "http://feeds.nature.com/nchembio/rss/current
<li>PLoS Genetics: http://www.plosgenetics.org/article/feed
<li>PLoS CompBio: http://www.ploscompbiol.org/article/feed
<li>Science Signalling: http://stke.sciencemag.org/rss/current.xml
<li>Cell Reports: http://rss.sciencedirect.com/publication/science/22111247
<li>Molecular Cell: http://rss.sciencedirect.com/publication/science/10972765

a few specific to my field (you and your colleagues care):
<li>ActaCrystD: http://journals.iucr.org/d/rss10.xml
<li>JBiolNMR: http://www.springerlink.com/content/102922/?sortorder=asc&amp;+export=rss
<li>Current opinion in structural biology: http://rss.sciencedirect.com/+publication/science/0959440X
<li>Protein Science: http://www3.interscience.wiley.com/rss/journal/121502357
<li>Structure: http://rss.sciencedirect.com/publication/science/09692126
<li>Biochemistry: http://pubs.acs.org/wls/alerts/rss/bichaw.rss
<li>JMB: http://rss.sciencedirect.com/publication/science/00222836

*note*: for the Cell Press Journals, I use the ScienceDirect Feeds rather than the ones that go to the journal itself.  This is because Cell stopped updating their RSS feeds for a brief period earlier in 2013 and UCSF only has access through ScienceDirect anyway.

4) Add custom searches from pubmed

For some journals, I really only care about a subset of the stuff that is published. For example, there is a lot of organic chemistry in JACS that I don’t care about, but I generally want  to read anything in JACS that has the word protein in it. Narrower searches could be useful for PLoS1, etc. It just requires a little sleuthing to figure out the Pubmed Abbreviation for the Journal. To set this up search described above, enter into the pubmed seach bar: “"J Am Chem Soc"[Journal] AND protein” and click on the RSS logo under the pubmed search bar (not on the location bar). Then, add the url for that search to feedly:

http://eutils.ncbi.nlm.nih.gov/entrez/eutils/erss.cgi?rss_guid=0ht3efJvo9Hq3At6XO-qXnFhj1CwHy-Eb84dXls1aXt

Similarly, you can use Pubmed to set up RSS feeds to follow your favourite scientists and friends. Just search pubmed for their name “Fraser JS” for example and click on the RSS logo.  I have feeds for most of the people in my department, my collaborators, people whose work I really admire, etc.

Finally, keywords in pubmed. I recommend trying out a few searches first. But anything that has less than 20 new papers published per week is pretty manageable. 

5) Add citation-based searches. 

This is a bit trickier and relies on ISI Web of Knowledge.  I have these set up for most of my papers and papers published by others that I care a lot about. Instructions are (here)[http://images.webofknowledge.com/WOK45/help/WOK/h_citalerts.html]

I wish google would implement this for google scholar - they have email alerts, but not RSS. You can use an (email to rss converter)[http://emails2rss.appspot.com/] to help with this.

6) Isn’t there some redundancy?

Yes - but that presents more opportunities to actually read an important paper.

7) How long does this take to set-up?  

~15 minutes. Plus, anytime you want to add a new search for a new author or new journal, you can just add the feed.

###How to move through RSS feeds efficiently:

Separate reading titles, sorting abstracts, and reading papers into distinct tasks at distinct times

####Titles, while walking around:

I scan through the titles from RSS feeds very quickly. I have a good RSS reader on my phone (Byline, which I prefer to Feedly’s native app) that syncs with feedly. Whenever I am walking, I use byline to swipe through article titles and star the ones with interesting sounding abstracts. I generally sneak a peek at the author list too and save based on authors. 

Similarly, when I’m on my computer, I scan through titles very quickly using keyboard shortcuts (j for next, k for previous) and save articles for later (keyboard shortcut “s”).  

####Abstracts, while sitting and waiting:

When I have small pockets of time (usually waiting for someone or sitting somewhere), I go into my saved folder (on the phone or computer) and read the abstracts.  If I have a lot of time (more than 5 minutes) and am at my computer, I will open the interesting ones in the background 

(install (this extension)[https://chrome.google.com/webstore/detail/feedly-background-tab/gjlijkhcebalcchkhgaiflaooghmoegk]

and then the keyboard shortcut is “;”) - 

This keeps the focus on the abstracts and doesn’t require touching the mouse or trackpad.  I get into a rhythm of hitting “j” (then “;”) then “s” to advance (, open) and unstar an article.  If I’m on my phone or don’t have a lot of time, I just unstar the ones that no longer interest me. 

####Reading, while you have >5 minutes at your computer:

When I have time (generally first thing in the AM and on weekends) - I open up background tabs for all the articles have survived in my saved folder and start scanning through them.  I’m a fairly fast reader and have learned to get a lot out of scanning articles.  I don’t read many articles carefully, but I get a good idea of what is going on in the literature based on...

####My 80-20 theory of the literature:

I scan through all the articles in my RSS feeds and save ~20% of the titles to read the abstracts (1-3 seconds per paper). This is done on my phone or on my computer.

Of the papers I read the abstracts for, I open the full article for ~20% (5-10 seconds per paper).  I read abstracts on my phone or my computer. If I’m on my computer, I will often go through the rest of the steps. If I’m on my phone, I simply unstar the ones I don’t want to read and come back to the full text when I’m at my computer.

Of the papers I open to scan through the figures and headings, I decide that ~20% of the articles are actually worth reading (15-45 seconds per paper).  

Of the papers I read, I bail part way through most of them and read every word for about 20% of the papers (1-3 minutes when I bail, 3-15 minutes when I read the whole paper).

Of those, I study about 20% of those papers by reading them multiple times and looking through references, thinking critically about the figures/controls, etc (20 minutes-2 hours per paper - only 1-2 papers per week get to this stage). Occasionally I will print these papers on to paper and/or save the PDF to read later. 

Of the references I look up, I probably end up scanning 20%, reading 20% of that, etc. This allows me to engage with past literature and pick up on important papers I may have missed otherwise.

This strategy keeps me aware of what is being published and gives me a partial knowledge of what many of the papers in look like, what kind of conclusions people are drawing, what techniques are emerging, etc.  I think it helps me develop a broad knowledge of what is going on in the literature and allows me to focus on a small subset of papers to read deeply.

Is the 80/20 number totally made up? Yes. Many weeks it might end up as 95/5 in some steps and 50/50 in others.  It’s just a guideline that makes me very comfortable in abandoning papers at any point in the process.

###Why I don’t use Mendeley or Papers or anything else.

I’ve never been the type to take notes on physical paper or even on PDFs.  For this purpose, I imagine these applications are quite useful. I also think the amount of time people spend categorizing and organizing papers is better spent reading titles, abstracts, and papers. With pubmed searches and a good memory for author names, you are never more than 5 seconds from finding the paper anyway. I like the idea of Pubchase using this information to prioritize a feed of articles - but wish they would embrace RSS feeds as a way to stay on top of the literature.  

###Ok - I actually do use Papers.

-but only for citations (it is much better than endnote).  I don’t pay attention to my Library at all.  I just search in a browser window for what I want, copy the pubmed ID and then import based on that into my library.  Then I generally use PMID for finding and inserting the references.
