#!/bin/zsh
# Usage:
#   ./rename_images.sh            -> preview only (no changes)
#   ./rename_images.sh --apply    -> actually rename

setopt null_glob numeric_glob_sort

APPLY=0
[[ "$1" == "--apply" ]] && APPLY=1

for dir in ./*(/N); do
  files=( "$dir"/*(.Non) )          # regular files only, hidden files (.DS_Store) skipped
  (( ${#files} == 0 )) && continue

  echo "== ${dir:t} (${#files} files)"

  # Phase 1: move to temp names (avoids collisions like 2.jpg -> 1.jpg)
  i=1
  tmp_list=()
  final_list=()
  for f in $files; do
    ext="${f:e}"
    suffix=""; [[ -n "$ext" ]] && suffix=".$ext"
    tmp="$dir/.tmp_rename_${i}${suffix}"
    final="$dir/${i}${suffix}"
    echo "   ${f:t}  ->  ${final:t}"
    tmp_list+=( "$tmp" )
    final_list+=( "$final" )
    if (( APPLY )); then mv -n -- "$f" "$tmp" || exit 1; fi
    (( i++ ))
  done

  # Phase 2: temp names -> final names
  if (( APPLY )); then
    for (( j=1; j<=${#tmp_list}; j++ )); do
      mv -n -- "${tmp_list[j]}" "${final_list[j]}" || exit 1
    done
  fi
done

(( APPLY )) && echo "Done." || echo "Preview only. Run with --apply to rename."
