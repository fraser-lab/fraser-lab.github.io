---
title: Introduction to Computing for Biophysicists
layout: default
group: courses
---

# Introduction to Computing for Biophysicists

## Fall 2023 Syllabus

**Course Days/Hours:** Sept 11, 12*, 13*, 15, 18, 19, 20 from 9-11AM (*8-9:30AM on 9/12 and 9/13)

**Location:** GH 227 - Teaching Lab

**Instructors:** [James Fraser](mailto:jfraser@fraserlab.com), [Stephanie Wankowicz](mailto:mullane.stephanie@gmail.com)



## Course Description:
This will be a practical course to get you familiar with basic coding including:
    How to use the terminal to move files around
    How to do basic scripting in Python
    How to work on remote computers

The course aims to introduce you to some ways to gain some algorithmic understanding and how to use coding as a biologist. While there are many tools out there to help you code (ChatGPT, Github Co-pilot, ect), they are difficult to use if you don't have some algorithmic or coding background. 


## Racism and Bias in Computing
Computing systems were designed by folks with bias and therefore have bias built in. Also there is occaisionally offensive terminology (master/slave) for some processes - but these are mostly being phased out.


## Course structure
Hands-on practical course - learn as you go!

### Sept 11 - JF
- Register for a [Wynton account](https://wynton.ucsf.edu/hpc/about/join.html)
- file system and terminal
    - [download VS code](https://code.visualstudio.com/download)
    - Navigate to where it downloaded
    - List files
    - Run on the command line to install
    - Create a folder on your desktop
    - Navigate to that folder on command line
    - Create files name.txt, favorite_papers.txt, etc in vs code in that folder
    - List and cat files in that folder
    - Make another folder, copy and move files between folders and follow actions on GUI
    - Folders within folders and the file tree!

### Sept 12 - JF
- Download [Macrodomain Fasta Sequences](https://ucsf.box.com/s/6p6mtsnawsxusy9z5jyg5idwov78fc1r)
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

### Sept 15 - SW
- catchup on previous days
    - share python scripts and run them for class
    - how to prompt chatgpt to write these scripts for you
- command line and remote computers 
    - move through directories and command line refresh
    - introduction to ssh and scp concepts

### Sept 18 - SW 
- working on a remote computer (Wynton)
    - logging in
    - file transfer
    - vi and how to do insert mode, write, quit - note that there are many other things, but that we aren't using them
    - how to make a bash script 
    - job submission 101 to run the translation script in parallel rather than in a for loop in a single script

### Sept 19
- structure prediction and pipeline building (Wynton - SW)
    - run alphafold on the sequences in your folder
      
- plotting results (local - JF)
    - install conda
    - plot the distribution of gene lengths in your folder
    - show an example from enzyme kinetics

### Sept 20
- download alphafold files and visualize in pymol or chimera
