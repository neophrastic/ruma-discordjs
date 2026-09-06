# Graph Report - ruma-discordjs  (2026-09-06)

## Corpus Check
- 80 files · ~5,605 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 255 nodes · 245 edges · 63 communities (9 shown, 54 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cd71cdec`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- angry.js
- baka.js
- animeMangaEmbed.js
- reactionEmbed.js
- bite.js
- serverinfo.js
- userinfo.js
- blowkiss.js
- bonk.js
- carry.js
- blush.js
- bored.js
- clap.js
- confused.js
- facepalm.js
- lappillow.js
- lurk.js
- 01registerCommands.js
- AGENTS.md — ruma_bot
- Ruma Discord Bot
- happy.js
- highfive.js
- hug.js
- kiss.js
- bleh.js
- nod.js
- cry.js
- nom.js
- shrug.js
- feed.js
- sleep.js
- smile.js
- nya.js
- peck.js
- punch.js
- tickle.js
- handshake.js
- yeet.js
- fetchReaction.js
- shake.js
- shoot.js
- sip.js
- spin.js
- tableflip.js
- teehee.js
- kabedon.js
- wag.js
- wink.js
- yawn.js
- kick.js
- pat.js
- pout.js
- run.js
- salute.js
- shocked.js
- smug.js
- stare.js
- thumbsup.js
- handhold.js
- laugh.js

## God Nodes (most connected - your core abstractions)
1. `AGENTS.md — ruma_bot` - 7 edges
2. `Ruma Discord Bot` - 6 edges
3. `scripts` - 3 edges
4. `axios` - 2 edges
5. `discord.js` - 2 edges
6. `dotenv` - 2 edges
7. `{ ApplicationCommandOptionType }` - 1 edges
8. `animeMangaEmbed` - 1 edges
9. `{ ApplicationCommandOptionType }` - 1 edges
10. `animeMangaEmbed` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (63 total, 54 thin omitted)

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (17): axios, discord.js, dotenv, author, dependencies, axios, discord.js, dotenv (+9 more)

### Community 4 - "animeMangaEmbed.js"
Cohesion: 0.22
Nodes (6): animeMangaEmbed, { ApplicationCommandOptionType }, animeMangaEmbed, { ApplicationCommandOptionType }, axios, {EmbedBuilder}

### Community 5 - "reactionEmbed.js"
Cohesion: 0.08
Nodes (16): { ApplicationCommandOptionType }, reactionEmbed, { ApplicationCommandOptionType }, reactionEmbed, { ApplicationCommandOptionType }, reactionEmbed, { ApplicationCommandOptionType }, reactionEmbed (+8 more)

### Community 20 - "01registerCommands.js"
Cohesion: 0.10
Nodes (13): areCommandsDifferent, getApplicationCommands, getLocalCommands, getLocalCommands, getAllFiles, path, client, { Client, IntentsBitField } (+5 more)

### Community 21 - "AGENTS.md — ruma_bot"
Cohesion: 0.25
Nodes (7): 1. Role & Agent Persona, 2. Technology Stack & Environment, 3. Architecture & Project Structure, 4. Coding Standards, 5. Copilot Workflow Instructions, AGENTS.md — ruma_bot, graphify

### Community 22 - "Ruma Discord Bot"
Cohesion: 0.29
Nodes (6): Features, Installation and Setup, Prerequisites, Project Structure, Ruma Discord Bot, Usage

### Community 41 - "fetchReaction.js"
Cohesion: 0.33
Nodes (4): { EmbedBuilder }, fetchReaction, axios, CATEGORIES

## Knowledge Gaps
- **168 isolated node(s):** `{ ApplicationCommandOptionType }`, `animeMangaEmbed`, `{ ApplicationCommandOptionType }`, `animeMangaEmbed`, `{ EmbedBuilder }` (+163 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `{ ApplicationCommandOptionType }`, `animeMangaEmbed`, `{ ApplicationCommandOptionType }` to the rest of the system?**
  _168 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `reactionEmbed.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `01registerCommands.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._