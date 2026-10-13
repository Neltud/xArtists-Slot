# xArtists-Slot (Primordial Slot)

**Fully isolated from [xArtists](https://github.com/Neltud/xArtists) on 2026-10-13.**

Standalone MultiversX slot / casino (paper Fun + on-chain REAL when payable).

## Layout

```
contracts/slot-casino/     Rust SC (multiversx-sc 0.66)
  src/lib.rs
  meta/  wasm/
  PROVABLY_FAIR.md
src/
  pages/SlotPage.tsx
  components/slot/         PotsStrip, SlotModeSwitch
  components/SlotSmartUnlock.tsx
  config/slotEconomy.ts    bets, progressive, settle
  config/scStatus.ts       canSpinSlot, address (Slot-only)
  config/contracts.ts      SLOT_CASINO_ADDRESS
  hooks/useSlotTx.ts
  hooks/useSendTransaction.ts   stub until xPortal wired
  lib/slotHouseGuard.ts
.github/workflows/
  deploy-slot-casino.yml
  upgrade-slot-payable.yml
```

## Build Smart Contract

```bash
cd contracts/slot-casino
rustup target add wasm32v1-none
cargo install multiversx-sc-meta --locked --force
sc-meta all build
# → output/slot-casino.wasm
```

## Front-end (next step)

Scaffold Vite + React, then point imports at `src/`:

```bash
npm create vite@latest . -- --template react-ts   # if empty root
npm install
npm run build
```

Wire MultiversX wallet (xPortal / sdk-dapp) by replacing `src/hooks/useSendTransaction.ts`.

## Deploy / upgrade SC

Workflows need secret `SC_DEPLOYER_PEM`:

| Workflow | Confirm string |
|----------|----------------|
| `deploy-slot-casino.yml` | `DEPLOY_MAINNET` |
| `upgrade-slot-payable.yml` | `UPGRADE_SLOT_PAYABLE` |

Live address: `erd1qqqqqqqqqqqqqpgquf3cuv2zsfsahy7ypvter3qcep4ptthsvhxqs4g34f`  
(currently `isPayable=false` — REAL spins blocked until payable upgrade)

## Links

- Main product: https://neltud.github.io/xArtists/
- Main repo: https://github.com/Neltud/xArtists

MIT
