import React, { useState } from "react";
import axios from "axios";

export default function PowerBudgetForm() {
  const [pTx, setPTx] = useState(0);
  const [pRx, setPRx] = useState(-25);
  const [distance, setDistance] = useState(80);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const resp = await axios.post("http://localhost:8000/api/power-budget", {
        p_tx_dbm: Number(pTx),
        p_rx_dbm: Number(pRx),
        distance_km: Number(distance),
      });
      setResult(resp.data.result);
    } catch (err) {
      setError("Erro de comunicação com API. Verifique se o backend está rodando.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-sm opacity-90">Potência Enviada Tx (dBm)</label>
          <input type="number" value={pTx} onChange={(e)=>setPTx(e.target.value)} className="mt-1 w-full rounded-md p-2 bg-blue-900/40" />
        </div>

        <div>
          <label className="block text-sm opacity-90">Potência Recebida Rx (dBm)</label>
          <input type="number" value={pRx} onChange={(e)=>setPRx(e.target.value)} className="mt-1 w-full rounded-md p-2 bg-blue-900/40"/>
        </div>

        <div>
          <label className="block text-sm opacity-90">Comprimento da Fibra (km)</label>
          <input type="number" value={distance} onChange={(e)=>setDistance(e.target.value)} className="mt-1 w-full rounded-md p-2 bg-blue-900/40"/>
        </div>

        <div className="flex gap-2">
          <button type="submit" disabled={loading} className="px-4 py-2 bg-green-600 rounded-md">
            {loading ? "Calculando..." : "Calcular"}
          </button>
          <button type="button" onClick={() => { setPTx(0); setPRx(-25); setDistance(80); setResult(null); setError(null); }} className="px-4 py-2 bg-red-600 rounded-md">
            Limpar
          </button>
        </div>
      </form>

      <div className="mt-6 bg-blue-800/30 p-4 rounded-md">
        <h3 className="font-semibold">Resultado</h3>
        {error && <div className="text-red-400 mt-2">{error}</div>}
        {result ? (
          <div className="mt-3 space-y-2 text-sm">
            <div>Perda Total: <strong>{result.loss_total_db} dB</strong></div>
            <div>Perda por Km: <strong>{result.loss_per_km_db ?? "—"} dB/km</strong></div>
            <div>Qualidade da Fibra: <strong>{result.quality}</strong></div>
          </div>
        ) : (
          <div className="mt-3 text-sm opacity-80">Insira os dados e clique em Calcular.</div>
        )}
      </div>
    </div>
  );
}
