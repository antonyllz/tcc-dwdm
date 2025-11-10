import React from "react";
import PowerBudgetForm from "./components/PowerBudgetForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-6">
      <header className="max-w-6xl mx-auto py-6">
        <h1 className="text-3xl font-semibold">
          Sistema de Otimização DWDM
        </h1>
        <p className="text-sm opacity-80 mt-1">
          Orçamento de Potência — Módulo
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="bg-blue-700/60 rounded-2xl p-6 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Formulário */}
          <PowerBudgetForm />
          
          {/* Painel de resultados */}
          <div className="bg-blue-800/30 rounded-xl p-4">
            <h2 className="font-semibold mb-3">Resultados</h2>
            <div id="results-panel" />

            <div className="mt-6 text-xs opacity-80">
              Objetivo: calcular a perda por quilômetro do enlace óptico.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

