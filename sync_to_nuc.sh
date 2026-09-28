#!/usr/bin/env bash
# ==============================================================================
# Sincronización EXCLUSIVA del Cerebro de Antigravity hacia el NUC
# (Memoria guardada, conversaciones, resúmenes, skills, reglas y settings de CLI)
# ==============================================================================

set -e

NUC_HOST="felipe@nuc.local"
BUNDLE_FILE="antigravity-brain-only.tar.gz"

echo "📡 Conectando con tu NUC ($NUC_HOST)..."
echo "📦 1. Transfiriendo paquete exclusivo del cerebro ($BUNDLE_FILE)..."
scp "$BUNDLE_FILE" "$NUC_HOST:~/"

echo "🚀 2. Descomprimiendo e instalando cerebro en el NUC..."
ssh -t "$NUC_HOST" "tar -xzf $BUNDLE_FILE && bash antigravity-brain-only/install.sh && rm -rf $BUNDLE_FILE antigravity-brain-only"

echo ""
echo "✨ ¡Listo! Todo el cerebro de tu Antigravity ha quedado replicado en el NUC."
