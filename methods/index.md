---
title: Macro Methods
layout: default
group: methods
---

# Biophysics 204A: Methods in Macromolecular Structure #

## Fall 2017 Syllabus ##

**Course Title:** Methods in Macromolecular Structure

**Course Credit:** 4 units

**Course Format:** 12 hours of lab per week

**Location:** Genentech Hall Teaching Lab - Room 227

**Prerequisites:** All incoming first year BP and CCB graduate students are required to enroll in this course.

**Grading:** Letter grade

**Textbook:** None. Lab protocols and course materials will be available in class or online

**Course Days/Hours:** Monday, Tuesday, Wednesday 1pm-5pm

**Instructors:** [James Fraser](mailto:jfraser+bp204a@fraserlab.com) and [John Gross](mailto:jdgross@cgl.ucsf.edu)

**EM Coordinator:** [David Bulkley](mailto:david.bulkley@ucsf.edu)

**HSP90 Preparer/NMR guru:** Ryan Tibble (Gross lab)

**HSP90 Crystallizer:** Kazu Ito (Fraser lab)

**X-ray guru:** Michael Thompson (Fraser lab)

**EM Computational Experts:** Eugene Palovcak, Daniel Asarnow (Cheng lab)

**TAs:**

- [Cynthia Chio](mailto:Tak.Chio@ucsf.edu)
- [Andrew Natale](mailto:Andrew.Natale@ucsf.edu)

**Lecturers/Facilitators:**

James Fraser, John Gross, Dan Southworth, David Bulkley, James Holton, Yifan Cheng, David Agard, Aashish Manglik, Andrej Sali, Robert Stroud

**Important Dates:**

- Method Groups Presentation: Monday, Nov 13th
- Break for QBC Retreat/Thanksgiving: Nov 20-25
- Final Teams Presentation: Monday, Dec 18

