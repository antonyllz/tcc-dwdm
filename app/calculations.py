import math

def calc_power_budget(p_tx_dbm: float, p_rx_dbm: float, distance_km: float):
    """
    Calcula perda total (dB) e perda por km (dB/km).
    Retorna dicionário com valores arredondados.
    """
    # Perda total simples
    loss_total_db = p_tx_dbm - p_rx_dbm

    # Evita divisão por zero
    if distance_km <= 0:
        loss_per_km = None
    else:
        loss_per_km = loss_total_db / distance_km

    # Classificação simples de qualidade por ITU (exemplo)
    if loss_per_km is None:
        quality = "INVÁLIDO"
    elif loss_per_km <= 0.3:
        quality = "EXCELENTE"
    elif loss_per_km <= 0.5:
        quality = "ACEITÁVEL"
    else:
        quality = "VERIFICAR INSTALAÇÃO"

    return {
        "loss_total_db": round(loss_total_db, 3),
        "loss_per_km_db": None if loss_per_km is None else round(loss_per_km, 6),
        "quality": quality
    }
