# fraser-lab.github.io
====================

Before pushing changes, please check that they will work on your system first with the plugins included in the Gemfile using the bundler tool (results served at [0.0.0.0:4000](0.0.0.0:4000)):

    gem install bundler
    bundle install
    bundle exec jekyll serve




Current site map:

├── _config.yml

├── _includes/

├── _layouts/

|   └── members.html # => This is where current members information should go

|   └── post.html # => This is where current members information should go

|   └── home.html # => This is where current members information should go

├── _posts/

├── _site/

├── _data

|   └── members.yml # => This is where current members information should go

|   └── alumni.yml # => This is where former members information should go

|   └── publications.yml # => This is where publication information should go

├── news/

|   └── index.html

├── members/

|   └── index.md  # => http://example.com/contact/

└── index.md      # => http://example.com/
