---
layout: post
title: "Know when to co-fold'em"
date: 2025-12-29 00:00:00
---

I'm really excited to share a [new preprint](https://doi.org/10.64898/2025.12.25.696505) that benchmarks AlphaFold3 (AF3) and other related "co-folding" methods with two new stringent tests.

A lot of the recent excitement around methods like AF3 (and followup methods which I often group as **YAAFCs** - Yet Another Alpha Fold Clone) has been the promise of modeling ligand-bound complexes directly with only a sequence and a SMILES string as input. There is also a feeling that the information within the various layers of the YAAFC architecture should reflect not only the structure, but also the affinity of the resulting complex. This idea is reflected in the "affinity module" of Boltz-2 and likely other models to come.

## Two papers that shaped my thinking

But it is difficult to tell what AF3 and the YAAFCs have actually learned! Two of the most impactful papers, for me personally, that I read this year were:

1. [**Have protein-ligand cofolding methods moved beyond memorisation?**](https://www.biorxiv.org/content/10.1101/2025.02.03.636309v3). From this paper, I learned how hard it is to design a truly good test set (memorization is a pain!). Co-folding seems far from generalizing to distant complexes with the same level of performance that we've come to expect from "folding" (aka structure prediction) alone. To put it another way, we might reasonably expect the structure for proteins with only 10% sequence identity to anything in the training set to be accurately predicted, but, we should not expect ligands that are very distant to anything in the training set (or especially ligands being predicted into binding sites that are distant to anything in the training set) to be accurately predicted. We enjoyed this one so much that we wrote an [unsolicted peer review](https://prereview.org/reviews/15708197) on it! 

2. [**Investigating whether deep learning models for co-folding learn the physics of protein-ligand interactions**](https://www.nature.com/articles/s41467-025-63947-5). From this paper, I learned that these models have not learned any physics yet! The authors performed cool experiments by mutating active sites in silico to wreck complexes (putting Trp residues in the middle of binding sites) and found that the YAAFCs still put the ligands in the canonical binding sites. Even if these models aren't generalizing that well (see paper 1), it makes me question "how" deep learning methods are getting anything right that isn't straight out of the training set. Given the huge computational cost per complex, how can we reconcile this performance vs. cheaper methods like virtual screening/docking, that make simplifications, but are at least trying to mimic physics.

The overall big take away from these for me is that it is really really hard to benchmark YAAFCs and tell what the state of the art is. This take away is made even more frustrating by the fact that new models are being announced at breakneck speeds (occasionally without anything but a press release to back up the claims of improved performance over AF3)!

## Why we could test this

Earlier in the year, we realized we were in a position to test some of these ideas due to the amazing structural biology enablement in our Mac1 project (and by enablement here, I really mean the work of Galen Correy!). On our way to an [in vivo active molecule](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC12629595) and [improving the PK to make an orally bioavailable lead](https://pubmed.ncbi.nlm.nih.gov/41406955/), we solved hundreds of X-ray structures of Mac1 bound to different ligands. In fact, Galen was so efficient at this, that we often determined the structures of molecules that didn't even meet the affinity criteria for full dose response curves. We realized we had >500 structures that we weren't otherwise going to publish!

So, we teamed up with Jongbin Kim in our friend Brian Shoichet's lab to compare the performance of co-folding (AF3 and two YAAFCs: Chai-1 and Boltz-2) and traditional docking (aka "physics-ish").

## Test 1

Test 1 was to work on these 557 ligand-protein complexes. More often than not, the "co-folding" methods get the complex correct (AF3 performs better than Chai, which performs better than Boltz). Traditional docking doesn't do quite as well, getting about 40% of the complexes. This is judged by the 2Å standard of the field, which I think is a pretty generous benchmark. Certainly this is good enough to get some ideas right about what to do next, but in most cases will lead you astray when trying to get real SAR. Even when ligand placement is often right, we see consistent limitations in capturing protein conformational adaptations that matter for interpretation and design. However, there is a (sizable) population of complexes for AF3 where the accuracy is sub-Å. The performance of the YAAFCs is helped by the large training set of fragments from the [original Mac1 screen](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC8046379), which we deposited before the cutoff date. So I think this represents a best case scenario for the current methods. 

## Test 2

Test 2 was to look at whether co-folding confidence or affinity predictions could categorize small molecules as "hits" or non-binders. For Mac1, Brendan Hall and Jongbin found some correlation between the co-folding confidence metrics and affinity. This correlation was also present for DOCK score and was strongest for the Boltz-2 affinity module (although this may be somewhat tainted by the training data including compounds featured of our [subsequent](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC9926234) [manuscripts](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC12118597) on Mac1). To explore this idea further, they used three previously published prospective docking campaigns (AmpC, D4, and σ2) from the Shoichet lab. In each of these cases, hundreds of molecules were synthesized and tested. Importantly, they chose molecules with high diversity and from a high range of DOCK scores, so we expect many to be non-binders. Here, we found that co-folding does not consistently improve the separation of ligands from non-binders relative to docking alone. The Boltz-2 affinity module performs about as well as docking. We also note a closely related preprint from Jiankun Lyu's lab: **Menon et al., **[**“AlphaFold3 for ***Structure-guided Ligand Discovery,”**](https://doi.org/10.64898/2025.12.04.692352), which evaluates AF3 in these same docking campaigns and also includes a very cool prospective σ2 head-to-head screen.

## So where are we with co-folding? 

I think the Mac1 case represents a "best case" for early hit-to-lead use and right now. AF3 performs better than YAAFCs, but misses enough complexes and conformational changes that it isn't close enough to be an experiment replacement. Our work, and the related work from [**Jiankun Lyu's lab at Rockefeller**](https://www.rockefeller.edu/our-scientists/heads-of-laboratories/10783-jiankun-lyu/), also suggests that conventional docking and co-folding could be complementary to enrich intial hit lists to find promising starting points. 

My final takeaway: it is way easier to generate predictions at scale than to make measurements at scale. But to know which methods make predictions worth following, we are going to need to make a lot more measurements like the ones done here!
