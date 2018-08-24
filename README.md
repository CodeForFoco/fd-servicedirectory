# [Name Undecided] PFA Service Directory #fd-helpwizard

## Project Status



## Project Leaders

Michael Durkin (PFA), David Hayes (CFFC), you?

## Project Goals

The idea here is that there exists a lot of good services in the Fort Collins area, offered by governments, NGOs, etc. And Poudre Fire Authority fire fighters (in their roles beyond putting out fires) are often on the front-lines of community interaction. But few of the fire fighters actually know a lot about the services on offer, but wish that they could help people more when leaving their community interactions. For example: they may be called to help a currently-homeless person outside on a cold night, but not know where a warm shelter is. Or they may be called to someone whose house is cold and winter, but not be able fix a broken heater. But a service might exist for that use. 

So the goal of this project is mostly to offer an "app" to these firefighters that helps them know quickly which services are offered. The idea is that it would serve as a quick "wizard" where they can answer a few questions (order and qualifying question order is approximate here and will change): 

1. Is this person... needing food assistance?
1. Is this person... a resident? 
2. Is this person... an adult?
3. Is this person... a veteran? 
9. *Here are the three listings* -- want to call them?

## Possible Stretch Goals

Our first project will certainly be to empower out fire-men and -women to better connect the community to resources. In doing so, we'll create one of the most up-to-date data sources about currently-offered resources in Fort Collins, and have some good sense of how to help people navigate them. That is super powerful. So offering that data to partner-agencies, to the public, and in a publicly-accessible way could easily be a phase 2-99 of the project.

## Non-goals (thing we explicitly do not intend to do)

This is not a service (hot meals) to be offered. 

This is not (currently) a public website. 

This is not replacing services like 211. 

This is not doing outreach in the community beyond the proposed role of helping firefighters in the calls they already service.

# Proposed Process

## Identified Requirements

* App should run easily on PFA-issued hardware. Right now, this means Windows Tablets and iPhones. [@Michael Durkin, is that accurate. I guessed.]
* App should be multilingual. Maintain the data in English in Spanish is a need-to-have feature because our community speaks both of those languages.
* App should work offline. While it can be a web-focused or web-tool-using project, it is often the case that cell phone service is bad on a call. So some offline caching of the data so that it works fine in that scenario is crucial.
* App data must be updatable by a civilian. This means that using a Google Sheet, Excel file, or CSV as the source-of-truth is heavily recommended in early stages. Eventually a full-fledge backend backed by a relational database makes sense, but especially in phase 1 that's overkill. Prove usefulness before we build cool features.
* App data maintainence is currently slated to be a PFA responsibility. That likely requires them assigning someone (perhaps Michael Durkin, perhaps someone else) to call listed agencies and update the data based on what they say. (Long-term, that could shift) but for now plan on that.

# Code Matters

What languages and libraries does this use?
