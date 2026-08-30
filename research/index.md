---
title: Research
layout: default
group: research
description: How the Fraser Lab models protein conformational ensembles - ensemble modeling, high-throughput structural biology, frontier crystallography, deep learning - and the questions we apply them to.
---

# Our research

The long-term goals of our research are to understand how protein conformational ensembles are reshaped by chemical, genetic, and physical perturbations. We seek to quantify how these perturbations impact protein function and organismal fitness. We are best known for creating multitemperature X-ray data collection approaches, which are especially powerful when paired with multiconformer computational modeling to reveal otherwise inaccessible features of conformational ensembles. Our group integrates high resolution structural biology (X-ray, EM, NMR), functional studies (deep mutational scanning, enzymology), and computation to study biological mechanisms and to improve protein engineering and small molecule discovery. Group members move fluidly between computation and experiment, often inventing new methods to answer questions across biology and medicine.

> We work on many different systems and proteins as we find ourselves drawn, again and again, to the tension of high resolution data in structural biology: as resolution gets better, modeling becomes easier… until the resolution gets too good… and then the ensemble begins to reveal itself and the fun challenges begin.
{: .blockquote .lead}

<nav class="section-index" aria-label="Research sections">
<div>
<p class="idx-label">Technical Pillars</p>
<p class="idx-blurb">The methods that recover and directly model alternative states.</p>
<ul>
<li><a href="#ensemble-modeling">Ensemble modeling</a></li>
<li><a href="#high-throughput-structural-biology-for-molecular-design">High-throughput structural biology</a></li>
<li><a href="#frontier-crystallography">Frontier crystallography</a></li>
<li><a href="#deep-learning-for-function-prediction">Deep learning for function prediction</a></li>
</ul>
</div>
<div>
<p class="idx-label">Research Questions</p>
<p class="idx-blurb">The mechanisms and molecules we pursue with those methods.</p>
<ul>
<li><a href="#adp-ribosylation">ADP-ribosylation</a></li>
<li><a href="#enzyme-design">Enzyme design</a></li>
<li><a href="#the-avoid-ome">The Avoid-ome</a></li>
<li><a href="#modulators-for-neurobiology">Modulators for neurobiology</a></li>
</ul>
</div>
</nav>

<div class="row">
<div class="col-md-8 offset-md-2">
<div class="video-container"><iframe src="https://www.youtube.com/embed/-Ktfy6SPZh4?si=ClIuk79KpKqFEU-P" title="James' Carl Brändén Plenary Award Lecture at the 2025 Protein Society Meeting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p class="smalltxt text-muted text-center mt-3"><a href="https://www.youtube.com/watch?v=-Ktfy6SPZh4">James' Carl Brändén Plenary Award Lecture at the 2025 Protein Society Meeting</a></p>
</div>
</div>

---

## Part I. Technical Pillars

Macromolecules populate ensembles of alternative conformations, but most structural models flatten this heterogeneity into a single average. We call the branch of structural biology that breaks the one-to-one mapping of model to dataset, and describes distributions instead, **statistical structural biology**.

<div class="row">
<div class="col-md-7 order-md-1">

### Ensemble modeling

High resolution X-ray and cryo-EM data carry more information than a single coordinate per atom can express. Within one dataset there are multiple conformational and compositional states, which we currently squeeze into altlocs.

