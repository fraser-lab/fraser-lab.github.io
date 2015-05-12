---
title: BP205
layout: default
group: pubs
---

#Biophysics 205A: Physical Underpinnings of Biological Systems#

##Fall 2015 Syllabus##

**Course Title:** Physical Underpinnings of Biological Systems (PUBS)

**Course Credit:** 4 units

**Course Format:** 12 hours of lab per week

**Location:** Genentech Hall Teaching Lab - Room 227

**Prerequisites:** All incoming first year iPQB and CCB graduate students are required to enroll in this course.

#Although TAs, instructors, and your fellow students will be happy to help out, it is important to be familiar with basic scripting and the principles of python PRIOR to starting the class.

This will be covered in bootcamp, but it is also a good idea to get a jump start during the summer (suggestions are listed below).

**Grading:** Letter grade

**Textbook:** None. Lab protocols and course materials will be available in class or online

**Course Days/Hours:** Monday, Tuesday, Wednesday 1pm-5pm

**Instructors:** James Fraser; [jfraser+bp205a@fraserlab.com](mailto:jfraser+bp205a@fraserlab.com)

**Course Coordinator:** David Mavor; [David.Mavor@ucsf.edu](mailto:David.Mavor@ucsf.edu)

**Mass Spectrometry Coodinator:** Danielle Swaney; [Danielle.Swaney@ucsf.edu](mailto:Danielle.Swaney@ucsf.edu)

**TAs:**

- [Ina Chen](mailto:Ina.Chen@ucsf.edu)
- [Evan Green](green.evan@gmail.com)
- [Lillian Kenner](lkenner@fraserlab.com)
- [Bruk Mensa](brukmensa@gmail.com)
- [Leanna Morinishi](Leanna.Morinishi@ucsf.edu)
- [Erin Poss](Erin.Poss@ucsf.edu)

**Lecturers/Facilitators:**

James Fraser, Danielle Swaney, Joe DeRisi, Martin Kampmann,... more to come
<!-- Hiten Madhani, Michael Keiser,
Sourav Bandyopadhyay, Jessica Lund, Eric Chow, Nadav Ahituv,
Ryan Hernandez, Elaine Meng, Bo Huang, David Morgan, Jason Gestwicki,
Kurt Thorn, Steven Altschuler, Lani Wu, Tanja Kortemme, Wendell Lim,
Adam Abate, Matthew Thomson, Dave Toczyski -->

**Important Dates:**

- Mass Spectrometry Presentation: Wednesday, October 14th
- NSF GRFP due???  (Chemistry) (Life Sciences)
- Deep Sequencing/Final presentations: Monday, November 23rd

**Background:**

"Precision Medicine" is an emerging theme in biomedical research and patient care, and refers to the use of genome-wide information, such as DNA sequence, expression profiling, metabolic labeling/imaging, and other technologies to better inform and ultimately customize therapy. For cancer medicine, discreet genomic changes can be tied directly to particular treatments, such as immunotherapies or small molecules directed against a mutated enzyme. However, the cancer genome is not necessarily a static entity, and may be subjected to intense selective pressures resulting in highly dynamic changes that manifest as relevant phenotypes, such as drug resistance or metastatic potential. Technological revolutions, such as DNA microarrays, followed by ultra-deep sequencing, have allowed high-resolution views of the genome and dynamical views of the expression programs they exhibit.

Despite the promise for personalized care, many challenges remain. The genome, its expression, and its translation into phenotype embody a highly complex and dynamic system, whether it is a cancer cell, a yeast cell, or even a virus. Mutations that drive a phenotype may not be necessarily distinguishable from those that are mere passengers, and the molecular determinants of large-scale alterations remain largely uncharacterized.

Ultimately, the goal is the synthesis of predictive models that can reveal fundamental regulatory principles, and in the case of patients, deliver actionable information for treatment, early detection, and prevention.

**Course Description:**

