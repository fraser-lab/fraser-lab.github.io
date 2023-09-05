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
Computing is as essential as pipetting for success in graduate school. This practical course is intended to ensure that students without any background in scientific computing can become conversant in the fundamentals they need to succeed in our program, including:

- How to use the terminal to move files around
- How to do basic scripting in Python
- How to work on remote computers


We aim to introduce students to computational concepts by leverging their algorithmic understanding of molecular biology. Students are already familiar with data structures (the genetic code is a dictionary) and for loops (5'-3' transcription) - the challenge is how to formally code what we already understand in a syntax that makes sense to a computer. 


Finally, with the development of new AI tools (ChatGPT, Github Co-pilot, etc), "no code" coding is now possible and gaining power. We hypothesize that students will be better able to leverage such tools with the fundamental algorithmic thinking we aim to introduce in this course. 


*Accommodations for students with disabilities*: The Graduate Division embraces all students, including students with documented disabilities. UCSF is committed to providing all students equal access to all of its programs, services, and activities. Student Disability Services (SDS) is the campus office that works with students who have disabilities to determine and coordinate reasonable accommodations. Students who have, or think they may have, a disability are invited to contact SDS (StudentDisability@ucsf.edu); or 415-476-6595) for a confidential discussion and to review the process for requesting accommodations in classroom and clinical settings. More information is available online at http://sds.ucsf.edu. Accommodations are never retroactive; therefore students are encouraged to register with Student Disability Services (http://sds.ucsf.edu/) as soon as they begin their programs. UCSF encourages students to engage in support seeking behavior via all of the resources available through Student Life, for consistent support and access to their programs.

*Commitment to Diversity, Equity and Inclusion*: The course instructors and teaching assistants value the contributions, ideas and perspective of all students. It is our intent that students from diverse backgrounds be well-served by this course, that students' learning needs be addressed both in and out of class, and that the diversity that the students bring to this class be viewed as a resource, strength and benefit. It is our intent to present materials and activities that are respectful of diversity: gender identity, sexuality, disability, age, socioeconomic status, ethnicity, race, nationality, religion, and culture. However, we also acknowledge that computing systems were designed by people with biases and therefore likley have those biases built in. Additionally, the field is phasing out offensive terminology for some processes - but such terminology may be present in linked material from the class page. The instructors are committed to continuous improvement of our practices and our learning environment. We value input from students and your suggestions are encouraged and appreciated. Please let the course director or program leadership know ways to improve the effectiveness of the course for you personally, or for other students or student groups. (modeled after CCB and [Brown University's Diversity & Inclusion Syllabus Statements](https://www.brown.edu/sheridan/teaching-learning-resources/inclusive-teaching/statements))

## Course structure
This is a hands-on practical course - we will be moving at the pace of the student who completes the task last! This is our first time teaching this course and we expect that the level of prior knowledge will be quite heterogeneous. Students should keep in mind that the goal is to understand each aspect of what we are doing, not to finish first. There are no grades - this is about setting up a foundation for success in the Biophysics graduate program. 


We will begin with understanding the relationship between the terminal, filesystem, and the GUI. We will then move to basic python scripting, grounding ourselves in creating python versions of the ribosome and restriction enzymes. Next, we will move to working on remote computers, which can help us answer our reserach questions faster by parallelizing our work. Finally, if there is time, we will explore ways to visualize our results using plotting libraries and molecular graphics tools. 


### Sept 11 - 9AM - JF
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
    - COFFEE FIELD TRIP
    - Make another folder, copy and move files between folders and follow actions on GUI
    - Folders within folders and the file tree!

### Sept 12 - 8AM - JF
- Download [Macrodomain Fasta Sequences](https://ucsf.box.com/s/6p6mtsnawsxusy9z5jyg5idwov78fc1r)
- introduction to python
    - hello world and printing
        - debugging: One of the tools in a programmer's toolbox is figuring out how to look for errors, or "bugs", in their code. The process of finding and removing bugs in your code is called **debugging**, and from computer science folklore, the origin of this word comes from legendary computer scientist Grace Hopper, who once found an actual moth in her computer (back when they were the size of rooms) that caused an error in its calculations. [She removed the moth and taped it to her logbook, and the term "debugging" was born](https://sites.pitt.edu/~super1/lecture/lec44911/img019.JPG).
    - taking a DNA sequence and printing
    - taking a DNA sequence and transcribing
        - pseudocode, for loop, if statement, string concatenation
    - taking a RNA sequence and printing out codons
    - COFFEE FIELD TRIP!
    - translating a RNA sequence into protein
        - dictionaries!
    - find restriction enzyme site in original DNA sequence
        - regular expressions for string matching
        - using regular expressions for the transcription example!

### Sept 13 - 8AM - SW
- Introduction to loops and packages
    - Download [Macrodomain Fasta Sequences](https://ucsf.box.com/s/6p6mtsnawsxusy9z5jyg5idwov78fc1r)
    - [Conda](https://docs.conda.io/en/latest/)
    - [Google Collab Notebook](https://colab.research.google.com/drive/1OJkzLZYxLImzxHsYQ30g6IppNbuLt5YC?usp=sharing) 
        - Create a copy of the original notebook for your own work
        - glob to get a list of sequences
        - loops
        - Create a loop to transcribe and translate the sequences
        - write/save the amino acid sequences 

### Sept 15 - 9AM - SW
- Share python scripts with a partner/small group
    - how did different people approach the problem
    - how to prompt chatgpt to write these scripts for you
        - re-create your scripts using chagpt
- command line and remote computers: [Wynton](https://wynton.ucsf.edu/hpc/index.html)
    - ssh into Wynton
    - Where are you?
    - scp FASTA list up to wynton    
    - List files
    - Is this a directory structure you want?
        - Make another folder, copy and move files between folders
    - Create a new file called myfavoritefile.txt
        - scp this file back down to your computer


### Sept 18 - 9AM - SW 
- Working on [Wynton](https://wynton.ucsf.edu/hpc/index.html) 
    - logging in
    - dev node v. login node
    - file transfer
    - vi and how to do insert mode, write, quit - note that there are many other things, but that we aren't using them
    - how to make a bash script 
    - job submission 101 to run the translation script in parallel rather than in a for loop in a single script

### Sept 19 - 9AM
- structure prediction and pipeline building (Wynton - SW)
    - run alphafold on the sequences in your folder
      
- plotting results (local - JF)
    - install conda
    - plot the distribution of gene lengths in your folder
    - show an example from enzyme kinetics

### Sept 20 - 9AM
- download alphafold files and visualize in pymol or chimera
