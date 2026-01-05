---
title: How to make depositing a ligand-bound ribosome model and raw CryoEM movies as painless as possible
author: Jenna Pellegrino
layout: post
group: news
tags: how_to
---

I've learned quite a bit through my experiences with the PDB and EMPIAR deposition processes of ligand-bound ribosome CryoEM data. The below are some of my guidelines and tips for how to make going through these two deposition processes less confusing and/or frustrating.


### Part 1: PDB deposition

_This blog post assumes you have a finalized map and model ready for deposition._

There’s a lot of information below. Here’s the short version, which will serve as a refresher after having read this post in full:


1. Choose the right coordinates file format (.pdb or .cif) for the size of your model
2. Run BLAST on each chain, pick the best match, and update sequence with non-standard residues
3. Have your data collection and processing information from your Table 1
4. Have your ligand’s SMILES string
5. Resolve outliers and clashes denoted in the Validation report before submitting
6. Review analysis report, make corrections, reupload a file or approve for deposition


#### Opening a deposition instance

Go to the PDB’s [wwPDB Deposition Service](https://deposit-1.wwpdb.org/deposition/pageview/message) and start a new deposition. Select your country and then answer the questions below. In this example, we’re depositing a single particle electron microscopy structure; we’re depositing coordinates (that’s the model), and the associated map has not previously been deposited. You’ll get an email with login details.

Note that you will need to open a new deposition account for each map/model pair you plan to deposit.


#### Uploading map, model, and png thumbnail

Along with the map, you need the calibrated pixel size from the data collection (which, if you haven't binned your data, is equal to the voxel spacing) and a recommended contour level. For the recommended contour level, open the map and model in Coot, zoom in on the ligand, and adjust the map’s contour. Record the sigma of the map that produces the best clarity for observing the ligand’s density.

The model you upload can be in either PDB format (.pdb) or mmCIF format (.cif); for information on model refinement using PHENIX with the OPLS3e force field, [see my Benchling protocol here](https://benchling.com/s/prt-NZbPw7A4suj8oZoTEKJa). If you upload a .pdb, it must meet PDB naming requirements, and there must be a “TER” line after each polymer chain. The most relevant PDB naming restrictions for ribosome models are: 1) chain names can only be one letter long and 2) atom names cannot have letters in them. For small ribosome models, these likely won’t be an issue; however, larger ribosome models with many chains and atoms will run into these issues. The easiest way around these is to convert the model to mmCIF format, which supports these naming schemes. Open the model in PyMOL, save it as a .cif, and upload this model file to the PDB deposition service.


1. Be careful if you were working with a .cif ribosome model containing chains with two-letter names (such as chains AA, AB, AC) and saved it as a .pdb. These chains will all be renamed to chain A. You’ll then run into such issues as “chain A has multiple atoms with the same name”.
2. This is relevant to you if there are more than 99,999 atoms in your model, because then atoms will start getting named with letters, such as “A0000”. If this is in your model, you’ll get a “ERROR: 'A0000' is not a number.” flag when you try to upload your model to the PDB deposition service.

Don’t overthink the thumbnail. I used the same screenshot of my ribosome map, shown as a surface, in Chimera as my thumbnail for all my ligand-bound ribosome models.

When you submit these files, PDB validation will run on the model you uploaded. You’ll get an email when the validation report is ready to look at. More on this file later. Know that you can also run this validation on any model with the [wwPDB Validation Service](https://validate-rcsb-2.wwpdb.org/).


#### Completing the “Admin” section

This section is straightforward. Note that, after filling in all this information once, you can choose to copy it to a new deposition instance.


#### Getting complete nucleotide and amino acid sequences for your model

In the “Macromolecules” section, you’ll need to submit names and sequences for each polymer chain in your model following these directions:

> Input the sequence of this molecule using standard one-letter codes. Please include the complete sequence including tags, linkers, unobserved regions and mutations. Non-standard residues should be input using the three-letter code in parenthesis, e.g. (MSE).

It’s okay if the sequence you input has extra residues (this will be the case if the model you’re depositing has truncated chains or residues missing); however, the sequence you input cannot be lacking residues or ligands in the model you’re depositing. That means you need to include the three-letter code(s) for the ligand(s) in your model.

I stress that this sequence should be the _complete_ sequence of what is found in nature. To get this:

1. Run <code><em>phenix.print_sequence model.pdb > seq.txt </em></code>to extract the exact sequence of your model to a text file. Most of the time, the sequence in your model is incomplete, so do NOT use this sequence in the deposition. (If you do, you’ll probably get asked about it in the review, but better to be right the first time.) This output file will be in FASTA format. Annoyingly, all non-standard RNA residues will be represented with “?”. Currently, manually editing these to be in three-letter code with parenthesis, such as “(6MZ)”, is the only way I know to correct these. (Although you can do the next step without editing these “?”, you’ll need to edit them eventually. When I do this, I’ll have the model open in PyMOL with the Display Sequence on.)
2. Run a [BLAST](https://blast.ncbi.nlm.nih.gov/Blast.cgi) sequence alignment search. Although you can do BLAST searches with multiple FASTA inputs at once, I think it’s less confusing to do each polymer chain sequence one at a time. Select which BLAST search is appropriate for your sequence, either BLASTn for nucleotide sequences or BLASTp for ribosomal protein sequences. When the search is done, select a sequence with the greatest percent match that also accurately describes your sample. Click the GenBank link next to the sequence range for the alignment. This will bring you to an NCBI page. Click the FASTA link to get the sequence of the aligned region in FASTA format. Copy this FASTA and keep it, along with the weblink, in your records.
3. Edit this FASTA sequence: change all “T” to “U”, update any non-standard RNA residues to have their name in three-letter code enveloped in parenthesis, and, if this chain has your ligand(s) bound, add the ligand(s) name in three-letter code enveloped in parenthesis.
4. Input this sequence into the PDB deposition service. You can find suggestions for the chain’s name from the BLAST search. Examples of what I’ve used: 23S ribosomal RNA, 50S ribosomal protein L2. After pasting the sequence in, you’ll need to click the button to align it.
5. Below this section, you’ll specify how the molecule/sample was obtained (e.g. purified from natural source) and what it is (e.g. Escherichia coli, Taxonomy ID 562).
6. Repeat steps 2-5 for all other polymer chains.


#### Adding details of your collection

The data collection sections, e.g. “EM sample” and “EM experiment” tabs, are straightforward. Many of these details will be values already in your Table 1.


#### Addressing your ligands

In the “Ligands” section, you’ll specify which ligand is the study’s subject of interest (non-standard RNA residues will also appear among this list) and include a few additional details. I recommend submitting your ligand’s SMILES string among these.


#### Completing the “Assembly” and “Related entries” sections

For the ribosome, your model is likely C1, having no symmetry (might be different if yours is a crystal structure). If this is the case, then yes, your assembly applies to all chains and yes, the assembly can be generated without applying matrices.

The “Related entries” section is straightforward.


#### Reviewing the Validation report

There’s a lot of information packed into this report. Here are some especially important things to look out for:

*   Percentile scores: these bars should be in the blue
*   Outliers: bond length, bond angle, chirality, planarity, and Ramachandran
*   Cis peptides
*   Clashes: because the ribosome is huge, you’re bound to have a lot of these. I recommend running Validate → Probe Clashes on your model in Coot and focusing on the pink clashes near the ligand and those that are especially bad.
*   Ligand: you’ll need to wait for your submission to be reviewed before you can see all the details for this


#### Submitting your entry for deposition

Your job isn’t done when you submit your entry. You will be unable to edit the deposition instance until your PDB deposition contact reviews your submission and reports back to you. Once you submit, you’ll receive a PDB ID and an EMDB ID, if your map was obtained through electron microscopy. Don’t forget to add these accession names to your Table 1.


#### Reviewing the extended Validation report and closing out the deposition

When you receive this report, read over it, address anything flagged as potentially being wrong, and ensure that the rest of the information listed is correct. Open the extended Validation report and ensure the stereochemistry of your ligand is correct; if you gave your SMILES string, it’s unlikely this would be wrong, but still it’s better to check. At this point, you can still make any necessary changes to your model and reupload it, going through the process of validation again. If everything looks good and you’ve confirmed it, then there’s nothing else to do. Remember that you can always ask to have your deposition instance unlocked so you can make changes in the future. Uploading a new map or model will put you through the validation cycle again.



### Part 2: EMPIAR deposition

EMPIAR, or the Electron Microscopy Public Image Archive, is a public resource for raw electron microscopy movies, images, image stacks, particles, class averages, and more.


#### Opening an EMPIAR deposition instance

Go to EMPIAR’s [deposition home page](https://www.ebi.ac.uk/pdbe/emdb/empiar/deposition/login/?next=/pdbe/emdb/empiar/deposition/) to register your user account or to log in. Unlike the PDB, where you need to make a new deposition login for each structure you want to deposit, everything in EMPIAR is connected to one login. Once logged in, you can click the link aptly called “Create a new deposition” to get started. Note that EMPIAR has an [extremely helpful pictoral deposition manual](https://www.ebi.ac.uk/pdbe/emdb/empiar/deposition/manual/) available to you. I found it exceedingly useful and clear.

Once you’ve created a deposition instance, you have 3 main jobs:

1. Fill out all the citation, entry title, and authorship details (and upload a png or gif thumbnail)
2. Upload your data
3. Fill out the image set format specifications


#### Job 1 - Complete the Deposition overview

This is the first page you’re brought to when you make a new deposition. If need be, you can navigate back to it by clicking the “Deposition overview” link on the left under “Deposition-related tasks”. This section is straightforward. Note that, after filling in all this information once, you can choose to copy it to a new deposition instance.

Also note that nearly every section is required to be filled out. If you don’t have the information or if the section isn’t relevant, click “N/A”. This will allow you to Save & Validate successfully and move on. You can only upload your data once you successfully validate.


#### Job 2 - Upload your data

After having completed Job 1, you’ll be able to upload your data. There are 3 ways to do this: Globus, Aspera using the command line, and Aspera using the web interface. I completed all my data uploads using Globus. To use Globus, you’ll have to [make your own account and download Globus Connect Personal](https://www.globus.org/globus-connect-personal). You’ll need this software to establish an endpoint on the computer which houses your raw data, from which the transfer will be made to an EMPIAR endpoint.

Following the steps on EMPIAR under the Globus upload section is quite straightforward. I’ll reiterate their instructions to emphasize that [you must be logged into your Globus account](https://auth.globus.org/p/login?viewlocale=en_US&client_id=89ba3e72-768f-4ddb-952d-e0bb7305e2c7&redirect_uri=%2Fv2%2Foauth2%2Fauthorize%3Fclient_id%3D89ba3e72-768f-4ddb-952d-e0bb7305e2c7%26scope%3Durn%253Aglobus%253Aauth%253Ascope%253Aauth.globus.org%253Aview_identities%2520urn%253Aglobus%253Aauth%253Ascope%253Anexus.api.globus.org%253Agroups%2520urn%253Aglobus%253Aauth%253Ascope%253Atransfer.api.globus.org%253Aall%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fapp.globus.org%252Flogin%26redirect_name%3DGlobus%2520Web%2520App%26state%3D8rep1uj96iw%26viewlocale%3Den_US&scope=urn%3Aglobus%3Aauth%3Ascope%3Aauth.globus.org%3Aview_identities+urn%3Aglobus%3Aauth%3Ascope%3Anexus.api.globus.org%3Agroups+urn%3Aglobus%3Aauth%3Ascope%3Atransfer.api.globus.org%3Aall&redirect_name=Globus+Web+App&response_type=token) before trying to access their endpoint. Then, you can follow the links on EMPIAR to access their endpoint, log into the unique EMPIAR endpoint using the username and password they provide you, and transfer your data. Remember that you must have your home endpoint activated in order for you to be able to transfer anything.

Many types of raw EM data can be deposited to EMPIAR, including movies, images, and image stacks. If you’re depositing movies, it's required that you include the appropriate gain reference for each set of movies. Include a dark reference and defects file if available, but these are optional. 


#### Job 3 - Fill out the image set format specifications

Under “Deposition-related tasks”, you’ll now see an “Associate image sets with the data” section. Here, you’ll fill out some specifications, including the kind of data you’re uploading (e.g. multiframe micrographs), the format (e.g. TIFF), and the image and pixel sizes, among other details. If you don’t have these values on hand, most can be found in the header of your file. One potentially curious spec is the voxel type. If you don’t know what your voxel type is, you can use <code><em>header</em></code> from IMOD, <code><em>identify</em> </code>from ImageMagick, or the header flag <code><em>-H</em></code> from EMAN2 on one of your files to discern it. If your voxel type (also called “data type”) comes up as “unknown” by IMOD, try ImageMagick. For an unknown reason, the latter worked for me and not the former.


#### Submitting your entry for deposition

Your job isn’t done when you submit your entry. Once you submit, you’ll receive a public EMPIAR ID. Don’t forget to add this accession ID to your Table 1. Your entry will be reviewed and, once complete, you’ll have to log into your account to approve each deposition for release individually. Congratulations.


##### Another option to creating a deposition instance

When creating a deposition, you have the option to choose “Create a new deposition from XML” to upload an XML file containing all the specifications and details of one (or presumably multiple) depositions. You’ll need to [follow their XML schema, found here](ftp://ftp.ebi.ac.uk/pub/databases/emtest/empiar/schema/) in .xsd and .sch formats. If that link goes stale, you can also find the schema under the “What is EMPIAR data model?” section of their [FAQ](https://www.ebi.ac.uk/pdbe/emdb/empiar/faq).
