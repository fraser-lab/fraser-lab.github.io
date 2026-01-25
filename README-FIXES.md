# CGLab Website Fixes - Summary

## Overview of Issues and Fixes

### 1. MEMBER PHOTO CROPPING (b&w vs color appear different)

**Problem:** Both images have the same frame but crop differently because `object-position` isn't set.

**Fix:** Add to `static/css/main.css`:

```css
.member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top; /* Ensures both images align identically */
    transition: opacity 0.3s ease;
}

.member-photo img.main-img {
    position: relative;
}

/* Also add for member page large photos */
.member-photo-large img {
    object-position: center top;
}
```

---

### 2. MEMBER LINKS NOT APPEARING ON HOMEPAGE

**Problem:** The SVG icons in member-links aren't rendering properly.

**Fix:** In `index.md`, ensure the SVGs are on single lines with no breaks. Replace the members section with the code in `members-section-fix.html`.

Key change - keep SVG elements inline:
```html
{% if member.orcid %}<a href="..."><svg ...></svg></a>{% endif %}
```

---

### 3. EMAIL NOT VISIBLE ON HOMEPAGE

**Fix:** Add email display in the members grid. In the members section of `index.md`, add after `<div class="member-position">`:

```html
{% if member.email %}
<div class="member-email-inline">{{ member.email }}</div>
{% endif %}
```

And add this CSS to `main.css`:
```css
.member-email-inline {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 0.15rem;
    word-break: break-all;
}
```

---

### 4. TWO EMAILS (gmail + institutional)

**Fix A - In member profile `_members/pittis.md`:**
Add `email2` field:
```yaml
email: alexandros.pittis [at] imbb.forth.gr
email2: alexandros.pittis [at] gmail.com
```

**Fix B - In `_layouts/member.html`:**
Add after the first email line:
```html
{% if page.email2 %}
<p class="member-email">{{ page.email2 }}</p>
{% endif %}
```

**Fix C - In contact section of `index.md`:**
Simply add the second email line manually.

---

### 5. REMOVE TIMELINE FOOTER

**Fix:** In `index.md`, delete this entire section at the bottom:

```html
<div class="visual-footer">
<div class="container">
<img src="/static/img/logo/timeline.png" ... >
<p class="visual-footer-caption">
The history of life on Earth...
</p>
</div>
</div>
```

---

### 6. GOOGLE MAPS WRONG LOCATION

**Problem:** The embed coordinates are not centered on the exact location.

**Fix:** 
1. Go to Google Maps
2. Navigate to your exact location
3. Click Share → Embed a map
4. Copy the embed URL
5. Replace the `src="..."` in the iframe

Or update the link to your short link: `https://maps.app.goo.gl/zGpFGo7fDnC1gNFm7`

In `index.md` contact section, update both:
- The iframe src URL
- The "Open in Google Maps" link

---

### 7. PUBLICATIONS SECTION (no lab publications yet)

**Options:**

**A) Reframe as "Selected work by lab members"** - Shows PI's previous papers with clear framing

**B) Minimal version** - Just link to Google Scholar with a note that lab opened in 2024

**C) Hide entirely** - Comment out the publications section and remove from nav

See `publications-section-options.html` for code.

---

### 8. UPDATE PLACEHOLDER IDs

In `index.md` and `contact/index.md`, replace:
- `XXXXXXXX` with your actual Google Scholar ID: `YbX4E3cAAAAJ`
- `0000-0000-0000-0000` with your ORCID: `0000-0003-4116-9972`

---

## Files in This Package

- `css-fixes.css` - CSS additions for main.css
- `members-section-fix.html` - Replace members section in index.md
- `contact-section-fix.html` - Replace contact section in index.md  
- `publications-section-options.html` - Choose one option
- `_members/pittis.md` - Updated member profile with email2
- `_layouts/member.html` - Updated layout with email2 support

---

## Quick Checklist

- [ ] Add CSS fixes to `static/css/main.css`
- [ ] Update members section in `index.md`
- [ ] Update contact section in `index.md` (add gmail, fix map)
- [ ] Remove visual-footer from `index.md`
- [ ] Update `_members/pittis.md` with email2
- [ ] Update `_layouts/member.html` for email2
- [ ] Replace XXXXXXXX with YbX4E3cAAAAJ (Scholar ID)
- [ ] Replace 0000-0000-0000-0000 with 0000-0003-4116-9972 (ORCID)
- [ ] Decide on publications approach
