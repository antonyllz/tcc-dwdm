from fastapi import FastAPI
from app.schemas import PowerBudgetRequest
from app.calculations import calc_power_budget
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="DWDM Optimizer API")

# Ajuste permissões conforme necessidade
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # em produção, restrinja ao domínio do frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok", "service": "DWDM Optimizer API"}

@app.post("/api/power-budget")
def power_budget(req: PowerBudgetRequest):
    result = calc_power_budget(req.p_tx_dbm, req.p_rx_dbm, req.distance_km)
    return {"input": req.dict(), "result": result}