We have developed [qFit](https://github.com/ExcitedStates/qfit-3.0), which builds multiconformer models automatically from X-ray and cryo-EM maps, and using it to represent that heterogeneity measurably improves the fit to the data. We are also building [sampleworks](https://github.com/prism-science/sampleworks), which exposes any frontier predictor behind a common interface and binds an experimental observable as a loss, guiding generation toward the states the data support. In parallel we are working with the wwPDB on mmCIF standards that encode heterogeneity explicitly, so ensembles are machine-readable rather than lost at deposition. Collectively, these methods are teaching us how much structure real data still hold. They also show us where frontier predictors break. Left to themselves, these models collapse onto whichever conformation dominated their training set. Even when guided by density, their occupancies track that training frequency rather than the experiment. Those failures are diagnostic. They tell us what the next generation of ensemble-aware models will need.

*Support: NIH MIRA, and Radial, part of the [Astera Institute](https://ror.org/00ydx1s47).*

</div>
<div class="col-md-5 order-md-2 align-self-center">

![Sampleworks ensemble generation](/static/img/pub/2026_chrispens.png){: .img-fluid}

</div>
</div>

<div class="row">
<div class="col-md-7 order-md-2">

### High-throughput structural biology for molecular design

Crystallographic fragment screening is now a primary binding assay that can be performed "at risk" to identify hits. Soaking thousands of compounds into a crystal system reads out where and how each one binds, including the cryptic and allosteric pockets that activity assays never reveal.

We have deposited more than a thousand datasets this way and use them to test whether predicted breakthroughs are real, most directly in large prospective benchmarks of ligand-bound complexes. The same approach extends to cryo-EM, where our small-molecule complexes resolve heterogeneity in both the ligand and the macromolecule. Collectively, these campaigns are teaching us that the bottleneck is moving from experiment to computation. Soaks yield partially occupied, partially rearranged pockets that current pipelines cannot faithfully represent. Solving that feeds into prospective drug design applications, where the structures and models we build guide the next molecules we make.

*Support: NIH MIRA, DOE Genesis Mission, NIH AViDD, and the Gates Foundation.*

</div>
<div class="col-md-5 order-md-1 align-self-center">

![High-throughput structural biology for molecular design](/static/img/pub/2025_herasymenko.jpg){: .img-fluid}

</div>
</div>

<div class="row">
<div class="col-md-7 order-md-1">

### Frontier crystallography

Cryocooling quiets the very motions we want to study, remodeling the conformational distribution before we ever see it.

We pioneered multitemperature data collection, which recovers states and temperature-driven shifts that cryogenic data quietly erase. We measure diffuse scattering, the faint signal between and beneath the Bragg peaks that most experiments discard, because it reports directly on the correlated motions of atoms moving together. And we use time-resolved approaches to follow an ensemble as it changes, catching intermediates that otherwise exist only as trapped mutants. Neutron crystallography complements all three by placing protons and settling tautomer states. Collectively, these experiments are teaching us how conformational heterogeneity connects to function, from catalytic mechanism to binding entropy and allosteric regulation.

*Support: NIH MIRA, and Radial, part of the [Astera Institute](https://ror.org/00ydx1s47).*

</div>
<div class="col-md-5 order-md-2 align-self-center">

![Frontier crystallography resolving protein motions](/static/img/pub/2022_wolff.png){: .img-fluid}

</div>
</div>

<div class="row">
<div class="col-md-7 order-md-2">

### Deep learning for function prediction

Deep mutational scanning gives us a scalable perturbation. Mutation allows us to probe energetics at a scale far beyond what our structural approaches reach.

We have built systematic drug resistance maps and used them to ask whether protein language models and co-folding models have actually learned the interactions that govern protein-ligand recognition. They have not! This suggests that the models have only memorized generic features. Collectively, these benchmarks are teaching us that the limitation is data, not architecture. We are augmenting these models with ensemble information to see whether improved representations can augment existing models.

*Support: NIH MIRA and DARPA (NODES).*

</div>
<div class="col-md-5 order-md-1 align-self-center">

![Deep mutational scanning analysis](/static/img/pub/2025_rao.png){: .img-fluid}

</div>
</div>

---

## Part II. Research Questions

The precision that remains uniquely accessible to experiment spins out into applications. These are the mechanisms and molecules we pursue, where conformational distributions turn out to be the key to function.

<div class="row">
<div class="col-md-7 order-md-1">

### ADP-ribosylation

We came to ADP-ribosylation biology through Mac1, the SARS-CoV-2 macrodomain, and stayed for the mechanism. A focused discovery effort, in collaboration with the Ashworth lab and the wider QCRG AVIDD center, produced orally efficacious inhibitors.

Now we follow this chemistry across the tree of life. Writers install ADP-ribose marks, readers recognize them, and erasers (like Mac1) take them off. Viral, bacterial, and human enzymes all catalyze these reactions. We are assembling a full description of the Mac1 catalytic cycle from crystallography, enzymology, and NMR. We are also interested in human PARPs such as PARP14 that encode writer, reader, and eraser activities in different domains of a single protein. How those domains regulate one another allosterically is the question we most want to answer.

*Support: NIH MIRA and NIH AViDD.*

</div>
<div class="col-md-5 order-md-2 align-self-center">

![Surface view of the SARS-CoV-2 Mac1 macrodomain with fragments bound in the adenosine pocket](/static/img/pub/2022_gahbauer_correy.gif){: .img-fluid}

</div>
</div>

<div class="row">
<div class="col-md-7 order-md-2">

### Enzyme design

Deep-learning design now routinely generates stable scaffolds at 1.0 Å accuracy, but catalysis requires 0.1 Å precision. Current pipelines rely on assumed active-site geometries, so they begin from subtly flawed premises and need extensive directed evolution to recover native-like activity.

Structure-seeded design inverts that order: generate crystallizable de novo scaffolds, soak them against fragments that mimic substrate and transition-state geometries, and use the poses we actually observe to seed installation of catalytic residues. Working with the DeGrado lab, we became fascinated by the unintentional promiscuity of designed proteins, and found that weak, promiscuous fragment complexes with a de novo binder were excellent starting points for entirely distinct activities. Gains often come through improved substrate binding and product release rather than a reshaped transition state, an idea we are now exploring further with the Kortemme lab.

*Support: DOE Genesis Mission.*

</div>
<div class="col-md-5 order-md-1 align-self-center">

![Fragment screening of a designed protein seeds a highly active artificial enzyme](/static/img/pub/2025_chen.jpg){: .img-fluid}

</div>
</div>

<div class="row">
<div class="col-md-7 order-md-1">

### The Avoid-ome

Roughly a third of clinical failures trace back to unpredictable ADMET properties, and those properties are governed by a finite set of proteins a drug is trying to avoid: the CYP enzymes, transporters, and receptors we call the Avoid-ome. We treat that set as a target rather than an afterthought.

Through [OpenADMET](https://openadmet.org) we generate pre-competitive, mechanistic datasets by coupling high-throughput assays with structural biology and active learning, choosing the most informative next experiment rather than screening blindly. Anti-targets like CYP3A4 and PXR feed straight back into our modeling work, since they supply ligand-bound structures at scale where ground-truth interpretations already exist. Everything is built to be shared rather than locked behind a company firewall.

*Support: The OpenADMET consortium is funded by ARPA-H, the Gates Foundation, Radial (part of the [Astera Institute](https://ror.org/00ydx1s47)), and the OpenAI Foundation.*

</div>
<div class="col-md-5 order-md-2 align-self-center">

![Mapping the avoid-ome](/static/img/pub/2026_fraser.jpg){: .img-fluid}

</div>
</div>

<div class="row">
<div class="col-md-7 order-md-2">

### Modulators for neurobiology

Many proteins implicated in Parkinson's disease and other neurological conditions are pharmacologically orphaned: important biologically, but without the chemical tools needed to study or drug them. Simple active-site inhibition is often the wrong move, because the biology calls for activators, stabilizers, molecular glues, or degraders.

We take an activity-agnostic route. Fragments identified by our lab using high-throughput X-ray crystallography provide binding footholds that can be elaborated into any of those modalities. Working with partners across UCSF and beyond, we build open, well-characterized probes for a structurally diverse set of targets and distribute them without IP barriers.

*Support: ASAP CRN and ARIA.*

</div>
<div class="col-md-5 order-md-1 align-self-center">

![Protein interaction network rewiring in neurodevelopment](/static/img/pub/2026_wang_2.jpg){: .img-fluid}

</div>
</div>

---

## Open science

We also continue to push boundaries of open science. With open principles, our work embodies a flywheel: scalable experiments expose where current AI breaks, and the resulting structural and chemical-genetic data feed back into the next generation of ensemble-aware predictions. For us, structural biology is not the end goal but the hypothesis generator that drives the cycle forward.
