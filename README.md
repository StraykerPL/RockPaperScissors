# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Getting Started](#getting-started)
  - [Process Description](#process-description)
    - [Environments](#environments)
    - [Deployment](#deployment)
    - [Commits and Branching](#commits-and-branching)
    - [File Structure](#file-structure)
    - [Backlog](#backlog)
- [Author](#author)
- [Licensing](#licensing)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_ `Not Implemented`
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_ `Not Implemented`

### Screenshot (Mockup)

![](./docs/design/desktop-preview.jpg)

### Links

Test Environment - [GitHub Pages](https://straykerpl.github.io/RockPaperScissors/)

## My process

### Built with

- HTML5,
- Sass (SCSS notation + BEM),
- TypeScript,
- Angular Material library,
- Husky hooks + Prettier,
- Angular Deploy Pipeline - GitHub Actions + GitHub Pages,

### Continued development

- Backend + SignalR for real multiplayer,
- Add main menu,
- Scoreboard,
- Custom player's nicknames,

### Getting Started

1. Clone repo on your device, enter repo's folder via CLI,
2. Enter `rock-paper-scissors-frontend` folder,
3. Run `npm install` command,
4. After successful install, run `npm run dev` if you want to start dev build and local server for it, or `npm run prod-build` if you want to deploy app.

### Process Description

#### Environments

In project, there are two programming environments - `development` and `production`. The first one has disabled some of compiler's features, like automatic optimisations and licenses extraction. The secend one has all compiler's features enabled. For test environment deployments `production` is used.

Test environment is hosted on GitHub Pages.

#### Deployment

To deploy changes on test environment, PR must be created to merge `develop` into `main`. After successful push, changes will be visible on `environment` branch. GitHub Pages should refresh instantly, but sometimes it can take 5-10 minutes to proceed request.

#### Commits and Branching

- For commits in this repo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is used,
- For branches in this repo [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) is used,

There is one extra branch called `environment` - this is GitHub Pages source and it's not used for development, hence working on this branch is prohibited.

#### File Structure

Project in repo was created using `create-angular-app` template. In `docs` folder are files provided by Frontend Mentor to create the app's visuals. All code files are located in `src` folder, other files are documents or config files. Under `src` there are: `app`, `assets`, `environments`, `shared` folders and website's files, default to Angular. In `app` folder, there's files for main component and all other components to build the website, under `components` folder. `assets` is used to store non-code data for app, like pictures, icons etc. `environments` stores config fles for app to run in correct configuration. `shared` folder holds module, that is used across the howl app to deliver code, data etc. that are used globally.

#### Backlog

Product Backlog is stored in GitHub Issues tab, managed by me with GitHub Projects. In Kanban board on GitHub Projects, there are 5 columns: `Backlog`, `In Progress`, `Ready`, `In Test`, `Done` in described order.

The flow of tasks is as follow:
- `Backlog` stores all tasks to be done in project,
- Task is moved to `In Progress` when work over it just started,
- Task is moved to `Ready` after successful merge of PR to `develop` branch,
- Task is moved to `In Test` when `develop` is merged to `main` via PR,
- Task is moved to `Done` when testing did not find any bugs,

This config of workflow is designed to fit into small time of development and to fit in GitHub Free subscription.

## Author

- Website - [Strayker Software](https://straykersoftware.pl)
- Frontend Mentor - [FrontendMentor/StraykerPL](https://www.frontendmentor.io/profile/StraykerPL)

## Licensing

This project is licensed under MIT license, but I don't own files from Frontend Mentor. Please refer to [Frontend Mentor](https://www.frontendmentor.io) for licensing terms for this files.