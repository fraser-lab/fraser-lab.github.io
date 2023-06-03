---
title: Multi-state models from PanDDA
author: Galen Correy
layout: post
group: news
tags: how_to
---
### Background

The pan-dataset density analysis ([PanDDA](https://pandda.bitbucket.io)) tool developed by [Nick Pearce](http://www.crystal.chem.uu.nl/~pearce/) and colleagues at the [XChem facility](https://www.diamond.ac.uk/Instruments/Mx/Fragment-Screening.html) of the [Diamond Light Source](https://www.diamond.ac.uk/Home.html) is a super powerful method for identifying low occupancy states in X-ray crystallography data [[1](https://www.nature.com/articles/ncomms15123),[2](https://www.science.org/doi/10.1126/sciadv.abf8711)]. Why do we care about low occupancy states? For one thing, the field of fragment-based drug discovery relies on tools to identify weakly bound ligands [[3](https://pubs.acs.org/doi/10.1021/jm040031v),[4](https://www.nature.com/articles/nchem.217)]. When fragments are soaked into protein crystals, the occupancy of the fragment (i.e. the proportion of protein molecules with a fragment bound) can often be relatively low (e.g. 10-20%). PanDDA helps to identify low occupancy fragments by subtracting the ground-state electron density (i.e. the electron density when no ligand is present) from the changed-state electron density (i.e. the electron density when the ligand is present) [[1](https://www.nature.com/articles/ncomms15123)]. In addition to transforming crystallographic fragment screening, PanDDA can also help to identify and model larger ligands that may bind with relatively high affinity compared to fragments, but still have relatively low occupancy. This discrepancy can arise because ligand occupancy in soaking experiments does not necessarily correlate with binding affinity as measured by solution-based methods. One reason for this is low ligand solubility; it may be difficult to reach 1:1 stoichiometry in a soaking experiment. Another reason is that a binding site may be partially obstructed, or otherwise stabilized in a conformation that decreases the ligand occupancy. The presence of low occupancy states is a fundamental challenge of using crystallographic soaking experiments for determining ligand structures: identifying and resolving these states is the reason that PanDDA is such a powerful method. 

PanDDA is a powerful tool for identifying low occupancy states, but it presents crystallographers with a new challenge: actually modeling the states it identifies! The best option is to model both states using alternative occupancy (altloc) identifiers in the coordinate file to distinguish ligand-bound and ligand-free states [[1](https://www.nature.com/articles/ncomms15123),[5](http://scripts.iucr.org/cgi-bin/paper?S2059798317003412)] (this results in what we call a multi-state model). However, these multi-state models can be difficult to interpret/visualize, especially for the vast majority of users that are only interested in the ligand-bound state. A related issue is that we want to ensure that users can easily examine the PanDDA event maps that were used to model a ligand. For our recent preprint describing the design and structure-based optimization of ligands targeting the Nsp3 macrodomain, we modeled all the structures using a multi-state approach [[6](https://www.biorxiv.org/content/10.1101/2022.06.27.497816v2)]. We’ve taken the following steps to disseminate the structures and maps as rapidly and helpfully as possible.

1. Multi-state coordinate files and structure factor intensities have been deposited in the PDB (with RELEASE NOW selected)

2. Structure factor intensities in MTZ format, Dimple output, PanDDA event/Z-maps, refined structures and ligand-bound states are available to download from [Zenodo](https://doi.org/10.5281/zenodo.6974665)

3. Diffraction images are available to download from https://proteindiffraction.org (search by PDB code)

### How to extract the ligand-bound state in our multi-state models
#### Option 1
- Download coordinates from PDB (e.g. `fetch 5SQP` in PyMOL)

- Remove the altloc A coordinates - these correspond to the ligand-free state (`remove alt A` in PyMOL)

- The coordinates can then be visualized or saved as a coordinate file (`pdb 5SQP_ligand-bound.pdb` in PyMOL)

#### Option 2
- Use [this](https://github.com/gcorrey/scripts/tree/main/extract_ligand-bound_state) PyMOL script to fetch the coordinates using the PDB code and extract the ligand-bound state

- This script removes the altloc records for residues that only have a single conformation modeled in the ligand-bound state and renames the altloc records for residues with multiple conformations (Alternatively: the ligand-bound states can be downloaded directly from [Zenodo](https://doi.org/10.5281/zenodo.6974665)) 

### How to inspect PanDDA event maps
#### Option 1
- Use [this](https://github.com/gcorrey/scripts/tree/main/extract_pandda_from_cif) script to extract the PanDDA event map from the deposited structure factor CIFs (discussed [here](https://fraserlab.com/2021/08/26/Inspecting-PanDDA-event-maps/))
- The resulting map coefficients in MTZ format can be converted to CCP4 format using [phenix.mtz2map](https://phenix-online.org/documentation/reference/maps.html).

#### Option 2
- Download the PanDDA event map in .ccp4 format from [Zenodo](https://doi.org/10.5281/zenodo.6974665). (Note: use COOT version 0.8.9.2 to visualize maps.)

### Where to next?
Our goal is to use macromolecular structural information to make ligand discovery more efficient. We think that identifying and modeling low occupancy states is critical to this endeavor. Developing automated ways to model the low occupancy states identified by PanDDA is a long-term goal. This will speed up ligand modeling and reduce the error/bias that is often associated with manual approaches.

### References
[[1]	Pearce, N. M., Krojer, T., Bradley, A. R., Collins, P., Nowak, R. P., Talon, R., Marsden, B. D., Kelm, S., Shi, J., Deane, C. M. & von Delft, F. A multi-crystal method for extracting obscured crystallographic states from conventionally uninterpretable electron density. Nat. Commun. 8, 15123 (2017).](https://www.nature.com/articles/ncomms15123)

[[2]	Schuller, M., Correy, G. J., Gahbauer, S., Fearon, D., Wu, T., Díaz, R. E., Young, I. D., Carvalho Martins, L., Smith, D. H., Schulze-Gahmen, U., Owens, T. W., Deshpande, I., Merz, G. E., Thwin, A. C., Biel, J. T., Peters, J. K., Moritz, M., Herrera, N., Kratochvil, H. T., QCRG Structural Biology Consortium, Aimon, A., Bennett, J. M., Brandao Neto, J., Cohen, A. E., Dias, A., Douangamath, A., Dunnett, L., Fedorov, O., Ferla, M. P., Fuchs, M. R., Gorrie-Stone, T. J., Holton, J. M., Johnson, M. G., Krojer, T., Meigs, G., Powell, A. J., Rack, J. G. M., Rangel, V. L., Russi, S., Skyner, R. E., Smith, C. A., Soares, A. S., Wierman, J. L., Zhu, K., O’Brien, P., Jura, N., Ashworth, A., Irwin, J. J., Thompson, M. C., Gestwicki, J. E., von Delft, F., Shoichet, B. K., Fraser, J. S. & Ahel, I. Fragment binding to the Nsp3 macrodomain of SARS-CoV-2 identified through crystallographic screening and computational docking. Sci Adv 7, (2021).](https://www.science.org/doi/10.1126/sciadv.abf8711)

[[3]	Erlanson, D. A., McDowell, R. S. & O’Brien, T. Fragment-based drug discovery. J. Med. Chem. 47, 3463–3482 (2004).](https://pubs.acs.org/doi/10.1021/jm040031v)

[[4]	Murray, C. W. & Rees, D. C. The rise of fragment-based drug discovery. Nat. Chem. 1, 187–192 (2009).](https://www.nature.com/articles/nchem.217)

[[5]	Pearce, N. M., Krojer, T. & von Delft, F. Proper modelling of ligand binding requires an ensemble of bound and unbound states. Acta Crystallogr D Struct Biol 73, 256–266 (2017).](http://scripts.iucr.org/cgi-bin/paper?S2059798317003412)

[[6]	Gahbauer, S., Correy, G. J., Schuller, M., Ferla, M. P., Doruk, Y. U., Rachman, M., Wu, T., Diolaiti, M., Wang, S., Jeffrey Neitz, R., Fearon, D., Radchenko, D., Moroz, Y., Irwin, J. J., Renslo, A. R., Taylor, J. C., Gestwicki, J. E., von Delft, F., Ashworth, A., Ahel, I., Shoichet, B. K. & Fraser, J. S. Structure-based inhibitor optimization for the Nsp3 Macrodomain of SARS-CoV-2. bioRxiv 2022.06.27.497816 (2022). doi:10.1101/2022.06.27.497816](https://www.biorxiv.org/content/10.1101/2022.06.27.497816v2)
