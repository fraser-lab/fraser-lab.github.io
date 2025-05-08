# KAIST MIC Lab

> [!Note]
> Maintained by Ph.D. student [**Myeongseok Ryu**](https://github.com/DDingR).  
> Contact me at <a href="mailto:dding_98@gm.gist.ac.kr">dding_98@gm.gist.ac.kr</a> for any questions or suggestions. 

Forked from fraser-lab.github.io;

See, [here](https://fraserlab.com/2020/05/03/Clone-this-website/)

Draft: https://sites.google.com/view/kaist-mic/home

# How to adjust the website

> [!Note]
> Please follow the naming rule.

- Research page: `./research/`
- Philosophy page: `./_data/philosophy.yml`
- Add Member Information
  - Copy the template in `./_members/` and rename it to the new member's name (e.g., `msRyu.md`).
- Add a new publication
  -Copy the template in `./_publications/` and rename it to the new publication's name (e.g., `{year}-{first noun of paper}.md`, `2025-imposing.md`).
- Faculty page: `./faculty/index.md`
- Teaching page: `./course/index.md`
- News page: `./news/index.md`
- Join page: `./join/index.md`
- Contact page: `./contact/index.md`

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
