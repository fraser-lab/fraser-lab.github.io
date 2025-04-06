# KAIST MIC Lab

Forked from fraser-lab.github.io;

See, [here](https://fraserlab.com/2020/05/03/Clone-this-website/)

Draft: https://sites.google.com/view/kaist-mic/home

# How to adjust the website

- Members page: `members.md`
- Publications page: `publications.md`
- Research page: `research.md`
- News page: `news.md`
- Contact page: `contact.md`

# How to run this website locally

Technologies this website uses:  

    Jekyll  
    Github Pages  
    Twitter Bootstrap 4.4.1

Before pushing changes, please check that they will work on your system first with the plugins included in the Gemfile using the bundler tool (results served at [localhost:4000](localhost:4000)):
(For mac user; update your ruby; (https://mac.install.guide/ruby/update))

    sudo gem install bundler
    bundle install
    bundle exec jekyll serve
    
To create a conda environment to locally test and host, the following should suffice:

    conda create -n jekyll -c conda-forge rb-jekyll
    conda activate jekyll
    bundle install
    bundle exec jekyll serve
