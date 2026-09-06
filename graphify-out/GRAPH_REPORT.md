# Graph Report - ruma-discordjs  (2026-09-06)

## Corpus Check
- 80 files · ~5,097 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 194 nodes · 183 edges · 52 communities (9 shown, 43 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `42afe9f0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- eventHandlers.js
- baka.js
- animeMangaEmbed.js
- reactionEmbed.js
- waifu.js
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
- laugh.js
- nod.js
- poke.js
- nom.js
- shrug.js
- nope.js
- sleep.js
- smile.js
- nya.js
- peck.js
- punch.js
- tickle.js
- wave.js
- yeet.js
- fetchReaction.js
- shake.js
- shoot.js
- sip.js
- spin.js
- tableflip.js
- teehee.js
- think.js
- wag.js
- wink.js
- yawn.js

## God Nodes (most connected - your core abstractions)
1. `AGENTS.md — ruma_bot` - 7 edges
2. `Ruma Discord Bot` - 6 edges
3. `scripts` - 3 edges
4. `axios` - 2 edges
5. `discord.js` - 2 edges
6. `dotenv` - 2 edges
7. `animeMangaEmbed` - 1 edges
8. `animeMangaEmbed` - 1 edges
9. `{ EmbedBuilder }` - 1 edges
10. `axios` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (52 total, 43 thin omitted)

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (17): axios, discord.js, dotenv, author, dependencies, axios, discord.js, dotenv (+9 more)

### Community 2 - "eventHandlers.js"
Cohesion: 0.20
Nodes (7): getAllFiles, path, client, { Client, IntentsBitField }, eventHandlers, fs, path

### Community 4 - "animeMangaEmbed.js"
Cohesion: 0.29
Nodes (4): animeMangaEmbed, animeMangaEmbed, axios, {EmbedBuilder}

### Community 5 - "reactionEmbed.js"
Cohesion: 0.05
Nodes (22): reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed (+14 more)

### Community 20 - "01registerCommands.js"
Cohesion: 0.18
Nodes (6): areCommandsDifferent, getApplicationCommands, getLocalCommands, getLocalCommands, getAllFiles, path

### Community 21 - "AGENTS.md — ruma_bot"
Cohesion: 0.25
Nodes (7): 1. Role & Agent Persona, 2. Technology Stack & Environment, 3. Architecture & Project Structure, 4. Coding Standards, 5. Copilot Workflow Instructions, AGENTS.md — ruma_bot, graphify

### Community 22 - "Ruma Discord Bot"
Cohesion: 0.29
Nodes (6): Features, Installation and Setup, Prerequisites, Project Structure, Ruma Discord Bot, Usage

## Knowledge Gaps
- **107 isolated node(s):** `animeMangaEmbed`, `animeMangaEmbed`, `{ EmbedBuilder }`, `axios`, `{EmbedBuilder}` (+102 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **43 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `animeMangaEmbed`, `animeMangaEmbed`, `{ EmbedBuilder }` to the rest of the system?**
  _107 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `reactionEmbed.js` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._