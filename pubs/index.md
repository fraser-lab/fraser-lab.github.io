---
title: BP205
layout: default
group: pubs
---

# Biophysics 205A: Physical Underpinnings of Biological Systems

## Fall 2015 Syllabus

**Course Title:** Physical Underpinnings of Biological Systems (PUBS)

**Course Credit:** 4 units

**Course Format:** 12 hours of lab per week

**Location:** Genentech Hall Teaching Lab - Room 227

**Prerequisites:** All incoming first year iPQB and CCB graduate students are required to enroll in this course.

Although TAs, instructors, and your fellow students will be happy to help out, it is important to be familiar with basic scripting and the principles of python PRIOR to starting the class.

This will be covered in bootcamp, but it is also a good idea to get a jump start during the summer (suggestions are listed below).

**Grading:** Letter grade

**Textbook:** None. Lab protocols and course materials will be available in class or online

**Course Days/Hours:** Monday, Tuesday, Wednesday 1pm-5pm

**Instructors:** James Fraser; [jfraser+bp205a@fraserlab.com](mailto:jfraser+bp205a@fraserlab.com); Martin Kampmann

**Course Coordinator:** David Mavor; [David.Mavor@ucsf.edu](mailto:David.Mavor@ucsf.edu)

**Mass Spectrometry Coodinator:** Danielle Swaney; [Danielle.Swaney@ucsf.edu](mailto:Danielle.Swaney@ucsf.edu)

**TAs:**

- [Ina Chen](mailto:Ina.Chen@ucsf.edu)
- [Evan Green](mailto:green.evan@gmail.com)
- [Lillian Kenner](mailto:lkenner@fraserlab.com)
- [Bruk Mensa](mailto:brukmensa@gmail.com)
- [Leanna Morinishi](mailto:Leanna.Morinishi@ucsf.edu)
- [Erin Poss](mailto:Erin.Poss@ucsf.edu)

**Lecturers/Facilitators:**

James Fraser, David Mavor, Danielle Swaney, Joe DeRisi, Martin Kampmann, Hiten Madhani, David Morgan, Jason Gestwicki, Eric Chow, Nadav Ahituv, Ryan Hernandez, Bo Huang, Justin Biel, Tanja Kortemme, Kyle Barlow

**Important Dates:**

- Mass Spectrometry Presentation: Monday, October 12th
- NSF GRFP due Monday, October 26 (Life Sciences) and Friday, October 30 (Chemistry)
- Final presentations: Tuesday, November 24th

**Background:**

"Precision Medicine" is an emerging theme in biomedical research and patient care, and refers to the use of genome-wide information, such as DNA sequence, expression profiling, metabolic labeling/imaging, and other technologies to better inform and ultimately customize therapy. For cancer medicine, discreet genomic changes can be tied directly to particular treatments, such as immunotherapies or small molecules directed against a mutated enzyme. However, the cancer genome is not necessarily a static entity, and may be subjected to intense selective pressures resulting in highly dynamic changes that manifest as relevant phenotypes, such as drug resistance or metastatic potential. Technological revolutions, such as DNA microarrays, followed by ultra-deep sequencing, have allowed high-resolution views of the genome and dynamical views of the expression programs they exhibit.

Despite the promise for personalized care, many challenges remain. The genome, its expression, and its translation into phenotype embody a highly complex and dynamic system, whether it is a cancer cell, a yeast cell, or even a virus. Mutations that drive a phenotype may not be necessarily distinguishable from those that are mere passengers, and the molecular determinants of large-scale alterations remain largely uncharacterized.

Ultimately, the goal is the synthesis of predictive models that can reveal fundamental regulatory principles, and in the case of patients, deliver actionable information for treatment, early detection, and prevention.

**Course Description:**

