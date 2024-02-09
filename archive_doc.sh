#!/bin/zsh
export LANG=C

# 引数から対象のフォルダを取得
target_folder="$1"

if [ -z "$target_folder" ]; then
  echo "Usage: $0 <target_folder>"
  exit 1
fi

# 変換前の文字列1
source_string1="https:\/\/kuroco\.app\/"

# 変換後の文字列1
destination_string1="https:\/\/hisashihasebe\.github\.io\/document_archive_public\/202401\/"

# 変換前の文字列2
source_string2="\"\/ja\/assets\/"

# 変換後の文字列2
destination_string2="\"\/document_archive_public\/202401\/ja\/assets\/"

# 変換前の文字列3
source_string3="\"\/assets\/"

# 変換後の文字列3
destination_string3="\"\/document_archive_public\/202401\/assets\/"

# 指定されたフォルダ内の全てのファイルに対して処理を行う
find "$target_folder" -type f -exec sed -i '' -e "s|$source_string1|$destination_string1|g; s|$source_string2|$destination_string2|g; s|$source_string3|$destination_string3|g" {} +

