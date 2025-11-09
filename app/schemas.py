from pydantic import BaseModel

class PowerBudgetRequest(BaseModel):
    p_tx_dbm: float      # Potência enviada (dBm)
    p_rx_dbm: float      # Potência recebida (dBm)
    distance_km: float   # Comprimento do enlace (km)
