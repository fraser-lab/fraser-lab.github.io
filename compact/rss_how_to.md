---
title: How to use RSS to follow the Scientific Literature
layout: default
group: compact
---

We reject the idea that it is impossible to “stay on top of the literature”. Scanning and reading papers is one of our most important and enjoyable responsibilities as scientists. The backstory is explained in [an older post](https://fraserlab.com/2013/09/28/The-Fraser-Lab-method-of-following-the-scientific-literature/) that editorializes on why this approach is superior to just leveraging twitter, relyiing on emailed tables of contents, or spending a lot of time organizing PDFs in apps like Mendeley. This page serves as a focused and updated “how to” guide on using RSS and efficiently scanning the literature.

### The 80-20 theory of the literature

We navigate the literature at different levels and must become comfortable with two things: 1) not progressing the vast majority of articles past each level and 2) abandoning an article in the middle of each level. The first, level is reading titles of articles, the second is reading abstracts, the third is scanning figures and headings, the fourth is reading the article, and the fifth is studying the article (including reading articles it cites!). At each stage, aim to to progess less than 20% of the articles to the next stage - said another way, aim to reject at least 80% of the articles! Your goal is to only save those that are interesting and to segregate those activities that can be done without much mental engagement (stages 1-2, can be easily done on your phone, for example) from those that require focus (generally 3 and 4 - and most certainly 5 require deeper concentration).

For example, it generally takes me less than a second to make a decision on whether a title is worth the "save for later" designation - and less than 20% pass that threshold! Of these papers I read the abstracts (5-10 seconds per paper) and decide to open the full article for less than 20%.  I can read abstracts on my phone or my computer. If I’m on my computer, I will often go through the rest of the steps. If I’m on my phone, I simply unstar the ones I don’t want to read and leave the other ones stared to engage with the full text when I’m at my computer.

Of the papers I open to scan through the figures and headings, I decide that ~20% of the articles are actually worth reading (15-45 seconds per paper).   Of the papers I read, I bail part way through most of them and read every word for about 20% of the papers (1-3 minutes when I bail, 3-15 minutes when I read the whole paper). Of those, I study about 20% of those papers by reading them multiple times and looking through references, thinking critically about the figures/controls, etc (20 minutes-2 hours per paper - only 1-2 papers per week get to this stage). Of the references I look up, I probably end up scanning 20%, reading 20% of that, etc. This allows me to engage with past literature and pick up on important papers I may have missed otherwise.

This strategy keeps me aware of what is being published and gives me a partial knowledge of what many of the papers look like, what kind of conclusions people are drawing, what techniques are emerging, etc.  I think it helps me develop a broad knowledge of what is going on in the literature and allows me to focus on a small subset of papers to read deeply. Is the 80/20 number totally made up? Yes. Many weeks it might end up as 95/5 in some steps and 50/50 in others.  It’s just a guideline that makes me very comfortable abandoning papers at any point in the process.

### How to set up RSS feeds

