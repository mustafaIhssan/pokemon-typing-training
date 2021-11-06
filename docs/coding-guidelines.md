# Coding Guidelines

This document explains some of the coding guidelines/styles used in the project that can't be necessarily enforced using tools in order to keep consistency between the different developpers.

## Folder Structure

The following snippet explains how the Gutenberg repository is structured omitting irrelevant or obvious items with further explanations:

    │
    ├── src
    │   Source code of the client application.
    │
    ├── src/hooks/{hook-name}/index.js
    │   Reusable react hooks without any data/state dependency.
    │
    ├── src/components/{component-name}/index.js
    │   Commponents that can be used accross the pages.
    │
    └── src/pages/{page-name}/index.js
        Entry point to the router's pages.


## Code Style

- For consistency, we avoid default module exports.
- Use kebab-case for filenames.
