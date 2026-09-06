# Graph Report - ruma-discordjs  (2026-09-06)

## Corpus Check
- 30 files · ~2,707 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 93 nodes · 82 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4d503592`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- eventHandlers.js
- dependencies
- animeMangaEmbed.js
- reactionEmbed.js
- waifu.js
- serverinfo.js
- userinfo.js
- 01registerCommands.js
- AGENTS.md — ruma_bot
- Ruma Discord Bot

## God Nodes (most connected - your core abstractions)
1. `AGENTS.md — ruma_bot` - 7 edges
2. `Ruma Discord Bot` - 6 edges
3. `scripts` - 3 edges
4. `axios` - 2 edges
5. `discord.js` - 2 edges
6. `dotenv` - 2 edges
7. `animeMangaEmbed` - 1 edges
8. `animeMangaEmbed` - 1 edges
9. `{EmbedBuilder}` - 1 edges
10. `axios` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 3 thin omitted)

### Community 1 - "package.json"
Cohesion: 0.18
Nodes (10): author, description, keywords, license, main, name, scripts, start (+2 more)

### Community 2 - "eventHandlers.js"
Cohesion: 0.20
Nodes (7): getAllFiles, path, client, { Client, IntentsBitField }, eventHandlers, fs, path

### Community 3 - "dependencies"
Cohesion: 0.29
Nodes (7): axios, discord.js, dotenv, dependencies, axios, discord.js, dotenv

### Community 4 - "animeMangaEmbed.js"
Cohesion: 0.29
Nodes (4): animeMangaEmbed, animeMangaEmbed, axios, {EmbedBuilder}

### Community 5 - "reactionEmbed.js"
Cohesion: 0.09
Nodes (12): reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed, reactionEmbed (+4 more)

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
- **56 isolated node(s):** `animeMangaEmbed`, `animeMangaEmbed`, `{EmbedBuilder}`, `axios`, `{EmbedBuilder}` (+51 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `animeMangaEmbed`, `animeMangaEmbed`, `{EmbedBuilder}` to the rest of the system?**
  _56 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `reactionEmbed.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._