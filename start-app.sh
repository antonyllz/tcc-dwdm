#!/bin/bash

nohup uvicorn app.main:app --host 0.0.0.0 --port 5000 > backend.log 2>&1 &

cd frontend || exit
[ ! -d "node_modules" ] && npm install
nohup npm run dev > frontend.log 2>&1 &

echo "Aplicação rodando em:"
echo "Frontend: http://localhost:5173"
echo "Backend:  http://localhost:5000"
