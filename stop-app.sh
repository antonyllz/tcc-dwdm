#!/bin/bash
echo "Parando aplicação..."

pkill -f "uvicorn app.main:app"
pkill -f "vite"

echo "Aplicação parada com sucesso."