The course is a hands-on, project-based course that integrates proteomics, deep mutational profiling [(Fowler and Fields, _Nature Methods_, 2014)](http://www.ncbi.nlm.nih.gov/pubmed/25075907), and computational biology. The model organism, _Saccharomyces cerevisiae_, will be used as the organismal basis. Our goals are to experimentally determine the kinases responsible for phosphorylating ubiquitin and to measure the fitness of all possible individual point mutants of ubiquitin. Ubiquitin is an essential protein that is a key cellular integrator of stress, under a variety of experimental perturbations. The library of these point mutants was assembled by [Dan Bolon](http://profiles.umassmed.edu/profiles/display/133553) and verified during a summer visit to the Fraser lab. The course is organized around modules, described below. Each hands-on module will be accompanied by lectures (either "chalk talk" or with slides). Students will present short talks to the class covering the assigned protocols or summarizing literature related to the class.   In addition students are expected to conduct their own literature reviews during the course of the project. Students will work in small teams, and each team will be assigned a different set of kinases for initial analysis. Based on the results, the teams will design a perturbation experiment for deep sequencing.  Students are expected to remain in their teams for the duration of the course, although team-team collaboration is highly encouraged. All team members are expected to participate in each activity.

At the conclusion of the mass spec module and at the end of the class, each team will orally present their findings to the class and faculty, limited to 15 minutes and 15 slides maximum, with 10 minutes for discussion and questions. All members of the team are expected to speak and describe their contributions. These presentations are currently scheduled for Oct 12th and Nov 24th, the final day of class.

Activities and speakers for each week will be announced at the beginning of each module.

**Course Goals:**

The goal of the course is to provide an immersive, hands-on experience in the context of genuine research questions. As articulated by [Vale and colleagues](http://www.sciencemag.org/content/338/6114/1542.long), there are tremendous advantages when graduate students work "pursuing a research question with unknown answers and uncertain outcomes, students and faculty combine their wits and skills to design experiments, evaluate progress, and troubleshoot along the way". These advantages are likely to be common accross [all learning levels](http://blogs.kqed.org/mindshift/2014/09/can-project-based-learning-close-gaps-in-science-education/). In our course, teams may use whatever literature, software, and resources that are available publicly, and are encouraged to write their own scripts and software where necessary.

The "official" language of the class is [python](https://www.python.org) - beginners should try [Learn Python The Hard Way](http://learnpythonthehardway.org/book/), people with a background in other languages should try [Google's python course](https://developers.google.com/edu/python/). The QB3 Berkeley [intensive python course](http://intro-prog-bioinfo-2014.wikispaces.com/) provides many biological examples.

[Spreadsheet](https://docs.google.com/spreadsheets/d/1BjKsN0B1hqd4dJW5slZ5KPuToCjSMRyA7Bl8MwWrbS4/edit#gid=0) with a listing of multiple Python resources

Students should be comfortable with basic syntax and scripting prior to the start of instruction.

**Although TAs, instructors, and your fellow students will be happy to help out, it is important to be familiar with basic scripting and the principles of python PRIOR to starting the class.**

In **module 1**, teams will be given a yeast strain with a single protein kinase gene deletion. Mass spectrometry will be used to identify changes in the phosphoproteome and, in particular, to evaluate any changes in phosphorylation of the protein Ubiquitin.

In **module 2**, each team will select a chemical perturbation. Using deep mutational profiling, each team will measure the fitness of all possible individual point mutants of Ubiquitin, an essential protein that is a key cellular integrator of stress. Upon processing the sequencing data, each team will perform comparisons against a reference dataset.

In **module 3**, the teams will leverage interactions with Tanja Kortemme and members of her lab to perform protein design protocols to predict sequences optimized for multiple criteria. They will test how well their deep sequencing data matches with protein design profiles generated under different constraints such as: protein stability or maintaining interactions with specific mediators of stress responses.

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

_Accommodations for students with disabilities:_ The Graduate Division embraces all students, including students with documented disabilities. UCSF is committed to providing all students equal access to all of its programs, services, and activities. Student Disability Services (SDS) is the campus office that works with students who have disabilities to determine and coordinate reasonable accommodations. Students who have, or think they may have, a disability are invited to contact SDS (StudentDisability@ucsf.edu); or 415-476-6595) for a confidential discussion and to review the process for requesting accommodations in classroom and clinical settings. More information is available online
at http://sds.ucsf.edu. Accommodations are never retroactive; therefore students are encouraged to register with Student Disability Services (http://sds.ucsf.edu/) as soon as they begin their programs. UCSF encourages students to engage in support seeking behavior via all of the resources available through Student Life, for consistent support and access to their programs.

## Teams

- APUBSCRAWL: Sergei, Rachel, David (TA: Bruk, SWE1, K6, Cerulenin - 4.5 uM)
- ONION: Peter, Pooja, Nathan (TA: Ina, ATG1, K48, rapamycin - 200 nM)
- ET0H: Ruilin, Tamas, Fatima (TA: Lillian, KIN3, K63, menadione - 500 uM)
- PYND: Douglas, Yuliya, Paul, Nicholas (TA: Erin, ALK1, K29, 5-fluorocytosine 100 ug/mL)
- SHMOO: Nadja, Ryan, Daniel, Derek (TA: Leanna, CMK1, K11, CaCl2, 500 mM)
- WHANGEE: Cole, Alex, Emily, Charlotte (TA: Evan, TPK1, N-term, Tunicamycin 1ug/mL)

## Lab work, individual presentation schedule, and recommended reading

**Week 1 – Theme: Ubiquitin and Programming**

_Lab work: Pickle project and Yeast transformation_

Lecturers: James Fraser (9/22), Joe DeRisi (9/22), Danielle Swaney (9/23)

Student Presentations: Yuliya (Transformation Lecture, 9/23)

Recommended reading:

- [(Fowler and Fields, 2014)](http://www.ncbi.nlm.nih.gov/pubmed/25075907)
- [(Finley et al., 2012)](http://www.ncbi.nlm.nih.gov/pubmed/23028185)
- [(Herhaus and Dikic, 2015)](http://www.ncbi.nlm.nih.gov/pubmed/26268526)

Files for Computation:

- [Allele_dic.pkl](https://drive.google.com/file/d/0Bz5C8aG_xj4sc3g5V29LcXluSE0/edit?usp=sharing)
- [translate.pkl](https://drive.google.com/file/d/0Bz5C8aG_xj4sRVZVMU9RdUJoRkk/edit?usp=sharing)
- [aminotonumber.pkl](https://drive.google.com/file/d/0Bz5C8aG_xj4sa0dlbGczQnd5R3c/edit?usp=sharing)

Other Class Material:

- [Information about the server](/pubs/server/)
- [PDF of Lecture 1](https://drive.google.com/file/d/0Bx0d95RwVYufQkxnMmFfS3EzRDQ/view?usp=sharing)
- [PDF of Lecture 2](https://drive.google.com/file/d/0Bx0d95RwVYufaEpLOVZTSFpuQTQ/view?usp=sharing)
- [Fred Sherman's "Getting started with Yeast"](https://instruct.uwo.ca/biology/3596a/startedyeast.pdf)
- [Transformation Protocol](https://docs.google.com/document/d/1-6-rbLosBYkAZI4EOcmwP8C2wDNiLE4OWvXjNS0Yfko/edit?usp=sharing)

Chemical menu:

- [Tunicamycin](http://www.sigmaaldrich.com/MSDS/MSDS/DisplayMSDSPage.do?country=US&language=en&productNumber=93755&brand=FLUKA&PageToGoToURL=http%3A%2F%2Fwww.sigmaaldrich.com%2Fcatalog%2Fproduct%2Ffluka%2F93755%3Flang%3Den)
- [Spermine](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=S3256&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/s3256?lang=en&region=US)
- [rapamycin](http://www.sigmaaldrich.com/MSDS/MSDS/DisplayMSDSPage.do?country=US&language=en&productNumber=R0395&brand=SIGMA&PageToGoToURL=http%3A%2F%2Fwww.sigmaaldrich.com%2Fcatalog%2Fproduct%2Fsigma%2Fr0395%3Flang%3Den)
- [hygromycin B](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=H3274&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/h3274?lang=en&region=US)
- [Nickle Chloride](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=ALDRICH&productNumber=339350&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/aldrich/339350?lang=en&region=US)
- [3-Amino-1,2,4-triazole](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=A8056&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/a8056?lang=en&region=US)
- [Calcium dichloride](http://www.sigmaaldrich.com/MSDS/MSDS/DisplayMSDSPage.do?country=US&language=en&productNumber=C4901&brand=SIAL&PageToGoToURL=http%3A%2F%2Fwww.sigmaaldrich.com%2Fcatalog%2Fproduct%2Fsial%2Fc4901%3Flang%3Den)
- [Cerulenin](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=C2389&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/c2389?lang=en&region=US)
- [Cobalt acetate](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIAL&productNumber=403024&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sial/403024?lang=en&region=US)
- [miconazole](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=M3512&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/m3512?lang=en&region=US)
- [p-Fluoro-DL-phenylalanine](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=F5251&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/f5251?lang=en&region=US)
- [tamoxifen](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=T5648&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/t5648?lang=en&region=US)
- [ketoconazole](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=UC280&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/uc280?lang=en&region=US)
- [clotrinazole](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=C6019&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/c6019?lang=en&region=US)
- [menadione](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=ALDRICH&productNumber=M57405&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/aldrich/m57405?lang=en&region=US)
- [Calcofluor white](http://www.pro-lab.com/msds/stains_pl392_calcofluor_white_reagent%20_msds_eu.pdf)
- [CuCl2](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=ALDRICH&productNumber=451665&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/aldrich/451665?lang=en&region=US)
- [5-fluorocytosine](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=F7129&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/f7129?lang=en&region=US)
- [acivicin](http://www.sigmaaldrich.com/catalog/product/sigma/sml0312?lang=en&region=US)
- [amphotericin B](http://www.sigmaaldrich.com/MSDS/MSDS/PleaseWaitMSDSPage.do?language=&country=US&brand=SIGMA&productNumber=A9528&PageToGoToURL=http://www.sigmaaldrich.com/catalog/product/sigma/a9528?lang=en&region=US)


**Week 2 – Theme: Mass Spectrometry**

_Lab work: Biochemical enrichment of phosphopeptides_

Lecturers: Hiten Madhani (9/29)

Student Presentations: Sergei (Lab work outline, 9/28), Ryan  (Journal Club on [Wauer et al, 2015](http://www.ncbi.nlm.nih.gov/pubmed/25527291), 9/28), Fatmia (Lab work outline, 9/29), Alex (Lab work outline, 9/30), Nathan (Journal Club on [Peng et al, 2003](http://www.ncbi.nlm.nih.gov/pubmed/12872131), 9/30)

Other Class Material:

- [Lysis-Tryptic Digest protocol (9/28), Stop digest-lyophylize protocol (9/29), IMAC-lyophylize protocl (9/30)](https://docs.google.com/document/d/1nmJMwx4d_977X4B_ne_sYiEVDjww12Xr73znOkMZv1Y/edit?usp=sharing)

**Week 3 – Theme: Chemical Petrubations**


_Lab work: Growth rate measurements_


Lecturers:  David Mavor (10/5), David Morgan (10/6), Martin Kampmann (10/7)

Student Presentations: Emily (Drug Concentration protocol, 10/5), 1 representative per team: Rachel, Pooja, Tamas, Nick, Derek, Charlotte (Growth Rate analysis, 10/7), Daniel (Journal Club on [Hillenmeyer et al, 2009](http://www.ncbi.nlm.nih.gov/pubmed/18420932), 10/7)

Other Class Material:

- [Drug Concentration Protocol](https://docs.google.com/document/d/12Az3DGJlL4jZ2Rx5Y-xOM5y-EFrUIxhF5lf0DuWwiFE/edit?usp=sharing)
- [David Morgan's Lecture](https://drive.google.com/file/d/0Bx0d95RwVYufcEkxSV9TcExPTmc/view?usp=sharing)

**Week 4 – Theme:  Mass Spec Bioinformatics **

_Lab work: Analyze mass spec data_

Recommended reading:

- [MaxQuant software - Cox and Mann, 2008](http://www.ncbi.nlm.nih.gov/pubmed/19029910)
- [Lundby et al, 2012](http://www.ncbi.nlm.nih.gov/pubmed/22673903)

Lecturers: Danielle Swaney (10/12), Jason Gestwicki (10/13), Eric Chow (10/14)

Student Presentations: Paul (Mass spec pipeline, 10/12 at end of class)

Other Class Material:

- [Sample Evidence File](https://drive.google.com/file/d/0Bx0d95RwVYufb2VNM2E0Vk1pbHM/view?usp=sharing)
- [Sample Table Guide](https://drive.google.com/file/d/0Bx0d95RwVYufcjFZTnZTQTN1X0U/view?usp=sharing)
- [Sample Protein Groups](https://drive.google.com/file/d/0Bx0d95RwVYufbDhOM1RzSWkyTjQ/view?usp=sharing)
- [Sample Phosphosites](https://drive.google.com/file/d/0Bx0d95RwVYufSjF4Z01uZnNIMWc/view?usp=sharing)
- [Danielle's Lecture 10/12/15](https://drive.google.com/file/d/0B89bAF4_3DdILTR3WVNjZkd6NW8/view?usp=sharing)
- [Jason's Lecture plus notes (Thanks Sergei!)](https://drive.google.com/folderview?id=0B89bAF4_3DdIbzd1V1JxWkxKTGs&usp=sharing)

The real data:

- [PUBS 2015 MS files.zip](https://drive.google.com/file/d/0Bx0d95RwVYufVThRY1NfQzN5MVE/view?usp=sharing)

**Week 5 – Theme: Growth Competitions**

_Lab work: Harvest library of all Ubiquitin mutants_

Lecturers:

Student Presentations: All students (Mass spec presentation, 10/19), Nadja (Library collection growth protocol, 10/19), Douglas (Journal Club on [Roscoe et al., 2013](http://www.ncbi.nlm.nih.gov/pubmed/23376099), 10/20), Cole (Journal Club on [Roscoe et al, 2014](http://www.ncbi.nlm.nih.gov/pubmed/24862281), 10/21)

Other Class Material:

- [Protocol for library growth](https://docs.google.com/document/d/1OIC1oyDUla72RJlt5a6kquhzMdSC1IuGUyPyztDxddc/edit?usp=sharing)
- [Illustrated Protocol](https://drive.google.com/file/d/0Bx0d95RwVYufNk5palhZYmg0WHM/view?usp=sharing)

**Week 6 – Theme: Preparation for sequencing**

### NSF GRFP due this week!

_Lab work: Molecular biology to isolate library_

Lecturers: Nadav Ahituv (10/27)

Student Presentations: Rachel (Yeast Miniprep protocol, 10/26), Tamas (Barcode explanation and assigment to teams, 10/27), Pooja (PCR 1, gel extraction, and PCR 2, 10/27), David (PCR cleanup and QBIT, 10/28)

Other Class Material:

- [Yeast Miniprep protocol](https://docs.google.com/document/d/1zk_h_pS1Ikb1VfqSSx_ePHROVGu3dl55mJ_NSeYw3ss/edit?usp=sharing)
- [Illustrated Yeast Miniprep protocol](https://drive.google.com/file/d/0Bx0d95RwVYufLURGVWdpQnNYeUE/view?usp=sharing)
- [Team and Time Specific Barcodes](https://docs.google.com/spreadsheets/d/1HyPya8RkLuFGjEq6HjMipmN_kXvoqX34Pae38CJtcLo/edit?usp=sharing)
- [Library PCR protocol](https://docs.google.com/document/d/1KUXhrxh-QxumFcgfjUVXTdYNZq_956ZQ11zpUSxtGR0/edit?usp=sharing)
- [Gel extraction protocol](https://drive.google.com/file/d/0Bx0d95RwVYufb2MtUml0SU5OWms/view?usp=sharing)
- [Barcode Addition PCR protocol](https://docs.google.com/document/d/1US4qYUKqMY-s9H_ifFyWCCDQJfykd8Xmz4RwA8EBO7w/edit?usp=sharing)
- [PCR cleanup protocol](http://omegabiotek.com/store/wp-content/uploads/2013/09/D6492_D6493-Cycle-Pure-Kit-Combo-Omega.pdf)
- [QBit Protocol](https://drive.google.com/file/d/0Bx0d95RwVYufM0xhZ01USllneHM/view?usp=sharing)
- Final Library Hand-off Instructions

**Week 7 – Theme: Sequencing Data**

_Lab work: Begin sequencing pipeline_

Lecturers: Eric Chow (11/2), Joe DeRisi (11/2), Ina Chen+TAs (11/2), Ryan Hernandez (11/3), Bo Huang (11/4)

Student Presentations: Charlotte (Journal Club on [McLaughlin et al, 2012](http://www.ncbi.nlm.nih.gov/pubmed?cmd=search&term=23041932), 11/3)

Other Class Material:

- [Ryan Hernandez's Lecture](https://www.dropbox.com/s/2l6x7mliya56lv1/Hernandez_PUBS.pdf?dl=0)
- [Ina's Unix101](https://drive.google.com/file/d/0B89bAF4_3DdIUzlUMHhmU1pQRkk/view?usp=sharing)
- [Command line Refresher](https://external-production.codecademy.com/en/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command?action=resume)
- [Computation Refresher](https://docs.google.com/presentation/d/1GMJg5oZIrMgenp6726jASmwLrbFJkYwlJRf7B8nM9g8/edit?usp=sharing)
- [A Plasmid Editor (APE)](http://biologylabs.utah.edu/jorgensen/wayned/ape/)
- [APE file for Plasmid](https://drive.google.com/file/d/0Bx0d95RwVYufNzJTaGpDU2lOR0E/view?usp=sharing)
- [APE file for PCR product](https://drive.google.com/file/d/0Bx0d95RwVYufMUhpcFdqRnN2aG8/view?usp=sharing)
- [PCR Product Annotation](https://docs.google.com/document/d/12CGyjBaVTB1ncw00-yRyQl6Acga-LS7bfywvrpxLbNg/edit?usp=sharing)
- [Information about the format of your fastq files](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_FASTQFiles.htm)
- [Using Matplotlib on the Server](/pubs/matplotlib_server/)
- [Allele Dictionary With WT](https://drive.google.com/file/d/0B89bAF4_3DdIUE04UFhYdTR1MFE/view?usp=sharing)


**Week 8 – Theme: Team Shuffles**

_Lab work: Unify sequencing pipeline_

Lecturers: Kyle Barlow and Justin Biel (11/10)

Student Presentations: Team 1 minute update: What does the signal look like, what is failing, what do you think you guys have done that is different/innovative/working better than anything? (Sergei, Nat, Fatima, Yuliya, Ryan, Alex) (11/9), Derek (Journal Club on [Pollack et al, 2012](http://www.ncbi.nlm.nih.gov/pubmed/?term=22547823), moved from 11/4 to 11/9) Nick (Journal Club on [Lange et al, 2008](http://www.ncbi.nlm.nih.gov/pubmed/18556554), 11/10)

Sub-groups:

- Biological inference (Bruk)
- Data squeezing and scoring (Leanna)
- Reproducibility and statistics (Ina)
- Data visualization (Lillian)
- Structure painting (Erin)
- Comparing data sets (Evan)

Other Class Material:

- [Hamming Distance](http://en.wikipedia.org/wiki/Hamming_distance)
- [Kyle's Lecture (ddG)](https://drive.google.com/file/d/0B89bAF4_3DdIX0FibDVhazREeDBJeHNYeHBHVDI1U3NDdVdJ/view?usp=sharing)
- [Justin's Pymol Demo](https://drive.google.com/folderview?id=0B89bAF4_3DdId0FjdG1yb1pRbWc&usp=sharing)

- Reminder: no class on Nov 11


**Week 9 – Theme: Biophysical Calcuations**

_Lab work: Rosetta predictions of protein stability_

Lecturers: Tanja Kortemme (11/16)

Student Presentations: Daniel, Emily, Paul and other representatives from Sub-groups (10/16), Ruilin (Journal Club on [Ye et al, 2012](http://www.ncbi.nlm.nih.gov/pubmed/?term=23201676), 10/17), Peter (Journal Club on [Humphris et al, 2007](http://www.ncbi.nlm.nih.gov/pubmed/?term=17722975), 10/18)

Other Class Material:

- APUBSCRAWL: K6 linked poly-Ub - 2XK5
- ONION: K48 linked poly-Ub - 1AAR
- ET0H: K63 linked poly-Ub - 3H7P
- PYND: K29 linked poly-Ub - 4S22
- SHMOO: K11 linked poly-Ub - 3NOB
- WHANGEE: N-term linked poly-Ub - 2W9N
- [ddG Data Website](https://guybrush.ucsf.edu/local/DDG/ubiquitin)

#Tuesday November 24 - FINAL TEAM PRESENTATIONS

#15 slide maximum, 15 minutes per team (plus questions)

Schedule:

- 1:10-1:30 - SHMOO: Nadja, Ryan, Daniel, Derek (TA: Leanna)
- 1:30-1:50 - WHANGEE: Cole, Alex, Emily, Charlotte (TA: Evan)
- 1:50-2:10 - APUBSCRAWL: Sergei, Rachel, David (TA: Bruk)
- 2:10-2:30 - ONION: Peter, Pooja, Nathan (TA: Ina)
- 2:30-2:50 - PYND: Douglas, Yuliya, Paul, Nicholas (TA: Erin)
- 2:50-3:10 - ET0H: Ruilin, Tamas, Fatima (TA: Lillian)
- 3:10-... PUBS party
