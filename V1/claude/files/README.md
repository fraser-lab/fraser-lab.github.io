# CGLab Website

Comparative Genomics Lab @ IMBB-FORTH

https://cgenomicslab.org

## Quick Start

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Open http://localhost:4000
```

## Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _members/            # Lab member profiles
├── _alumni/             # Former lab members
├── _publications/       # Publications (simplified - just links)
├── _posts/              # News posts
├── static/
│   ├── css/main.css     # Stylesheet
│   └── img/             # Images
├── index.md             # Homepage
├── research/            # Research page
├── members/             # Members listing
├── publications/        # Publications listing
├── news/                # News listing
├── join/                # Join page
└── contact/             # Contact page
```

## Adding Content

### New Member
Create `_members/lastname.md`:
```yaml
---
name: First Last
startdate: 2024-01-01
position: PhD Student
image: /static/img/members/lastname.jpg
altimage: /static/img/members/lastname_alt.jpg  # optional, shows on hover
email: name [at] imbb.forth.gr
orcid: 0000-0000-0000-0000
scholar: GOOGLESCHOLARID
github: username
---
Bio text here.
```

### New Publication
Create `_publications/year_name.md`:
```yaml
---
title: "Paper title"
authors: "Author A, **Lab Member**, Author B"
journal: "Journal Name"
year: 2024
link: https://doi.org/...
---
```

### New News Post
Create `_posts/YYYY-MM-DD-title.md`:
```yaml
---
title: "News title"
author: Name
---
Content here.
```

## Customization

- Update profile links in `index.md` and `contact/index.md` with your actual ORCID, Scholar, GitHub
- Replace placeholder images in `static/img/`
- Edit research areas in `index.md` and `research/index.md`
