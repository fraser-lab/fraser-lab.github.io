# KAIST MIC Lab

> [!Note]
> Maintained by Ph.D. student [**Myeongseok Ryu**](https://github.com/DDingR).  
> Contact me at <a href="mailto:dding_98@gm.gist.ac.kr">dding_98@gm.gist.ac.kr</a> for any questions or suggestions. 

Forked from [fraser-lab.github.io](https://fraserlab.com/2020/05/03/Clone-this-website/).

<!-- 
webpage made by Prof
https://sites.google.com/view/kaist-mic/news 
webpage (GIST)
https://mic.gist.ac.kr/prog/lectureMaster/mic/ALL/65352/list.do
-->

# How to adjust the website

> [!Note]
> Go to `_templates/` to contribute to the website.  
> Or just contact maintainer **Myeongseok Ryu** for any questions or suggestions.

- Philosophy page: `./_data/philosophy.yml`
- Research page: `./research/`
- Add a new project
  - Copy the template in `./_templates/`.
- Add Member Information
  - Copy the template in `./_templates/`.
- Add a new publication
  -Copy the template in `./_templates/`.
- Faculty page: `./faculty/index.md`
- Teaching page: `./course/index.md`
- Add a news post
  - Copy the template in `./_templates/`.
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
(For Windows user follow https://velog.io/@kimsoyeong/github.io-jekyll )

    sudo gem install bundler
    bundle install
    bundle exec jekyll serve
    
To create a conda environment to locally test and host, the following should suffice:

    conda create -n jekyll -c conda-forge rb-jekyll
    conda activate jekyll
    bundle install
    bundle exec jekyll serve
