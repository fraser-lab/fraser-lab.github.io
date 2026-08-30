#!/usr/bin/env python3
"""Rebuild static/css/bootstrap.min.css from static/css/bootstrap.full.css,
keeping only the rules this site can actually use.

The site uses 66 of Bootstrap's 1554 class selectors, so the shipped file is
about a tenth of the full framework. Run this after adding a Bootstrap class
that is not already in use, or the new class will simply have no styles:

    python3 tools/trim-bootstrap.py

It collects class names from the built site (_site, if present), from every
source template and markdown file (including kramdown {: .class } attributes),
and from class names referenced in JavaScript, then keeps any rule whose
selector uses only those classes. Element, attribute and :root rules are always
kept, as are @font-face, @keyframes and @page blocks; @media and @supports
blocks are filtered recursively and dropped if they end up empty.
"""
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FULL = os.path.join(ROOT, 'static/css/bootstrap.full.css')
OUT = os.path.join(ROOT, 'static/css/bootstrap.min.css')


def collect_classes():
    used = set()
    patterns = ['_site/**/*.html', '**/*.html', '**/*.md', '_data/*.yml', 'static/js/*.js']
    for pattern in patterns:
        for path in glob.glob(os.path.join(ROOT, pattern), recursive=True):
            if '/static/css/' in path:
                continue
            try:
                text = open(path, errors='ignore').read()
            except OSError:
                continue
            for m in re.finditer(r'class="([^"]+)"', text):
                used.update(m.group(1).split())
            for m in re.finditer(r'\{:\s*\.([\w-]+)', text):
                used.add(m.group(1))
            for m in re.finditer(r'classList\.(?:add|remove|toggle|contains)\(\s*[\'"]([\w-]+)', text):
                used.add(m.group(1))
            for m in re.finditer(r'querySelector(?:All)?\([\'"]\.([\w-]+)', text):
                used.add(m.group(1))
    return used


def split_top(css):
    """Yield (prelude, block) pairs at the top level of a stylesheet."""
    out, depth, start, i, instr = [], 0, 0, 0, None
    prelude = body_start = None
    while i < len(css):
        c = css[i]
        if instr:
            if c == '\\':
                i += 2
                continue
            if c == instr:
                instr = None
        elif c in '"\'':
            instr = c
        elif c == '{':
            if depth == 0:
                prelude, body_start = css[start:i], i + 1
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                out.append((prelude.strip(), css[body_start:i]))
                start = i + 1
        i += 1
    return out


def filter_rules(block, used):
    kept = []
    for prelude, body in split_top(block):
        if prelude.startswith('@'):
            at = prelude.split()[0].lower()
            if at in ('@media', '@supports'):
                inner = filter_rules(body, used)
                if inner.strip():
                    kept.append('%s{%s}' % (prelude, inner))
            else:
                kept.append('%s{%s}' % (prelude, body))
            continue
        selectors = []
        for sel in prelude.split(','):
            classes = re.findall(r'\.(-?[_a-zA-Z][\w-]*)', sel)
            if not classes or all(c in used for c in classes):
                selectors.append(sel.strip())
        if selectors:
            kept.append('%s{%s}' % (','.join(selectors), body))
    return ''.join(kept)


def main():
    if not os.path.exists(FULL):
        sys.exit('missing %s (the untrimmed Bootstrap build)' % FULL)
    css = open(FULL).read()
    used = collect_classes()
    banner = ('/*! Trimmed from bootstrap.full.css by tools/trim-bootstrap.py - '
              'only the rules this site uses are kept. Add a new Bootstrap class? '
              'Re-run that script or the class will have no styles. */\n')
    out = banner + filter_rules(css, used)
    open(OUT, 'w').write(out)
    print('%d classes in use; %.0f KB -> %.0f KB' % (len(used), len(css) / 1024, len(out) / 1024))


if __name__ == '__main__':
    main()