**Background:**
Fluency in multiple biophysical methods is often critical for answering mechanistic questions. Traditionally, students are exposed to the fundamentals of multiple techniques through lectures that cover the theory prior to exposure, for some, in analysis or data collection during lab rotations. However, this structure means that only students that rotate in specific labs gain hands-on-exposure, which could limit adventurous experiments in future years.  To train the next generation of biophysicists at UCSF, we have decided to alter this traditional structure by creating a new 6 week “Macromolecular Methods” class that places data collection at the beginning of the course.  Based on our experiences designing the project-based class [Physical Underpinnings of Biological Systems](www.fraserlab.com/pubs), which used deep sequencing to assay the function of a comprehensive set of point mutants to introduce principles of [high-throughput interrogation of biological functions](https://www.ncbi.nlm.nih.gov/pubmed/27111525), we have designed Macromolecular Methods to be a team-based class where students develop their own analysis of real data that they have collected.

**Course Description:**

This is a team-based class where students work in small groups develop their own analysis of real data that they have collected. The course will function in three modules. In module 1 “data collection” students collect either NMR, negative stain EM, and X-ray crystallographic data. In module  2 “fundamentals of analysis”,  students will are mixed into new groups for lectures and hands-on computational tutorials. These lessons emphasize connections to both the molecular interpretations and the fundamental physical principles that generated the data. In module 3 “integrative structural biology”, the students will finalize their analysis and lectures will emphasize rigorous theory of individual techniques and computational frameworks for integrative structural modeling.  Finally, each group will present to their findings to the class and course faculty.

**Course Goals:**

The goal of the course is to provide an immersive, hands-on experience in the context of genuine research questions. As articulated by [Vale and colleagues](http://www.sciencemag.org/content/338/6114/1542.long), there are tremendous advantages when graduate students work "pursuing a research question with unknown answers and uncertain outcomes, students and faculty combine their wits and skills to design experiments, evaluate progress, and troubleshoot along the way". These advantages are likely to be common accross [all learning levels](http://blogs.kqed.org/mindshift/2014/09/can-project-based-learning-close-gaps-in-science-education/). In our course, teams may use whatever literature, software, and resources that are available publicly, and are encouraged to write their own scripts and software where necessary.

This course will introduce students to approaches and methodologies for interrogating macromolecular structure and dynamics, which will require the integration of experiment and computation. In addition to fundamental techniques in X-ray crystallography, NMR and EM, students will learn to interpret datasets, draw original conclusions, and present findings in written and oral formats.

The "official" language of the class is [python](https://www.python.org) - beginners should try [Learn Python The Hard Way](http://learnpythonthehardway.org/book/), people with a background in other languages should try [Google's python course](https://developers.google.com/edu/python/). The QB3 Berkeley [intensive python course](http://intro-prog-bioinfo-2014.wikispaces.com/) provides many biological examples. Students should be comfortable with basic syntax and scripting prior to the start of instruction.


**Student Learning Objectives**

- Laboratory safety
- Appropriate methods for documenting laboratory procedures
- Bioinformatics and algorithms
- Python scripting
- Fragment screening
- X-ray crystallography
- NMR spectroscopy
- Electron Miscroscopy

**Class Policies**

_Absences_: The instructor must be notified by the second week of classes for any planned absences, or in advance of class due to illness. Active participation in the laboratory is essential and students are required to attend normal class hours. Attendance during all of the three required presentations is absolutely mandatory, except in cases of doctor-excused medical illness. Any class material or lecture that is missed will be the responsibility of the student. Written evaluations of each team and its members will be provided to the Graduate Tracking System for inclusion into the graduate record, and provided to oral committee members and thesis committee members.

_Accommodations for students with disabilities:_ The Graduate Division embraces all students, including students with documented disabilities. UCSF is committed to providing all students equal access to all of its programs, services, and activities. Student Disability Services (SDS) is the campus office that works with students who have disabilities to determine and coordinate reasonable accommodations. Students who have, or think they may have, a disability are invited to contact SDS (StudentDisability@ucsf.edu); or 415-476-6595) for a confidential discussion and to review the process for requesting accommodations in classroom and clinical settings. More information is available online
at http://sds.ucsf.edu. Accommodations are never retroactive; therefore students are encouraged to register with Student Disability Services (http://sds.ucsf.edu/) as soon as they begin their programs. UCSF encourages students to engage in support seeking behavior via all of the resources available through Student Life, for consistent support and access to their programs.


##Schedule

**Week 1 – Welcome**

_Tues Oct 31_

- 1:00-1:30 - Intro to Macro Methods (JSF)
- 1:30-2:30 - Why Hsp90 is cool (David Agard)

Chalk Talks:

- 2:30-2:45 - Why Protein Structural Biology? Proteins Thermo/Kinetics 101 (Gross)
- 2:45-3:00 - X-ray 101 (JSF)
- 3:00-3:15 - EM 101 (Dan Southworth)
- 3:15-3:30 - NMR 101 (Gross)

_Weds Nov 1_

- 1:00-2:00PM - break into groups, ensure software works
  - All:
    - [ChimeraX](https://www.cgl.ucsf.edu/chimerax/download.html)
    - [PyMOL](https://pymol.org/2/), must be on UCSF network
  - X-ray:
    - [Phenix](https://www.phenix-online.org/download/), [request password](http://www.phenix-online.org/phenix_request/index.cgi)
    - [XDS](http://xds.mpimf-heidelberg.mpg.de/html_doc/downloading.html)
    - [ADXV](http://www.scripps.edu/tainer/arvai/adxv.html)
    - Coot (already installed on laptops)
  - NMR:
    - [NMR Pipe](https://www.ibbr.umd.edu/nmrpipe/install.html)
    - [NMRFAM SPARKY](http://www.nmrfam.wisc.edu/nmrfam-sparky-distribution.htm)
  - EM:
    - [EMAN2](http://ncmi.bcm.tmc.edu/ncmi/software/software_details?selected_software=counter_222)
- 2:00-3:00PM - Theory of Fragments and Role of Structural Biology (Aashish Manglik)

Recommended reading:

- [SAR by NMR](https://www.ncbi.nlm.nih.gov/pubmed/8929414)
- [Scaffold-based design by X-ray](http://www.pnas.org/content/105/8/3041.long), [PANDDA](https://www.ncbi.nlm.nih.gov/pubmed/28436492)
- [EM for drug discovery](https://www.ncbi.nlm.nih.gov/pubmed/27238019), [Proteasome](http://journals.iucr.org/d/issues/2017/06/00/rr5143/rr5143.pdf)

Other Class Material:

- [](test link)

**Week 2 – Working in Method Teams**

_X-ray_
- Christopher John Pascal	Mathy, Yessica	Gomez, Colton	Bracken, Conner	Bardine, Adam	Cotton, Paul	Klauser, Lakshmi	Miller-Vedam
- Monday Nov 6: Crystal harvesting (Genentech Hall crystal room)
- Tuesday Nov 7: Beamtime at Advanced Light Source: noon-4PM
  - link to registration material
  - directions to the ALS
- Wednesday Nov 8: Beamtime at Advanced Light Source: 8AM-4PM

_NMR_
- Viktoriya	Berdan, Adam	Catching, Neha	Prasad, Jack	Stevenson, Nicole	Wenzell, Eric	Gonzalez, Cody Thomas	Krivacic
- Monday Nov 6: Data collection
- Tuesday Nov 7: Data collection
- Wednesday Nov 8: Data collection

_EM_
- Kyle	Lopez, Erik	Navarro, Paige	Solomon, Kelly	Montgomery, Jenna	Pellegrino, Megan	Moore, Julian	Harris
- Monday Nov 6: Grids
- Tuesday Nov 7: Negative Stain Data Collection
- Wednesday Nov 8: Cryo-EM

**Week 3 – Working in Compound Groups**

_Groups_
- 1: Erik	Navarro, Paige	Solomon, Adam	Catching, Neha	Prasad, Christopher John Pascal	Mathy
- 2: Kelly	Montgomery, Jack	Stevenson, Yessica	Gomez, Colton	Bracken
- 3: Jenna	Pellegrino, Nicole	Wenzell, Conner	Bardine, Adam	Cotton
- 4: Kyle	Lopez, Viktoriya	Berdan, Eric	Gonzalez, Paul	Klauser
- 5: Megan	Moore, Julian	Harris, Cody Thomas	Krivacic, Lakshmi	Miller-Vedam

_Mon Nov 13_
- 1-2PM Presentations by Methods Teams
- 2-3PM X-ray data processing: from spots to MTZ (JSF, Kazu Ito, Michael Thompson)
- 3-4PM [EM data processing: from particles to 2D](http://ncmi.bcm.tmc.edu/ncmi/software/software_details?selected_software=counter_222)
- 4-5PM NMR data processing: from FID to 2D?

_Tues Nov 14_
- 1-2PM X-ray data processing: from MTZ to density, molecular replacement and difference maps (JSF, Kazu Ito, Michael Thompson)
- 2-3PM [EM data processing: from 2D to 3D](http://ncmi.bcm.tmc.edu/ncmi/software/software_details?selected_software=counter_222)
- 3-4PM NMR data processing: from 2D to perturbations

_Weds Nov 15_
- 1-2PM X-ray data processing: identifying ligands, ligand restraints and refinement (JSF, Kazu Ito, Michael Thompson)
- 2-3PM [EM data processing: manipulating density](http://ncmi.bcm.tmc.edu/ncmi/software/software_details?selected_software=counter_222)
- 3-4PM NMR data processing: measuring chemical shift perturbations

**Thanksgiving break**

**Week 4 - NMR**

_Mon Nov 27_
- John Gross

_Tues Nov 28_
- John Gross

_Weds Nov 29_
- John Gross
- ChimeraX tutorial by Tom Goddard

**Week 5 - X-ray**

_Mon Dec 4_
- 1-2:30PM Lecture by Bob Stroud on fundamentals of X-ray diffraction
- 2:30-5PM Work on X-ray data (JSF, Kazu Ito, Michael Thompson)

_Tues Dec 5_
- 1-2:30PM Lecture by James Holton on the relationship between data quality and model interpretation
- 2:30-5PM Work on X-ray data (JSF, Kazu Ito, Michael Thompson)

_Weds Dec 6_
- 1-2PM Presentation by Sali on Rigor, Reproducibility, and Integrative Modeling
- 2:30-4PM Final work on X-ray data (JSF, Kazu Ito, Michael Thompson)
- 4-5PM Final Q/A with Stroud and Fraser: what we still don't understand about X-ray crystallography

**Week 6 - EM**

_Mon Dec 11_
- 1-2:30PM Lecture by Cheng/Southworth
- 2:30-5PM Work on EM data
- ChimeraX tutorial by Tom Goddard

_Tues Dec 12_
- 1-2:30PM Lecture by Cheng/Southworth
- 2:30-5PM Work on titration data with Eugene/Daniel

_Weds Dec 13_
- 1-2PM Lecture by Cheng/Southworth
- 2:30-5PM Finalize work on titration data with Eugene/Daniel

**FINAL PRESENTATIONS: Mon Dec 18**
