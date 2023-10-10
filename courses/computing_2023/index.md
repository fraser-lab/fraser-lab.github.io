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


Finally, with the development of new AI tools (ChatGPT, Github Co-pilot, etc), "no code" coding is now possible and gaining power. In fact, [a study has demonstrated that large language models can solve about 80% of introductory bioinformatic tasks, but the rest need additional prompting](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011511). We hypothesize that students will be better able to leverage such tools with the fundamental algorithmic thinking we aim to introduce in this course. 


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
    - intro to vim

### Sept 12 - 8AM - JF
- Download [Macrodomain Fasta Sequences](https://ucsf.box.com/s/6p6mtsnawsxusy9z5jyg5idwov78fc1r)
- Introduction to Python [Coding Examples](https://ucsf.app.box.com/folder/225609337521)
    - hello world and printing
        - debugging: One of the tools in a programmer's toolbox is figuring out how to look for errors, or "bugs", in their code. The process of finding and removing bugs in your code is called **debugging**, and from computer science folklore, the origin of this word comes from legendary computer scientist Grace Hopper, who once found an actual moth in her computer (back when they were the size of rooms) that caused an error in its calculations. [She removed the moth and taped it to her logbook, and the term "debugging" was born](https://sites.pitt.edu/~super1/lecture/lec44911/img019.JPG).
    - taking a DNA sequence and printing
        - dna_reader.py

        
### Sept 13 - 8AM - JF
- Central Dogma continued
    - taking a DNA sequence and transcribing
        - pseudocode, for loop, if statement, string concatenation
        - transcribe.py


### Sept 15 - 9AM - SW

```python
genetic_code = {
    'AUG': 'M', 
    'UUU': 'F', 'UUC': 'F',
    'UUA': 'L', 'UUG': 'L', 'CUU': 'L', 'CUC': 'L', 'CUA': 'L', 'CUG': 'L',
    'AUU': 'I', 'AUC': 'I', 'AUA': 'I',
    'GUU': 'V', 'GUC': 'V', 'GUA': 'V', 'GUG': 'V',
    'UCU': 'S', 'UCC': 'S', 'UCA': 'S', 'UCG': 'S', 'AGU': 'S', 'AGC': 'S',
    'CCU': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
    'ACU': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
    'GCU': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
    'UAU': 'Y', 'UAC': 'Y',
    'CAU': 'H', 'CAC': 'H',
    'CAA': 'Q', 'CAG': 'Q',
    'AAU': 'N', 'AAC': 'N',
    'AAA': 'K', 'AAG': 'K',
    'GAU': 'D', 'GAC': 'D',
    'GAA': 'E', 'GAG': 'E',
    'UGU': 'C', 'UGC': 'C',
    'UGG': 'W',
    'CGU': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R', 'AGA': 'R', 'AGG': 'R',
    'GGU': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G',
    'UAA': 'Stop', 'UAG': 'Stop', 'UGA': 'Stop'
}
```

- Central Dogma continued
    - taking a RNA sequence and printing out codons
        - codonizer.py
    - translating a RNA sequence into protein
        - dictionaries!
        - ribosome.py
- Introduction to packages
    - Intro to pandas

### WEEKEND TASK
    - Use the pseudocode we generated for all three scripts (DNA_sequence.py, transcribe.py, translate.py) and feed it into ChatGPT
       - Did you get the same output?
       - Did you get an error? 
       - Did you have to change your prompt at all?

### Sept 18 - 9AM - SW 

- Writing our own function 
    - To transcribe and translate all sequences
    - glob to get a list of sequences
    - loop over function and write/save the amino acid sequences 

    
### Sept 19 - 9AM - SW
- how to make a bash script
    - run your python script from bash script 

- Working on [Wynton](https://wynton.ucsf.edu/hpc/index.html) 
    - logging in
    - dev node v. login node
    - file transfer
         - scp FASTA list up to wynton    
    - Create another folder and a new file called myfavoritefile.txt
        - scp this file back down to your computer
    - Review vi and how to do insert mode, write, quit - note that there are many other things, but that we aren't using them
    
- job submission 101
    
     
### Sept 20 - 9AM - SW
- review submission errors & outputs
- plotting!
```python
data = {
    'Substrate Concentration (mM)': [0.1, 0.2, 0.4, 0.8, 1.6, 3.2, 6.4],
    'Reaction Rate (µM/min)': [0.5, 0.9, 1.6, 2.5, 3.2, 3.8, 4.2]
}
diff_temp = [0.6, 1.2, 2.0, 3.0, 3.5, 4.0, 4.4]
```
