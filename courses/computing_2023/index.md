---
title: Introduction to Computing for Biophysicists
layout: default
group: courses
---

# Peer Review in the Life Sciences

## Fall 2023 Syllabus

**Course Days/Hours:** Sept 11, 12*, 13*, 15, 18, 19, 20 from 9-11AM (*8-9:30AM on 9/12 and 9/13)

**Location:** GH 227 - Teaching Lab

**Instructors:** [James Fraser](mailto:jfraser@fraserlab.com), [Stephanie Wankowicz](mailto:stephanie.wankowicz@ucsf.edu)



## Course Description:
hard to use chatgpt if you don't have some background, because prompting works so much better if you do it in a way that resemebles a python script. So we will start with a few days of python, and then move into the more advanced topics.


## Racism and Bias in Computing
Computing systems were designed by folks with bias and therefore have bias built in. Also there is occaisionally offensive terminology (master/slave) for some processes - but these are mostly being phased out.


## Course structure
Hands on practical course - learn as you go!
### Sept 11 - JF
- register for a wynton account
- file system and terminal
    - [download VS code](https://code.visualstudio.com/download)
    - navigate to where it downloaded
    - list files
    - run on command line to install
    - create a folder on your desktop
    - navigate to that folder on command line
    - create files name.txt, favorite_papers.txt, etc in vs code in that folder
    - list and cat files in that folder
    - make another folder, copy and move files between folders and follow actions on GUI
    - folders within folders and the file tree!

### Sept 12 - JF
- introduction to python
    - hello world and printing
    - taking a DNA sequence and printing
    - taking a DNA sequence and transcribing
    - taking a RNA sequence and printing out codons
    - translating a RNA sequence into protein
    - find restriction enzyme site in original DNA sequence

### Sept 13 - SW
- introduction to loops and packages
    - download a folder of many DNA sequences
    - glob as a first package to get a list of sequences
    - lists and iterating through a list
    - for loop to transcribe and translate the sequences

### Sept 15 (SW only)
- catchup on previous days
    - share python scripts and run them for class
    - how to prompt chatgpt to write these scripts for you
- command line and remote computers 
    - move through directories and command line refresh
    - introduction to ssh and scp concepts

### Sept 18 - SW 
- working on a remote computer (wynton)
    - logging in
    - file transfer
    - vi and how to do insert mode, write, quit - note that there are many other things, but that we aren't using them
    - how to make a bash script 
    - job submission 101 to run the translation script in parallel rather than in a for loop in a single script

### Sept 19
- structure prediction and pipeline building (wynton - SW)
    - run alphafold on the sequences in your folder
- plotting results (local - JF)
    - install conda
    - plot the distribution of gene lengths in your folder
    - show an example from enzyme kinetics

### Sept 20
- download alphafold files and visualize in pymol or chimera