The intial filter of titles relies on RSS. There are many RSS readers. This guide focuses on Feedly, but there are others, such as [The Old Reader](http://theoldreader.com/) that can also work.

* [Create a feedly account](http://cloud.feedly.com/#start)
* Add RSS feeds into Feedly for preprints.
  * Start with preprints in your broad subject area:
    * [BioRxiv Biophysics](https://connect.biorxiv.org/biorxiv_xml.php?subject=biophysics)
    * [BioRxiv Biochemistry](http://connect.biorxiv.org/biorxiv_xml.php?subject=biochemistry)
  * Add keyword and author search from BioRxiv:
    * use an [email to rss converter](https://www.kill-the-newsletter.com/) to help with this. This will give you an email address associated with your custom RSS feed. Save the email address and import the RSS feed into feedly.
    * Use [BioRxiv Alerts](https://www.biorxiv.org/alerts) to notify you for any keywords or authors that interest you.
  * For Arxiv, there's an export API with [different query construction rules](https://arxiv.org/help/api/user-manual#query_details). This lets you build fun searches like [`contains (ligand, drug, molecule, compound, OR bioactivity) AND (network OR ((deep OR machine) AND learning))`](http://export.arxiv.org/api/query?search_query=all:%28ligand+OR+drug+OR+molecule+OR+compound+OR+bioactivity%29+AND+%28network+OR+%28%28deep+OR+machine%29+AND+learning%29%29).
* Add citation-based searches from google scholar
  * Use the same email to RSS address to follow new articles or **citations** to new articles in google scholar by clicking follow on any author page. Note that the confirmation email to allow notifications comes through RSS and you will need to click "Confirm"!
* Add custom searches From pubmed
  * For some journals, I really only care about a subset of the stuff that is published. For example, there is a lot of organic chemistry in JACS that I don’t care about, but I generally want  to read anything in JACS that has the word protein in it. Narrower searches could be useful for PLoS1, etc. It just requires a little sleuthing to figure out the Pubmed Abbreviation for the Journal. To set this up search described above, enter into the pubmed seach bar: `"J Am Chem Soc"[Journal] AND protein` and click on the RSS logo under the pubmed search bar (not on the location bar). Then, add the url for that search to feedly: <http://eutils.ncbi.nlm.nih.gov/entrez/eutils/erss.cgi?rss_guid=0ht3efJvo9Hq3At6XO-qXnFhj1CwHy-Eb84dXls1aXt>
  * Similarly, you can use Pubmed to set up RSS feeds to follow your favourite scientists and friends. Just search pubmed for their name “Fraser JS” for example and click on "Create RSS", just under the search bar.  I have feeds for most of the people in my department, my collaborators, people whose work I really admire, etc.
  * Finally, keywords in pubmed. I recommend trying out a few searches first. But anything that has less than 20 new papers published per week is pretty manageable.

* Add journals (we can debate the value of journals separately):
  * The broad ones:
    * Nature - <http://www.nature.com/nature/current_issue/rss>
    * Science - <http://www.sciencemag.org/rss/current.xml>
    * Cell - <http://rss.sciencedirect.com/publication/science/00928674>
    * eLife - <http://elife.elifesciences.org/rss/recent.xml>
    * PLoS Biology - <https://journals.plos.org/plosbiology/feed/atom>
    * PNAS - <http://www.pnas.org/rss/current.xml>
  * The biweekly/baby ones:
    * Nature Methods: <http://www.nature.com/nmeth/current_issue/rss>
    * Molecular Systems Biology: <http://msb.embopress.org/rss/current.xml>
    * Nature Genetics: <http://feeds.nature.com/ng/rss/current>
    * NSMB: <http://www.nature.com/nsmb/current_issue/rss>
    * Nature ChemBiol: <http://feeds.nature.com/nchembio/rss/current>
    * PLoS Genetics: <http://www.plosgenetics.org/article/feed>
    * PLoS CompBio: <http://www.ploscompbiol.org/article/feed>
    * Science Signalling: <http://stke.sciencemag.org/rss/current.xml>
    * Cell Reports: <http://rss.sciencedirect.com/publication/science/22111247>
    * Molecular Cell: <http://rss.sciencedirect.com/publication/science/10972765>

  * Field specific ones: 
    * ActaCrystD: \[add manually by searching in Feedly\]
    * JBiolNMR: <https://link.springer.com/search.rss?facet-content-type=Article&facet-journal-id=10858&channel-name=Journal+of+Biomolecular+NMR>
    * Current opinion in structural biology: <https://rss.sciencedirect.com/publication/science/0959440X>
    * Protein Science: <https://onlinelibrary.wiley.com/feed/1469896x/most-recent>
    * Structure: <http://rss.sciencedirect.com/publication/science/09692126>
    * Biochemistry: <http://feeds.feedburner.com/acs/bichaw>
    * JMB: <http://rss.sciencedirect.com/publication/science/00222836>

This is not an exhuastive list, add journals, people, etc liberally. Once you get used to sorting through the literature every day, you will find that you do not get overwhelmed. You can always "amnesty" and start fresh at any time by clicking "mark all read" and starting again. RSS is wonderful!
### Isn’t there some redundancy?

Yes - but that presents more opportunities to actually read an important paper.

### How to move through RSS feeds efficiently

Separate reading titles, sorting abstracts, and reading papers into distinct tasks at distinct times

#### Titles, while walking around

I scan through the titles from RSS feeds very quickly. I have a good RSS reader on my phone (Feedly’s native app) that syncs with Feedly’s web version. Whenever I am walking, I use the app to swipe through article titles and star the ones with interesting sounding abstracts. I generally sneak a peek at the author list too and save based on authors.

Similarly, when I’m on my computer, I scan through titles very quickly using keyboard shortcuts (`j` for next, `k` for previous) and save articles for later (keyboard shortcut `s`).  

#### Abstracts, while sitting and waiting

When I have small pockets of time (usually waiting for someone or sitting somewhere), I go into my saved folder (on the phone or computer) and read the abstracts.  If I have a lot of time (more than 5 minutes) and am at my computer, I will open the interesting ones in the background (install [this extension](https://chrome.google.com/webstore/detail/feedly-background-tab/gjlijkhcebalcchkhgaiflaooghmoegk) and then the keyboard shortcut is `;`).

This keeps the focus on the abstracts and doesn’t require touching the mouse or trackpad.  I get into a rhythm of hitting `j` (then `;`) then `s` to advance (, open) and unstar an article.  If I’m on my phone or don’t have a lot of time, I just unstar the ones that no longer interest me.

#### Reading, while you have >5 minutes at your computer

When I have time (generally first thing in the AM and on weekends) - I open up background tabs for all the articles have survived in my saved folder and start scanning through them.  I’m a fairly fast reader and have learned to get a lot out of scanning articles. I think this is an important skill to develop as a scientist.
