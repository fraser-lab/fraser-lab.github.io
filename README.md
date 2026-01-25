# CGLab Website

Comparative Genomics Lab @ IMBB-FORTH

https://cgenomicslab.org

---

## Local Development

Running the site locally lets you preview changes instantly before pushing to GitHub.

### Prerequisites

You need Ruby and Bundler installed.

**macOS:**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby (macOS has a system Ruby but it's outdated)
brew install ruby

# Add Ruby to your PATH (add this to ~/.zshrc or ~/.bash_profile)
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Install Bundler
gem install bundler
```

**Linux (Ubuntu/Debian):**
```bash
# Install Ruby and dependencies
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# Avoid installing gems as root - set up a gem directory
echo '# Ruby gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install Bundler
gem install bundler
```

**Linux (Fedora/RHEL):**
```bash
sudo dnf install ruby ruby-devel
gem install bundler
```

### Running Locally

```bash
# Clone the repository (first time only)
git clone https://github.com/cgenomicslab/cgenomicslab.github.io.git
cd cgenomicslab.github.io

# Install dependencies (first time, or after Gemfile changes)
bundle install

# Start the local server
bundle exec jekyll serve

# Site is now running at http://localhost:4000
# Changes to files will auto-refresh (except _config.yml)
```

### Useful Commands

```bash
# Serve with live reload (auto-refreshes browser)
bundle exec jekyll serve --livereload

# Serve and make accessible on local network (for testing on phone)
bundle exec jekyll serve --host 0.0.0.0

# Build without serving (just generate _site folder)
bundle exec jekyll build

# Clear cache if things look wrong
bundle exec jekyll clean
```

### Troubleshooting

**"Permission denied" errors:**
Don't use `sudo` with gem commands. Follow the GEM_HOME setup above.

**"Could not find gem" errors:**
```bash
bundle install
```

**Changes not showing:**
- For `_config.yml` changes: restart the server (Ctrl+C, then `bundle exec jekyll serve`)
- In browser: hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Port already in use:**
```bash
bundle exec jekyll serve --port 4001
```

---

## Deploying to GitHub Pages

Simply push to the main branch:
```bash
git add .
git commit -m "Your change description"
git push
```

GitHub Pages will automatically rebuild. This typically takes **1-5 minutes**. 

To check build status:
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Watch the latest workflow run

**Why is the live site slow to update?**
- GitHub Pages rebuild takes 1-5 minutes
- Your browser may cache old CSS/JS (hard refresh: Ctrl+Shift+R / Cmd+Shift+R)
- CDN caching can add a few more minutes

---

## Site Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates (default.html, member.html, post.html)
├── _includes/           # Reusable components (header.html, footer.html)
├── _members/            # Lab member profiles
├── _alumni/             # Former lab members
├── _publications/       # Publications
├── _posts/              # News posts
├── static/
│   ├── css/main.css     # Main stylesheet
│   └── img/             # Images
│       ├── members/     # Member photos
│       └── logo/        # Logos and graphics
├── index.md             # Homepage
├── research/            # Research page
├── members/             # Members listing
├── publications/        # Publications listing
├── news/                # News listing
├── join/                # Join page
└── contact/             # Contact page
```

---

## Adding Content

### New Lab Member

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

Bio text goes here. You can use **markdown** formatting.

- Education item 1
- Education item 2

## Research Interests
- Interest 1
- Interest 2
```

**Photo requirements:**
- Square aspect ratio recommended
- Place in `/static/img/members/`
- Main image: `lastname.jpg`
- Alt image (optional, shows on hover): `lastname_alt.jpg`

### New Alumni

Create `_alumni/lastname.md`:

```yaml
---
name: First Last
startdate: 2024-01-01
enddate: 2025-06-01
position: MSc Student
subsequent: PhD student at University X  # optional, shows "→ now PhD student at..."
---

Brief bio or leave empty.
```

### New Publication

Create `_publications/year_lastname_journal.md`:

```yaml
---
title: "Full paper title"
authors: "Author A, **Lab Member**, Author B"
journal: "Journal Name"
year: 2024
link: https://doi.org/10.xxxx/xxxxx
---
```

### New News Post

Create `_posts/YYYY-MM-DD-title.md`:

```yaml
---
title: "News headline"
author: First Last
---

News content here. Supports **markdown**.

You can include images:
![Alt text](/static/img/news/image.jpg)
```

---

## Common Edits

### Update contact information
Edit the contact section in `index.md` and also `contact/index.md`.

### Change research areas
Edit the research section in `index.md` and the full page at `research/index.md`.

### Update navigation
Edit `_includes/header.html`.

### Change styling
Edit `static/css/main.css`.

### Update site title/description
Edit `_config.yml` (requires server restart).

---

## Quick Reference

| Task | File(s) to edit |
|------|-----------------|
| Add lab member | Create `_members/name.md` + add photo |
| Add alumni | Create `_alumni/name.md` |
| Add news | Create `_posts/YYYY-MM-DD-title.md` |
| Add publication | Create `_publications/year_name.md` |
| Edit homepage | `index.md` |
| Edit styling | `static/css/main.css` |
| Edit navigation | `_includes/header.html` |
| Edit footer | `_includes/footer.html` |