The course is a hands-on, project-based course that integrates proteomics, deep mutational profiling [(Fowler and Fields, _Nature Methods_, 2014)](http://www.ncbi.nlm.nih.gov/pubmed/25075907), and computational biology. The model organism, _Saccharomyces cerevisiae_, will be used as the organismal basis. Our goals are to experimentally determine the kinases responsible for phosphorylating ubiquitin and to measure the fitness of all possible individual point mutants of ubiquitin. Ubiquitin is an essential protein that is a key cellular integrator of stress, under a variety of experimental perturbations. The library of these point mutants was assembled by [Dan Bolon](http://profiles.umassmed.edu/profiles/display/133553) and verified during a summer visit to the Fraser lab. The course is organized around modules, described below. Each hands-on module will be accompanied by lectures (either "chalk talk" or with slides). Students will present short talks to the class covering the assigned protocols or summarizing literature related to the class.   In addition students are expected to conduct their own literature reviews during the course of the project. Students will work in small teams, and each team will be assigned a different set of kinases for initial analysis. Based on the results, the teams will design a perturbation experiment for deep sequencing.  Students are expected to remain in their teams for the duration of the course, although team-team collaboration is highly encouraged. All team members are expected to participate in each activity.

At the conclusion of the mass spec module and at the end of the class, each team will orally present their findings to the class and faculty, limited to 15 minutes and 15 slides maximum, with 10 minutes for discussion and questions. All members of the team are expected to speak and describe their contributions. These presentations are currently scheduled for Oct 14th and Nov 23rd, the final day of class.

Activities and speakers for each week will be announced at the beginning of each module.

<!-- **Module 1.** *Sept 29th – Oct 22nd*. Ultra-deep sequencing, and chemical genomics.

**Module 2.** *Oct 27th – Nov 5th*. Ensemble vs. single observation measurements.

**Module 3.** *Nov 10th – Nov 24th*. Computational biology and evolutionary constraints. -->



**Course Goals:**

The goal of the course is to provide an immersive, hands-on experience in the context of genuine research questions. As articulated by [Vale and colleagues](http://www.sciencemag.org/content/338/6114/1542.long), there are tremendous advantages when graduate students work "pursuing a research question with unknown answers and uncertain outcomes, students and faculty combine their wits and skills to design experiments, evaluate progress, and troubleshoot along the way". These advantages are likely to be common accross [all learning levels](http://blogs.kqed.org/mindshift/2014/09/can-project-based-learning-close-gaps-in-science-education/). In our course, teams may use whatever literature, software, and resources that are available publicly, and are encouraged to write their own scripts and software where necessary.

The "official" language of the class is [python](https://www.python.org) - beginners should try [Learn Python The Hard Way](http://learnpythonthehardway.org/book/), people with a background in other languages should try [Google's python course](https://developers.google.com/edu/python/). The QB3 Berkeley [intensive python course](http://intro-prog-bioinfo-2014.wikispaces.com/) provides many biological examples. Students should be comfortable with basic syntax and scripting prior to the start of instruction.

**Although TAs, instructors, and your fellow students will be happy to help out, it is important to be familiar with basic scripting and the principles of python PRIOR to starting the class.**

<!-- In **module 1**, #each team will be provided an "unknown" chemical perturbation. Using deep mutational profiling, each team will measure the fitness of all possible individual point mutants of ubiquitin, an essential protein that is a key cellular integrator of stress. Upon processing the sequencing data, each team willperform comparisons against a reference dataset.

In **module 2**, #teams will compare their data against the datasets of other teams and perform microscopy experiments to determine whether their stress response elicits a multimodal response in growth rate. This module will reinforce core concepts of ensemble vs. single observation measurements at many levels of biophysics and systems biology.

In **module 3**, #the teams will leverage interactions with Tanja Kortemme and members of her lab to perform protein design protocols to predict sequences optimized for multiple criteria. They will test how well their deep sequencing data matches with protein design profiles generated under different constraints such as: protein stability or maintaining interactions with specific mediators of stress responses. For the final presentations, teams will explain the unique features of their Ubiquitin mutant profile by grounding their analysis in specific protein-protein interactions along branches of the cellular proteostasis network. -->

**Student Learning Objectives**

- Laboratory safety
- Appropriate methods for documenting laboratory procedures
- Library prep and Ultra-Deep Sequencing
- Bioinformatics and algorithms
- Python scripting
- Experimental design and planning
- Yeast molecular biology
- Introduction to mass spectrometry

**Class Policies**

_Absences_: The instructor must be notified by the second week of classes for any planned absences, or in advance of class due to illness. Active participation in the laboratory is essential and students are required to attend normal class hours. Attendance during all of the three required presentations is absolutely mandatory, except in cases of doctor-excused medical illness. Any class material or lecture that is missed will be the responsibility of the student. Written evaluations of each team and its members will be provided to the Graduate Tracking System for inclusion into the graduate record, and provided to oral committee members and thesis committee members.

_Accommodations for students with disabilities:_ Please see the instructor as soon as possible if you need particular accommodations, and we will work out the necessary arrangements.

##Lab work, individual presentation schedule, and recommended reading

<!-- **Week 1 – Theme: Ubiquitin and Deep Mutational Profiling**

_Lab work: Measure doubling times as a function of small molecule perturbation concentrations_

Lecturers: James Fraser (9/29,9/30), Joe DeRisi (9/29), Hiten Madhani (10/1)  

Recommended reading:

- [(Fowler and Fields, 2014)](http://www.ncbi.nlm.nih.gov/pubmed/25075907)
- [(Finley et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/23028185)
- [(Roscoe et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/23376099)

Files for Computation:

- [Allele_dic.pkl](https://drive.google.com/file/d/0Bz5C8aG_xj4sc3g5V29LcXluSE0/edit?usp=sharing)
- [translate.pkl](https://drive.google.com/file/d/0Bz5C8aG_xj4sRVZVMU9RdUJoRkk/edit?usp=sharing)
- [aminotonumber.pkl](https://drive.google.com/file/d/0Bz5C8aG_xj4sa0dlbGczQnd5R3c/edit?usp=sharing)

Other Class Material:

- [Information about the server](/pubs/server/)
- [PDF of Lecture 1](https://drive.google.com/open?id=0Bx0d95RwVYufMFpUbTk1azcxUTQ&authuser=0)
- [Fred Sherman's "Getting started with Yeast"](https://instruct.uwo.ca/biology/3596a/startedyeast.pdf)
- [Transformation Protocol](https://docs.google.com/document/d/1-6-rbLosBYkAZI4EOcmwP8C2wDNiLE4OWvXjNS0Yfko/edit?usp=sharing)
- [Yeast Handout by Hiten Madhani](https://drive.google.com/file/d/0Bx0d95RwVYufUDhZdWxnU2pRTWs/view?usp=sharing)
- [Drug Concentration Protocol](https://docs.google.com/document/d/12Az3DGJlL4jZ2Rx5Y-xOM5y-EFrUIxhF5lf0DuWwiFE/edit?usp=sharing)

**Week 2 – Theme: Chemical Genetics**

_Lab work: Performing selection experiments under chemical stresses_

Lecturers: Michael Keiser (10/6), Sourav Bandyopadhyay (10/7), Eric Chow (10/8)

Recommended reading:

- [(Lemieux et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/24260022)
- [(Bandyopadhyay et al., 2010)](http://www.ncbi.nlm.nih.gov/pubmed/21127252)
- [(Aghajan et al., 2010)](http://www.ncbi.nlm.nih.gov/pubmed/20581845)

Other Class Material:

- [Sign up for CAT access](https://docs.google.com/forms/d/1Yr9Sv5713ntGnR-yAWfG_yWP4jkJ0UInIjwWlXz0b7U/viewform?c=0&w=1)
- [Protocol for library growth](https://docs.google.com/document/d/1OIC1oyDUla72RJlt5a6kquhzMdSC1IuGUyPyztDxddc/edit?usp=sharing)
- [Illustrated Protocol](https://drive.google.com/file/d/0Bx0d95RwVYufNk5palhZYmg0WHM/view?usp=sharing)
- [Promega Colony Counting App](http://www.promega.com/resources/mobile-apps/)
- [Zappy Lab Bench Tools](https://itunes.apple.com/us/app/zappylab-bench-tools/id731295151?mt=8)
- [Eric Chow Lecture Notes](https://drive.google.com/file/d/0Bx0d95RwVYufSDhReVRUckFJSFU/view?usp=sharing)

**Week 3 – Theme: Massive Functional Profiling**

_Lab work: Deep sequencing library preparation_

Lecturers: Nadav Ahituv (10/13), Journal Club (10/14), Ryan Hernandez (10/15)

Journal Club Assignments:

- [Chemical genetics screen for enhancers of rapamycin ...](http://www.ncbi.nlm.nih.gov/pubmed/20581845) - UBCELß
- [A fundamental protein property ...](http://www.ncbi.nlm.nih.gov/pubmed/23035249) - DUBSTEP
- [The spatial architecture of protein function](http://www.ncbi.nlm.nih.gov/pubmed/23041932) - KRATE
- [Recognition dynamics up to microseconds ...](http://www.ncbi.nlm.nih.gov/pubmed/18556554) - ATG
- [A proteomics approach to understanding protein ubiquitination ...](http://www.ncbi.nlm.nih.gov/pubmed/12872131) - YBUB

Recommended reading:

- [(Adzhubei et al., 2010)](http://www.ncbi.nlm.nih.gov/pubmed/20354512)
- [(Araya et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/23035249)
- [(Smith et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/23892608)

Other Class Material:

- [Ryan Hernandez Lecture Notes](https://drive.google.com/file/d/0Bx0d95RwVYufTGJRZXAtSjhOYTg/view?usp=sharing)
- [Yeast Miniprep protocol](https://docs.google.com/document/d/1zk_h_pS1Ikb1VfqSSx_ePHROVGu3dl55mJ_NSeYw3ss/edit?usp=sharing)
- [Illustrated Yeast Miniprep protocol](https://drive.google.com/file/d/0Bx0d95RwVYufLURGVWdpQnNYeUE/view?usp=sharing)
- [Library PCR protocol](https://docs.google.com/document/d/1KUXhrxh-QxumFcgfjUVXTdYNZq_956ZQ11zpUSxtGR0/edit?usp=sharing)
- [Gel extraction protocol](https://drive.google.com/file/d/0Bx0d95RwVYufb2MtUml0SU5OWms/view?usp=sharing)
- [Barcode Addition PCR protocol](https://docs.google.com/document/d/1US4qYUKqMY-s9H_ifFyWCCDQJfykd8Xmz4RwA8EBO7w/edit?usp=sharing)
- [Team and Time Specific Barcodes](https://docs.google.com/spreadsheets/d/1tEfTOXOHSn7MAwEFa_pVOB1hl1f_NqEjmi3tTbTvfJ8/edit?usp=sharing)
- [PCR cleanup protocol](https://drive.google.com/file/d/0Bx0d95RwVYufSGtfMXNZUjRXN3c/view?usp=sharing)
- [QBit Protocol](https://drive.google.com/file/d/0Bx0d95RwVYufM0xhZ01USllneHM/view?usp=sharing)
- [Final Library Hand-off Instructions](https://docs.google.com/document/d/1G3YY9Vu_Wk7EhnlTzQaXWyNiBv9dsUlrlWJZJoGg8BU/edit?usp=sharing)


**Week 4 – Theme: Sequence Conservation and Statistical Mechanics**

_Lab Work: Computational analysis of sequencing data_

Lecturers: Joe DeRisi (10/20), Elaine Meng (10/21), Bo Huang (10/22)

Recommended reading:

- [(Bystrykh, 2012)](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0036852)
- [(McLaughlin et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/23041932)
- [(Pei and Grishin, 2001)](http://www.ncbi.nlm.nih.gov/pubmed/11524371)
- [(Pollock et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/22547823)

Other Class Material:

- [Chimera Tutorial by Elaine Meng](http://www.rbvi.ucsf.edu/chimera/data/tutorials/systems/index.html)
- [Please Enter OD readings here](https://docs.google.com/spreadsheets/d/1tEfTOXOHSn7MAwEFa_pVOB1hl1f_NqEjmi3tTbTvfJ8/edit?usp=sharing)
- [Computation Refresher](https://docs.google.com/presentation/d/1GMJg5oZIrMgenp6726jASmwLrbFJkYwlJRf7B8nM9g8/edit?usp=sharing)
- [Information about the server](/pubs/server/)
- [Updated Allele Pickle File (including WT sequences)](https://drive.google.com/file/d/0Bx0d95RwVYufQmJVaHU0RTFnYXM/view?usp=sharing)
- [A Plasmid Editor (APE)](http://biologylabs.utah.edu/jorgensen/wayned/ape/)
- [APE file for Plasmid](https://drive.google.com/file/d/0Bx0d95RwVYufNzJTaGpDU2lOR0E/view?usp=sharing)
- [APE file for PCR product](https://drive.google.com/file/d/0Bx0d95RwVYufMUhpcFdqRnN2aG8/view?usp=sharing)
- [PCR Product Annotation](https://docs.google.com/document/d/12CGyjBaVTB1ncw00-yRyQl6Acga-LS7bfywvrpxLbNg/edit?usp=sharing)
- [Information about the format of your fastq files](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_FASTQFiles.htm)
- [Hamming Distance](http://en.wikipedia.org/wiki/Hamming_distance)
- [Using Matplotlib on the Server](/pubs/matplotlib_server/)

**Week 5 – Theme: Stress Response Networks**

_Lab Work: Comparisons of perturbations between teams_

Lecturers: Student Presentations (10/27), David Morgan (10/28), Jason Gestwicki (10/29)

Recommended reading:

- [(Rodrigo-Brenni et al., 2010)](http://www.ncbi.nlm.nih.gov/pubmed/20797627)
- [(Gestwicki and Garza, 2012)](http://www.ncbi.nlm.nih.gov/pubmed/22482455)
- [(Sowa et al., 2009)](http://www.ncbi.nlm.nih.gov/pubmed/19615732)

Other Class Material:

- [Unperturbed Dataset - Raw Data for Fig 2b of Roscoe...Bolon JMB, 2012](https://drive.google.com/file/d/0Bx0d95RwVYufaEZOREZiTnVBRmM/view?usp=sharing)
- [Epistasis Deep Sequencing Paper](http://www.sciencedirect.com/science/article/pii/S0960982214012688)
- [Module 1 Presentation Live Stream Archive](https://www.youtube.com/watch?v=Q_PGiV9JX5E&feature=youtu.be)
- [Jason Gestwicki Notes](https://www.dropbox.com/s/m9adzvig6xl21uw/2014-10-29%2014.10.50.jpg?dl=0)

Sub-groups:

- Hamming Distance error correction
- Reproducibility of fitness scores at the barcodes and codon scale
- Data visualization and structural mapping
- Difference matrices,  global similarity between perturbations, and reproducibility between days
- Standardization of Fitness scores and methods write up for paper
  - including as much standardized computation of other sub-groups as possible!


**Week 6 – Theme: Single Cell/Molecule vs. Bulk Measurements**

_Lab Work: Growth rates via microscopy and bulk measurements_

Lecturers: Kurt Thorn (11/3), Steven Altschuler and Lani Wu (11/4), Tanja Kortemme (11/5), Wendell Lim Kilobot Demo (11/5)

Recommended reading:

- [(Ye et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/23201676)
- [(Tinoco and Gonzalez, 2011)](http://www.ncbi.nlm.nih.gov/pubmed/21685361)
- [(Rajaram et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/22743764)
- [(van Wijk et al., 2012)](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3714537/)

Other Class Material:

- [Microscopy protocol](https://docs.google.com/document/d/1Doupn7DB_Igeb8Bm7W7g7PEi9HufYAtf82qySTvqUK4/edit?usp=sharing)
- [CellProfiler instructions](https://docs.google.com/document/d/1ztp1lmxZ8dUUiLuV4Mri6G5M2Q2FgryPaXmzxxpR4Ak/edit?usp=sharing)
- [The Kilobot Project](http://www.eecs.harvard.edu/ssr/projects/progSA/kilobot.html)

**Week 7– Theme: Constraints on Stability and Interaction Specificity**

_Lab Work: Computational protein design_

Lecturers: Kyle Barlow (11/10), Samuel Thompson (11/12)

Recommended reading:

- [(Mandell and Kortemme, 2009)](http://www.ncbi.nlm.nih.gov/pubmed/19841629)
- [(Humphris and Kortemme, 2007)](http://www.ncbi.nlm.nih.gov/pubmed/17722975)
- [(Kellogg et al., 2011)](http://www.ncbi.nlm.nih.gov/pubmed/21287615)
- [(Ollikainen et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/23422426)
- [(Phillips et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/23801757)

Other Class Material:

- [Tanja's Lecture from 11/5](https://drive.google.com/file/d/0Bz5C8aG_xj4sbGFERC1kWUJpZDR1RHlIZ29QcWJXSXU5MWd3/view?usp=sharing)
- [Kyle's Lecture](https://drive.google.com/file/d/0Bz5C8aG_xj4sa20zMTRBd3BvSVFPMk1nUzBrZkR1NzFYQzhz/view?usp=sharing)
- [Samuel's Lecture](https://drive.google.com/file/d/0Bx0d95RwVYufaGwyeDh1dFpRaFU/view?usp=sharing)
- [DDG data website](https://guybrush.ucsf.edu/local/DDG/ubiquitin)
- [Backup JSON](/pubs/ubiquitin.json)
- [Student Fitness Data](https://drive.google.com/folderview?id=0Bz5C8aG_xj4sdDZiTzdGSVdZdDg&usp=sharing)
- [PDB files of Ubiquitin Complexes](https://drive.google.com/folderview?id=0Bx0d95RwVYufYUliUXJzaTAyTEk&usp=sharing)
  - These files were the starting point for the Rosetta analysis. For the Rosetta DDG analysis, these structures were minimized in the Rosetta forcefield. Those minimized structures are in the Pymol session. These pdb files are for the pre-minimized structures.
- Notes on the QB3 Cluster
  - [Submitting Jobs to the Cluster Queue](https://salilab.org/qb3cluster/Cluster_Usage) - Failure to follow these instructions may lead to you not being able to run jobs!
<!-- - Generating Flexible Backbone Ensembles
  - [README](https://drive.google.com/open?id=0By0in41MNLEZQ3laWGtROUVEYms&authuser=0)
  - [backrub.sh](https://drive.google.com/open?id=0By0in41MNLEZQ3laWGtROUVEYms&authuser=0)
- Predict Tolerated Sequence Space
  - [README](https://drive.google.com/open?id=0By0in41MNLEZYmd1Y1VKblV0ZUU&authuser=0)
  - [seqtol.sh](https://drive.google.com/open?id=0By0in41MNLEZbDhYRnFkWEExRm8&authuser=0)
  - [example_resfile1.res](https://drive.google.com/open?id=0By0in41MNLEZd1c2MEpOb21vQUE&authuser=0)
  - [example_resfile2.res](https://drive.google.com/open?id=0By0in41MNLEZRVdHb0tMNVJha0U&authuser=0)
- Protein Design to Stabilize a Fold or Interaction
  - [README](https://drive.google.com/open?id=0By0in41MNLEZVUs2MjhxN3BrbkU&authuser=0)
  - [fixbb.sh](https://drive.google.com/open?id=0By0in41MNLEZalQtS01DRWJlN1E&authuser=0) -->
<!--
**Week 8– Theme: Constraints in the Context of Networks**

_Lab Work: Comparison of computational design and selection experiments_

Lecturers: Adam Abate (11/17),  Peter Turnbaugh (11/18), Dave Toczyski (11/19)

Other Class Material:

- Multi-state Design [Files](https://drive.google.com/open?id=0By0in41MNLEZcXdNUG12Q2lQejQ&authuser=0)
- Final Presentations:
  - 12 minutes per team maximum
  - Briefly cover your major results from Module 1
  - Focus mainly on Module 3
    - provide background on the assigned Ub complex and links to perturbation
    - discuss initial (stability) results
    - discuss multi-state design results
  - Discuss future directions about:
    - your perturbation and Ub biology
    - what other experiments you would like to do (sequencing or otherwise)
    - the limitations and extensions of the design methodology to explain the sequencing results

Recommended reading:

- [(Agresti et al., 2010)](http://www.ncbi.nlm.nih.gov/pubmed/20142500)
- [(David et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/24336217)
- [(Haiser et al., 2013)](http://www.ncbi.nlm.nih.gov/pubmed/?term=23869020)
- [(Stelter and Ulrich, 2003)](http://www.ncbi.nlm.nih.gov/pubmed/12968183)

**References:**

Adzhubei, I.A., Schmidt, S., Peshkin, L., Ramensky, V.E., Gerasimova, A., Bork, P., Kondrashov, A.S., and Sunyaev, S.R. (2010). A method and server for predicting damaging missense mutations. Nat Meth _7_, 248–249.

Aghajan, M., Jonai, N., Flick, K., Fu, F., Luo, M., Cai, X., Ouni, I., Pierce, N., Tang, X., Lomenick, B., et al. (2010). Chemical genetics screen for enhancers of rapamycin identifies a specific inhibitor of an SCF family E3 ubiquitin ligase. Nat. Biotechnol. _28_, 738–742.

Agresti, J.J., Antipov, E., Abate, A.R., Ahn, K., Rowat, A.C., Baret, J.C., Marquez, M., Klibanov, A.M., Griffiths, A.D., and Weitz, D.A. (2010). Ultrahigh-throughput screening in drop-based microfluidics for directed evolution. Proceedings of the National Academy of Sciences _107_, 4004–4009.

Araya, C.L., Fowler, D.M., Chen, W., Muniez, I., Kelly, J.W., and Fields, S. (2012). A fundamental protein property, thermodynamic stability, revealed solely from large-scale measurements of protein function. Proc. Natl. Acad. Sci. U.S.a. _109_, 16858–16863.

Bandyopadhyay, S., Mehta, M., Kuo, D., Sung, M.K., Chuang, R., Jaehnig, E.J., Bodenmiller, B., Licon, K., Copeland, W., Shales, M., et al. (2010). Rewiring of Genetic Networks in Response to DNA Damage. Science _330_, 1385–1389.

Bystrykh LV (2012) Generalized DNA Barcode Design Based on Hamming Codes. PLoS ONE 7(5): e36852. doi:10.1371/journal.pone.0036852

David, L.A., Maurice, C.M., Carmody, R.N., Gootenberg, D.B., Button, J.E., Wolfe, B.E., Ling, A.V., Devlin, A.S., Varma, Y., Fischbach, M.A., Biddinger, S.B., Dutton, R.J., and P.J. Turnbaugh. Diet rapidly and reproducibly alters the human gut microbiome. Nature, Epub ahead of print, Nov 2013. doi:10.1038/nature12820.

Finley, D., Ulrich, H.D., Sommer, T., and Kaiser, P. (2012). The Ubiquitin-Proteasome System of Saccharomyces cerevisiae. Genetics _192_, 319–360.

Fowler, D.M., and Fields, S. (2014). Deep mutational scanning: a new style of protein science. Nat Meth _11_, 801–807.

Gestwicki, J.E., and Garza, D. (2012). Protein Quality Control in Neurodegenerative Disease. In Molecular Biology of Neurodegenerative Diseases, (Elsevier), pp. 327–353.

Haiser, H.J., Gootenberg, D.B., Chatman, K., Sirasani, G., Balskus, E.P., and P.J. Turnbaugh. (2013) Predicting and manipulating cardiac drug inactivation by the human gut bacterium Eggerthella lenta. Science 341, 295-298.

Humphris EL, Kortemme T. (2007). Design of multi-specificity in protein interfaces. PLoS Comput Biol. 2007 3(8):e164.

Kellogg EH, Leaver-Fay A, Baker D. (2011). Role of conformational sampling in computing mutation-induced changes in protein structure and stability. 79(3):830-8.

Leaver-Fay, A., Tyka, M., Lewis, S.M., Lange, O.F., Thompson, J., Jacak, R., Kaufman, K.W., Renfrew, P.D., Smith, C.A., Sheffler, W., et al. (2011). Rosetta3. In Computer Methods, Part C, (Elsevier), pp. 545–574.

Lemieux, G.A., Keiser, M.J., Sassano, M.F., Laggner, C., Mayer, F., Bainton, R.J., Werb, Z., Roth, B.L., Shoichet, B.K., and Ashrafi, K. (2013). In Silico Molecular Comparisons of C. elegans and Mammalian Pharmacology Identify Distinct Targets That Regulate Feeding. PLoS Biol _11_, e1001712.

Mandell D.J., and Kortemme, T. Computer-aided design of functional protein interactions. (2009). Nat Chem Biol. _5_797-807.

McLaughlin, R.N., Jr, Poelwijk, F.J., Raman, A., Gosal, W.S., and Ranganathan, R. (2012). The spatial architecture of protein function and adaptation. Nature _491_, 138–142.

Ollikainen, N., Smith, C.A., Fraser, J.S., and Kortemme, T. (2013). Flexible Backbone Sampling Methods to Model and Design Protein Alternative Conformations. In Methods in Protein Design, (Elsevier), pp. 61–85.

Pei, J., and Grishin, N.V. (2001). AL2CO: calculation of positional conservation in a protein sequence alignment. Bioinformatics _17_, 700–712.

Phillips, A.H., Zhang, Y., Cunningham, C.N., Zhou, L., Forrest, W.F., Liu, P.S., Steffek, M., Lee, J., Tam, C., Helgason, E., et al. (2013). Conformational dynamics control ubiquitin-deubiquitinase interactions and influence in vivo signaling. Proceedings of the National Academy of Sciences _110_, 11379–11384.

Pollock, D.D., Thiltgen, G., and Goldstein, R.A. (2012). Amino acid coevolution induces an evolutionary Stokes shift. Proceedings of the National Academy of Sciences _109_, E1352–E1359.

Rajaram, S., Pavie, B., Wu, L.F., and Altschuler, S.J. (2012). PhenoRipper: software for rapidly profiling microscopy images. Nat Meth _9_, 635–637.

Rodrigo-Brenni, M.C., Foster, S.A., and Morgan, D.O. (2010). Catalysis of Lysine 48-Specific Ubiquitin Chain Assembly by Residues in E2 and Ubiquitin. Mol. Cell _39_, 548–559.

Roscoe, B.P., Thayer, K.M., Zeldovich, K.B., Fushman, D., and Bolon, D.N.A. (2013). Analyses of the Effects of All Ubiquitin Point Mutants on Yeast Growth Rate. J. Mol. Biol. _425_, 1363–1377.

Smith, R.P., Taher, L., Patwardhan, R.P., Kim, M.J., Inoue, F., Shendure, J., Ovcharenko, I., and Ahituv, N. (2013). Massively parallel decoding of mammalian regulatory sequences supports a flexible organizational model. Nature Genetics 1–10.

Sowa, M.E., Bennett, E.J., Gygi, S.P., and Harper, J.W. (2009). Defining the Human Deubiquitinating Enzyme Interaction Landscape. Cell _138_, 389–403.

Stelter, P., and Ulrich, H.D. (2003). Control of spontaneous and damage-induced mutagenesis by SUMO and ubiquitin conjugation. Nature _425_, 188–191.

Tinoco, I., and Gonzalez, R.L. (2011). Biological mechanisms, one molecule at a time. Genes Dev. _25_, 1205–1231.

van Wijk SJ, Fiskin E, Putyrski M, Pampaloni F, Hou J, Wild P, Kensche T, Grecco HE, Bastiaens P, and Dikic I. (2012) Fluorescence-based sensors to monitor localization and functions of linear and K63-linked ubiquitin chains in cells. Molecular Cell. _14_, 797-809.

Ye Y, Blaser G, Horrocks MH, Ruedas-Rama MJ, Ibrahim S, Zhukov AA, Orte A, Klenerman D, Jackson SE, and Komander D. (2012). Ubiquitin chain conformation regulates recognition and activity of interacting proteins. Nature _492_, 266-70 -->
