# rhdh-security-skills

Agent Skills for RHDH security work. Same catalog shape as [redhat-developer/rhdh-skills](https://github.com/redhat-developer/rhdh-skills): source lives under `skills/<group>/<skill-id>/`; group folders are editorial and are stripped at install.

## Install

```bash
npx skills add rhdh-parasol/rhdh-security-skills
```

From a local checkout:

```bash
npx skills add /path/to/rhdh-security-skills
```

That copies each skill into `.agents/skills/<skill-id>/` (or `~/.agents/skills/` for `--global`). Restart the agent client so it discovers them. Do not commit those install directories; they are gitignored.

## Skill catalog

| Group | Skill | Location |
| --- | --- | --- |
| `cve` | `plugins-package-impact` | `skills/cve/plugins-package-impact/` |

Invoke by name (`/plugins-package-impact`), never by a sibling category path.

## Layout

```
.
├── AGENTS.md                # how to work in this catalog
├── README.md
└── skills/                  # catalog (one SKILL.md per skill)
    └── cve/
        └── plugins-package-impact/
```

A skill is a directory that contains `SKILL.md`:

```
skills/<group>/your-skill-name/
├── SKILL.md                 # required; name must match the folder
├── workflows/               # optional; branched procedures
├── references/              # optional; loaded on demand
├── scripts/                 # optional; run, do not inline
└── assets/                  # optional; templates and static files
```

The skill id is the folder that holds `SKILL.md`, not the group. Only that directory is installed.

## Add a skill

Create `skills/<group>/your-skill-name/SKILL.md`. `name` in the frontmatter must match the folder name. Add `workflows/`, `references/`, `scripts/`, or `assets/` only when the skill needs them.

## How discovery works

| Path | Role |
| --- | --- |
| `skills/<group>/<skill-id>/` | Canonical source. Cursor does not load this path by itself. |
| `.agents/skills/` / `.cursor/skills/` | Install targets. Gitignored. |
| `~/.agents/skills/` | Global install. Not part of this repository. |

Cloud Agents and remote sessions only see skills installed into that environment’s project or image. Opening this repo does not install the pack.

## Using a skill

- Agent may apply a skill when the request matches its `description`.
- Invoke explicitly with `/your-skill-name` in Agent chat.
- Optional `disable-model-invocation: true` makes it slash-command only.
