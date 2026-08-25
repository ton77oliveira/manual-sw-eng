#!/usr/bin/env bash
set -euo pipefail
target="${1:-.}"
src="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
mkdir -p "$target/.opencode/commands" "$target/.opencode/skills/technical-mentor" "$target/.opencode/agents"
for file in "$src"/commands/*.md; do dest="$target/.opencode/commands/$(basename "$file")"; [[ -e "$dest" && "${FORCE:-0}" != 1 ]] || cp "$file" "$dest"; done
cp -n "$src/skills/technical-mentor/SKILL.md" "$target/.opencode/skills/technical-mentor/SKILL.md" 2>/dev/null || true
cp -n "$src/agents/technical-mentor.md" "$target/.opencode/agents/technical-mentor.md" 2>/dev/null || true
printf 'Integração instalada em %s/.opencode (arquivos existentes preservados).\n' "$target"
