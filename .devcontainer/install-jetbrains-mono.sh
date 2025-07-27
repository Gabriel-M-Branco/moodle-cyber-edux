#!/bin/bash
set -e

echo "🔤 Instalando JetBrains Mono..."

FONT_DIR="/usr/local/share/fonts/jetbrains-mono"
mkdir -p "$FONT_DIR"
cd "$FONT_DIR"

for font in "JetBrainsMono-Regular.ttf" "JetBrainsMono-Bold.ttf" "JetBrainsMono-Italic.ttf" "JetBrainsMono-BoldItalic.ttf"; do
  curl -sSLO "https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/ttf/$font"
done

fc-cache -f -v

echo "✅ JetBrains Mono instalada!"
