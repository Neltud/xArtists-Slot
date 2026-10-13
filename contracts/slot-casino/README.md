# Slot Casino (MultiversX) — Provably Fair

Smart contract public pour le slot 3×3 xArtists-Slot.

See **[PROVABLY_FAIR.md](./PROVABLY_FAIR.md)** for RNG verification.

## Build

```bash
cd contracts/slot-casino
rustup target add wasm32v1-none
cargo install multiversx-sc-meta --locked --force
sc-meta all build
# output: output/slot-casino.wasm
```

## Flow joueur

1. `spinEgld(client_seed)` / `spinEsdt(client_seed)` — mise en escrow
2. Attendre `resolve_delay_blocks` (défaut **2**)
3. `resolveSpin(spin_id)` — settlement + payout
4. Ou `refundSpin(spin_id)` après timeout

## Économie

| Paramètre | Défaut | Rôle |
|-----------|--------|------|
| `progressive_contrib_bps` | 2500 | 25 % mise → pot |
| `house_rake_bps` | 1500 | 15 % rake gains table |
| `min_bet` | 0.001 EGLD raw | Minimum |
| `resolve_delay_blocks` | 2 | Anti same-block |
| `timeout_blocks` | 100 | Refund si non résolu |

## Live address (mainnet)

`erd1qqqqqqqqqqqqqpgquf3cuv2zsfsahy7ypvter3qcep4ptthsvhxqs4g34f`

**Note:** currently `isPayable=false` — upgrade with `--metadata-payable` required for REAL spins.
