# fraser-lab.github.io
====================

Technologies this website uses:  

    Jekyll  
    Github Pages  
    Twitter Bootstrap 4.4.1

Before pushing changes, please check that they will work on your system first with the plugins included in the Gemfile using the bundler tool (results served at [localhost:4000](localhost:4000)):

    sudo gem install bundler
    bundle install
    bundle exec jekyll serve
    
To create a conda environment to locally test and host, the following should suffice:

    conda create -n jekyll -c conda-forge rb-jekyll
    conda activate jekyll
    bundle install
    bundle exec jekyll serve

## Adding a New Review Post

Follow these steps to add a new peer review entry to the website:

1. **Prepare your image.** Save your representative figure as a PNG (or JPG) file and copy it into `static/img/reviews/`. Use the naming convention `YYYY_firstauthorlastname.png` (e.g., `2026_smith.png`).

2. **Create the review file.** Copy `_reviews/_template.md` and save it in `_reviews/` using the naming convention `YYYY_reviewerlastname_firstauthorlastname.md` (e.g., `2026_fraser_smith.md`).

3. **Fill in the front matter.** Open your new `.md` file and update each field:
   - `title` — the manuscript title
   - `date` — the date of public review in `YYYY-MM-DD` format
   - `authors` — manuscript authors in `Lastname AB` format, separated by commas
   - `reviewers` — lab reviewers in `Lastname AB` format, separated by commas
   - `image` — path to your image, e.g. `/static/img/reviews/2026_smith.png`
   - `abstract` — optional one-sentence abstract
   - Under `peer-review:`, fill in the relevant preprint server ID(s) (`biorxiv`, `chemrxiv`, `arxiv`, `preprintsorg`, `prereview`, etc.) and leave the others blank or remove them.

4. **Commit and push.** Add both the new `.md` file and the image file, then open a pull request:

       git add _reviews/2026_fraser_smith.md static/img/reviews/2026_smith.png
       git commit -m "Add review: Smith et al. 2026"
       git push