# AGENTS.md

Agent Skills for RHDH security work. Skills follow the Agent Skills open standard.

## Catalog

Skills live under `skills/<group>/<skill-id>/`. Group folders (`cve/`, and any later domain) are editorial and are stripped at install. Compose through `/skill-name`, never through sibling category paths.

When working in this repository, read the skill from `skills/<group>/<skill-id>/SKILL.md`. Do not look for promoted skills under `.agents/skills/` or `.cursor/skills/` — those are install copies and are gitignored.

A skill may not depend on this repository. Only its own directory is installed, so nothing under `skills/` may cite `AGENTS.md`, `README.md`, or any path outside that directory.

## Adding a skill

1. Create `skills/<group>/<skill-id>/SKILL.md`.
2. Set frontmatter `name` to the folder name (lowercase letters, numbers, hyphens; max 64 chars).
3. Write `description` in third person with both what the skill does and when to use it.
4. Keep `SKILL.md` under 500 lines. Put detail in `workflows/`, `references/`, `scripts/`, or `assets/` only when needed.
5. Link supporting files one level from `SKILL.md`. Tell the agent to execute scripts, not paste them.

Do not add a dummy `SKILL.md` under `skills/` — it becomes part of the pack on install.
