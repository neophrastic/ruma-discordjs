# Graph Report - ruma-discordjs  (2026-09-06)

## Corpus Check
- 30 files · ~1,833 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 82 nodes · 71 edges · 23 communities (9 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5723fb5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- 01registerCommands.js
- package.json
- eventHandlers.js
- dependencies
- animeMangaEmbed.js
- reactionEmbed.js
- waifu.js
- serverinfo.js
- userinfo.js
- angry.js
- confused.js
- dance.js
- happy.js
- no.js
- smug.js
- surprised.js
- thinking.js
- yes.js
- getLocalCommands.js
- AGENTS.md
- README.md

## God Nodes (most connected - your core abstractions)
1. `scripts` - 3 edges
2. `axios` - 2 edges
3. `discord.js` - 2 edges
4. `dotenv` - 2 edges
5. `animeMangaEmbed` - 1 edges
6. `animeMangaEmbed` - 1 edges
7. `{EmbedBuilder}` - 1 edges
8. `{get}` - 1 edges
9. `{EmbedBuilder}` - 1 edges
10. `{EmbedBuilder }` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (23 total, 14 thin omitted)

### Community 0 - "01registerCommands.js"
Cohesion: 0.33
Nodes (3): areCommandsDifferent, getApplicationCommands, getLocalCommands

### Community 1 - "package.json"
Cohesion: 0.18
Nodes (10): author, description, keywords, license, main, name, scripts, start (+2 more)

### Community 2 - "eventHandlers.js"
Cohesion: 0.29
Nodes (5): getAllFiles, path, client, { Client, IntentsBitField }, eventHandlers

### Community 3 - "dependencies"
Cohesion: 0.29
Nodes (7): axios, discord.js, dotenv, dependencies, axios, discord.js, dotenv

### Community 4 - "animeMangaEmbed.js"
Cohesion: 0.29
Nodes (4): animeMangaEmbed, animeMangaEmbed, {EmbedBuilder}, {get}

### Community 5 - "reactionEmbed.js"
Cohesion: 0.40
Nodes (3): reactionEmbed, {EmbedBuilder}, {get}

### Community 20 - "getLocalCommands.js"
Cohesion: 0.25
Nodes (5): getLocalCommands, fs, path, getAllFiles, path

## Knowledge Gaps
- **47 isolated node(s):** `animeMangaEmbed`, `animeMangaEmbed`, `{EmbedBuilder}`, `{get}`, `{EmbedBuilder}` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `animeMangaEmbed`, `animeMangaEmbed`, `{EmbedBuilder}` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._