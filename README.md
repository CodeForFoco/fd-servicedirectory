# [Name Undecided] PFA Service Directory #fd-helpwizard

## Project Status

Ready-to-prototype

## Project Leaders

Michael Durkin (PFA), David Hayes (CFFC), you?

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

## Code Details

What languages and libraries does this project use? **That's for the technical lead to decide.** Will it be you?
