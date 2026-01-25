# GitHub Actions Setup for CGLab Website

## Quick Setup (5 minutes)

### Step 1: Create the workflow directory and file

```bash
# From your repository root
mkdir -p .github/workflows

# Copy the jekyll.yml file to .github/workflows/
# (use the file provided: jekyll.yml)
```

### Step 2: Update your Gemfile

Replace your current `Gemfile` with the new one provided.

### Step 3: Update local environment

```bash
# Remove old lock file
rm Gemfile.lock

# Install new dependencies
bundle install
```

### Step 4: Commit and push

```bash
git add .github/workflows/jekyll.yml Gemfile
git rm Gemfile.lock 2>/dev/null || true
git commit -m "Switch to GitHub Actions for Jekyll 4 deployment"
git push
```

### Step 5: Configure GitHub Pages (IMPORTANT!)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment" → "Source"
4. Change from "Deploy from a branch" to **"GitHub Actions"**
5. Save

### Step 6: Verify deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy Jekyll site to Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Check https://cgenomicslab.org

---

## Troubleshooting

### Build fails with gem errors
```bash
# Locally, update bundler
gem install bundler
bundle update
```

### Pages still shows old content
- Make sure you changed the source to "GitHub Actions" in Settings → Pages
- Hard refresh your browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)

### Workflow not triggering
- Ensure you're pushing to the `main` branch
- Check that the workflow file is in `.github/workflows/jekyll.yml` exactly

---

## Local Development

After setup, local development works the same:

```bash
bundle exec jekyll serve --livereload
# Open http://localhost:4000
```

Your local environment now matches production exactly.

---

## What Changed

| Before | After |
|--------|-------|
| GitHub Pages built with Jekyll 3.9 | GitHub Actions builds with Jekyll 4.3 |
| Limited to whitelisted plugins | Any plugin works |
| Old Ruby version | Ruby 3.2 |
| HTML rendering inconsistencies | Consistent rendering |
