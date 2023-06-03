---
title: So you want to do a structural bioinformatic analysis…
author: Stephanie Wankowicz
layout: post
group: news
tag: how_to
---


Over the past two years I have done a bunch of structural bioinformatic work, resulting in the paper [Ligand binding remodels protein side chain conformational heterogeneity](https://elifesciences.org/articles/74114). And I made A LOT of mistakes. 

Below are many of the lessons, guidelines, and pitfalls for a structural bioinformatic analysis. While many of the principles below are specifically tailored to a paired analysis (such as apo versus holo or peptide bound versus small molecule bound), these guidelines can help with any structural bioinformatics project. 

For specific suggestions, I have the code I created linked at the bottom of each section. This code is built on bash, python, Phenix/cctbx, and qFit. The code should be easily adaptable to other projects/inquiries. If there are any questions, feel free to [contact me](mailto:mullane.stephanie@gmail.com).

#### Define your selection criteria early. 

Before you start downloading structures, you need to decide what structures you would like to highlight. Some of these items can be subsetted using the PDB advanced selection criteria, including:
1. Method of structure (X-ray, CryoEM, NMR, Neutron, ect)
2. Resolution
3. Cryo or Room Temperature
4. Size of the protein
5. Type of ligands
6. Single or multidomain proteins

You may also want to cross check these structures with external databases (ChemBL, Uniprot, ect). You can do much of this work on the PDB website in their [advanced search section](https://www.rcsb.org/search/advanced).

Once you get a list of structures with your initial criteria, you can parse the header of the PDB or get other statistics of PDB/density file from the MTZ file with a program like phenix.mtz_dump. 

This is the stage where you will start creating pairs of structures. Some criteria you will want to think of at this stage include:
Unit cell dimensions and angles
Space group
Sequence (get this from the PDB and not from another database to know which residues were actually resolved in the structure).
Ligand types/crystallographic additives (how much overlap do you want between the paired structures)
Experimental methods such as crystallographic conditions (this will be tricker but may be important and worth it to go through headers manually). 
At this stage, I suggest keeping duplicate pairs (ie if you have multiple apo or wildtype proteins for each holo or mutant proteins). Many structures will be thrown out downstream and it can be helpful to have ‘back ups’. 

[Here is a pipeline](https://github.com/fraser-lab/Apo_Holo_Analysis/tree/main/selection_pipeline) you can use to select the PDBs to move forward in your analysis. 

#### Re-refine structures.

The PDB has a lot of structures refined with many different software packages and versions. To ensure that you are comparing apples to apples, pick one refinement software version and re-refine all of your structures. 

The software that I used was [phenix.refine](https://phenix-online.org/documentation/reference/refinement.html).

Unless you know exactly how you want to refine your structures, spend some time with ~15 structures and play around with refinement strategies. Some things to think about:

Do you want different resolution cutoffs to have different refinement strategies?
Are you going to refine anisotropically or with hydrogens?
How are different refinement strategies impacting the R-free or R-gap of structures?

Once you have a refinement script you are happy to test your refinement script with ~50 PDBs, find errors and adjust from there. As the PDB files you are feeding your refinement strategy may be labeled in many different ways, you are likely going to have to build in flags as well as if statements to refine the structures.

If 80% of your structures are re-refined, move on. Send bugs to the respective software groups, and accept your losses (trust me, they are not worth it!). 

Here is an example re-refinement pipeline that works with [Phenix version 1.19](https://phenix-online.org/download/). 

[Here is a pipeline](https://github.com/fraser-lab/Apo_Holo_Analysis/tree/main/refinement) that will re-refine your structures, run qFit, and then refine your qFit structure.


#### Quality control of structures.

The first, and easiest part of quality control of structures has to do with refinement metrics. 
Are you decreasing the R-free or R-gap? This can be extracted through refinement log files or running additional analysis.
Are there any clashes in the structure?
Are there Ramachandran outliers?

With pairs, you want to assess how well they align together in 3D. Aligning them is a beast in and of itself. Due to structures with the same sequence having different chain ids or residue numbers, we will need to match those up as all downstream analyses will rely on this. 

There are many different methods to align structures, but I landed with pymol, alpha carbon align. This did not work well for 100% of the paired structures I had but it is what worked for the majority of them. 

I then required all chains start with residue 1. Then, as I was working with paired structures, I based all holo structures off of apo structures. Therefore, I reassigned the closest geometric chain in the holo to the chain in the apo. 


Some additional criteria you will want to think about in this stage include:
How well do the backbones of structures line up? This can be assessed by alpha carbon RMSD between the structures. While some analyses may want to keep large changes, others may want to throw them out. 
How much do the ligands overlap between the structures?

[Here is a pipeline](https://github.com/fraser-lab/Apo_Holo_Analysis/tree/main/QC) that will extract and compare R-values, align your pairs, and spit out alpha RMSD and ligand overlap between the pairs.


#### Analysis of structures

Now we get to the fun stuff!

Before we can run any analysis, you need to think about how you want to extract information from the structures. Are you going to do it based on chain and residue numbering or based on location. I choose the former as it is easier downstream. However, this required me to reassign the chain and residue numbers for many structures (see above). 

The other thing to think about when comparing structures is if there are duplicates. In my case, I had multiple holo assigned to multiple apo. Therefore in the analysis, it was important to keep track of not just the PDB, but also the PDB’s matched pair. 

Finally, you also need to consider how you are going to look at certain sections of the PDB. For example, I wanted to examine binding site residues. But my criteria (any residue heavy atom within 5A of any ligand heavy atom) sometimes gave me one or two different residues in the holo or apo depending on how much those residues moved. I decided to look at the union of those two lists, but you could also look at the intersection of those two lists.

[Here are a bunch of analyses](https://github.com/fraser-lab/Apo_Holo_Analysis/tree/main/analysis) that I ran on my pairs or individual models. 

#### Quality control of the analysis

For almost every single analysis I did, I would plot the result and have a few outrageous outliers. This was always a clue of something I coded wrong in the analysis, or something incorrect about the labeling of the PDBs. 

When looking at the result of your analysis, always look at the minimum and maximum values on both an individual basis (ie if you are looking at some sort of residue metric), as well as on a structure basis. Take at least the top and bottom five metric values and go through checking for the following:	
Is residue 1, chain A of structure 1 within your RMSD cutoff of residue 1, chain A of structure 2?
If you manually calculate the metric you are measuring, is it matching what your code says?
Look at the structure in Pymol or Chimera. Does the numerical value of the metric line up with what you are visualizing?

Repeat this process until you can visually/biologically explain at least the top and bottom five metric values. 


	
