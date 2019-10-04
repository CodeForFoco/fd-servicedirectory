# [Name Undecided] PFA Service Directory

## Slack Channel

#p-fd-servicedirectory

## Project Status

In progress

## Project Leaders

Michael Durkin (PFA), David Hayes (CFFC), Eric Skram (CFFC)

## Project Goals

There exist a lot of good services in the Fort Collins area, offered by governments, NGOs, etc. And Poudre Fire Authority fire fighters (in their roles beyond putting out fires) are often on the front-lines of community interaction. But few of the fire fighters actually know a lot about the services on offer. They often wish that they could help people more when leaving their community interactions. For example: they may be called to help a currently-homeless person outside on a cold night, but not know where a warm shelter is. Or they may be called to someone whose house is cold (but housed) in winter, but not be able fix a broken heater. But a service might exist for that use.

So the goal of this project is mostly to offer an "app" to these firefighters that helps them know quickly which services are offered. The idea is that it would serve as a quick "wizard" where they can answer a few questions (order and qualifying question text is approximate here and will change):

1. *Is this person...* needing food assistance?
1. *Is this person...* needing groceries?
1. *Is this person...* a resident?
2. *Is this person...* an adult?
3. *Is this person...* a veteran?
9. *Here are the three listings* -- want to call them?

## Possible Stretch Goals

Our first project will certainly be to empower out fire-men and -women to better connect the community to resources. In doing so, we'll create one of the most up-to-date data sources about currently-offered resources in Fort Collins, and have some good sense of how to help people navigate them. That is super powerful. So offering that data to partner-agencies, to the public, and in a publicly-accessible way (read: on a website) could easily be a phase 2-99 of the project.

## Non-goals (thing we explicitly do not intend to do)

This is not a service (e.g. hot meals) to be offered.

This is not (currently) a public website.

This is not replacing services like 211.

This is not doing outreach in the community beyond the proposed role of helping firefighters in the calls they already service.

# Proposed Process

## Identified Requirements

(numbered for ease of conversation, not by priority)

1. **App should run easily on PFA-issued hardware.** Right now, this means Android phones and iPads.
2. **App should be multilingual.** Maintaining the data in English and Spanish is a need-to-have feature because our community speaks both of those languages. (Though we may be able to skip this for early version, we should always have translatability in mind.)
3. **App should work offline.** While it can be a web-focused or web-tool-using project, it is often the case that cell phone service is bad on a call. So some offline caching of the data so that it works fine in that scenario is crucial. (Again. for early versions this can likely be skipped. But should be kept in mind for V2-99.)
4. **App data must be updatable by a civilian/non-DBA.** This means that using a Google Sheet, Excel file, or CSV as the source-of-truth is heavily recommended in early stages. Eventually a full-fledge backend backed by a relational database probably makes sense, but especially in phase 1 that's overkill. Prove usefulness before we build cool features.
5. **App data maintainence is currently slated to be a PFA responsibility.** That likely requires them assigning someone (perhaps Michael Durkin, perhaps someone else) to call listed agencies and update the data based on what they say. (Long-term, that could shift but for now plan on that.)

## Proposed Phasing

0. [complete] Gather requirements and create sample data set.
1. [current] Gather technical team and buid out prototype with sample data set.

Future steps could include:

1. Test prototype with PFA officers and gather feedback
2. Finish the prototype if it prove effective
3. Creating a web-version of the resource
4. Creating an admin interface for PFA (and partner agencies?) to keep data up-to-date intelligently
4. Sharing our application code with others to use in their local area

# Getting started

Follow these instructions to get the app up and running locally.

## Prerequisites

* [Node](https://nodejs.org/en/download)
* [Yarn](https://yarnpkg.com/en/docs/install)

## Contributing
* Important note: Any merges to master are automatically deployed. You've been warned!

1. Find some issue you're interested in, or a feature that you'd like to tackle.
2. Fork, then clone: `git@github.com:CodeForFoco/fd-servicedirectory.git`
3. Create a branch with a meaningful name for the issue: `git checkout -b fix-something`
4. Install packages by running `yarn` in the project root.
5. Create a [`.env`](https://github.com/motdotla/dotenv) file in the project root and paste in your `GOOGLE_API_KEY`. Speak to a project maintainer and they'll get you one.
5. Start the development server by running `yarn develop` and navigate to `http://localhost:1234`.
6. Make your changes and ensure that:
	* All tests still pass by running `yarn test`
	* All code follows formatting guidelines by running `yarn lint`
7. Commit your code and push to your forked branch.
8. Submit a Pull Request to the CodeForFoco repository with a clear title and description of your changes.
9. Wait for a maintainer to review your PR, make changes if necessary, and get it merged!

## Tech Stack

The PFA Service Directory is a Javascript application built using [React](https://reactjs.org). Under the hood, it also uses the following technologies:

### Tooling
* [Eslint](https://eslint.org) and [Prettier](https://prettier.io) for code formatting 📝
* [Jest](https://jestjs.io) for unit testing ✅
* [Parcel](https://parceljs.org) for module bundling and development 📦

### Frontend Packages
* [React Router](https://github.com/ReactTraining/react-router) for frontend routing 🚦
* [Styled Components](https://github.com/styled-components/styled-components) for styling 💅
