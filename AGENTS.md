# AGENTS.md — ruma_bot

Guidelines for AI agents (GitHub Copilot) working on this Discord bot repository. Follow these rules for every code change, suggestion, or refactor.

---

## 1. Role & Agent Persona

- Act as a **senior Node.js & Discord.js developer**.
- Follow a **modular, scalable, clean-code** mindset.
- Keep changes minimal, preserve existing code style, and prefer editing over rewriting.

## 2. Technology Stack & Environment

| Concern            | Standard                                               |
| ------------------ | ------------------------------------------------------ |
| Runtime            | **Node.js v18+ (LTS)**                                 |
| Discord library    | **discord.js v14+**                                    |
| HTTP requests      | **Native `fetch`** (Node 18+) or **`axios`**           |
| Environment config | **`dotenv`** (`.env` file, commit `.env.example` only) |

**Hard rules:**

- **NEVER** suggest or use `request` / `request-promise` — both are deprecated.
- Never hardcode tokens, secrets, or API keys. Read them via `process.env`.
- Never commit `.env`; only `.env.example` belongs in version control.

## 3. Architecture & Project Structure

Keep responsibilities separated. **Never dump all logic into `index.js`.**

```text
ruma_bot/
├── index.js            # Entry point: client init, load commands/events
├── commands/           # One file per slash command, grouped by category
│   ├── anime/
│   ├── info/
│   ├── misc/
│   └── reaction/
├── events/             # One file per Discord event (ready, interactionCreate, ...)
├── handlers/           # Loaders/orchestrators (e.g. eventHandlers.js)
├── embeds/             # Reusable embed builders
├── utils/              # Helpers: file loaders, command comparison, API calls
└── .env.example
```

- **Modular commands:** each slash command is its own file under `/commands`, exporting `data` (SlashCommandBuilder) and `execute`.
- **Event handling:** each Discord event (`ready`, `interactionCreate`, ...) gets its own file under `/events`, named after its purpose.
- **Utilities/services:** external API calls, data processing, and helpers live in `/utils` (or `/services` for larger external API clients).
- **Embeds:** reusable embed construction goes in `/embeds`, not inline in commands, when shared across commands.

## 4. Coding Standards

- Use **modern ES6+ syntax**: `async/await`, arrow functions, destructuring, template literals, `const`/`let`.
- Wrap **every interaction handler** in explicit `try...catch`:

```js
try {
  await interaction.deferReply();
  // ... command logic
  await interaction.editReply({ embeds: [embed] });
} catch (error) {
  console.error(error);
  const payload = { content: "Something went wrong.", ephemeral: true };
  interaction.deferred || interaction.replied
    ? await interaction.editReply(payload)
    : await interaction.reply({ ...payload, ephemeral: true });
}
```

- **3-second rule:** Discord interactions expire after 3 seconds. Use `deferReply()` for any command doing external API calls or heavy work, then `editReply()`.
- **Feedback:** every command must give clear, polished feedback — use **Embeds** (title, color, fields, thumbnails) and **Components** (buttons/select menus) where appropriate. Always reply; never leave an interaction unanswered.
- Handle fetch failures gracefully: check HTTP status, catch network errors, show a friendly error embed.

## 5. Copilot Workflow Instructions

1. **Plan first:** before writing or changing code, briefly state the architectural plan (which files, which responsibilities).
2. **No deprecated packages:** never suggest deprecated dependencies; prefer native/first-party solutions when available.
3. **Separation of concerns:** command files orchestrate; logic lives in utils/services; embeds live in embeds.
4. **Suggest, don't sprawl:** avoid adding dependencies, abstractions, or files for one-time operations.

---

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
