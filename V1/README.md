# cgenomicslab.github.io
====================

Technologies this website uses:  

    Jekyll  
    Github Pages  
    Twitter Bootstrap 4.4.1

Before pushing changes, please check that they will work on your system first with the plugins included in the Gemfile using the bundler tool (results served at [localhost:4000](localhost:4000)):

Getting started
===============

 1. Install all [prerequisites](https://jekyllrb.com/docs/installation/)
 1. Install the jekyll and bundler gems
    ```
    gem install jekyll bundler
    ```
 1. Clone this repository
    ```
    git clone git@github.com:cgenomicslab/cgenomicslab.github.io.git
    ```
 1. Change into your new directory
    ```
    cd cgenomicslab.github.io
    ```
1.  Install missing gems
    ```
    bundle install
    ```
 1. Build the site and make it available on a local server
    ```
    bundle exec jekyll serve
    ```
 1. Browse to `http://localhost:4000`