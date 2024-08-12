# 🍹FreshJuice – HubSpot CMS Theme

[![GitHub Release](https://img.shields.io/github/v/release/freshjuice-dev/freshjuice-hubspot-theme)](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/releases)
[![GitHub last commit](https://img.shields.io/github/last-commit/freshjuice-dev/freshjuice-hubspot-theme)](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/commits/main)
[![GitHub License](https://img.shields.io/github/license/freshjuice-dev/freshjuice-hubspot-theme)](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/blob/main/LICENSE)

[![GitHub watchers](https://img.shields.io/github/watchers/freshjuice-dev/freshjuice-hubspot-theme)](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/watchers)
[![GitHub forks](https://img.shields.io/github/forks/freshjuice-dev/freshjuice-hubspot-theme)](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/network/members)
[![GitHub Repo stars](https://img.shields.io/github/stars/freshjuice-dev/freshjuice-hubspot-theme)](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/stargazers)


A modern, clean, and minimalistic theme for HubSpot CMS themes. This theme is designed to help you get started with your HubSpot CMS theme development quickly. It includes a modern frameworks and tools like Tailwind CSS, Alpine.js.

[Demo website](https://freshjuice.dev/hubspot-theme/)

## Purpose

This theme is designed to help developers a head start on their HubSpot CMS theme development. While most of HubSpot themes are chunky and bloated, this theme is designed to be minimalistic and load only required components. Solution for pixel perfect design and fast loading website.


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.0.0 or newer)
- [HubSpot CMS CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)

### Installation

1. Clone the repo and CD into it
1. Run `npm install` (Uses Node v20.0.0 or newer)
1. Run `npm run prepare` to install [husky](https://typicode.github.io/husky/) hooks.
1. For local development, run `npm run start`. This will run tailwindcss, esbuild, and hs-cli to watch, and rebuild, and upload to HubSpot as you dev.
1. For production build, run `npm run build`. This will run tailwindcss, esbuild.
1. For uploading to HubSpot, run `npm run upload:hubspot`. This will run hs-cli to upload theme to HubSpot.

## Tech Stack

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Alpine.js](https://alpinejs.dev/): Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web.
- [HubSpot CMS CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)

## Project Structure

- **scripts**: contains helper scripts for building and uploading to HubSpot.
- **source**: contains source files for the theme.
- **theme**: contains the theme files that will be uploaded to HubSpot.
  - **theme/css**: contains the compiled CSS files.
  - **theme/images**: contains the images, and icons for the theme.
  - **theme/js**: contains the compiled JS and vendor JS files.
  - **theme/macros**: contains HubL macros for the theme.
  - **theme/modules**: contains HubL modules for the theme.
  - **theme/sections**: contains HubL sections for the theme.
  - **theme/templates**: contains HubL templates for the theme.
    - **theme/templates/layouts**: contains the layout templates for the theme.
    - **theme/templates/partials**: contains the partial templates for the theme.
    - **theme/templates/system**: contains the system templates for the theme.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/freshjuice-dev/freshjuice-hubspot-theme/releases).

## License

Distributed under the GPL-3.0 License. See [LICENSE](./LICENSE) for more information.
