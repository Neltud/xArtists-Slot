# xArtists-Slot (Primordial Slot)

**Extracted from the main [xArtists](https://github.com/Neltud/xArtists) monorepo on 2026-10-13.**

This repository hosts the **Slot / Primordial Slot** fun spin game (MultiversX mainnet).
It is intentionally **out of scope** of the core xArtists product (Phygital RWA, NFT gallery, LIA agents, TCA Academy, $TRO utility).

## Status

- Smart contract previously live on mainnet (house ~0.5 EGLD, `isPayable=false` for REAL mode).
- Front-end page + components migrated here:
  - `src/pages/SlotPage.tsx`
  - `src/components/slot/PotsStrip.tsx`
  - `src/components/slot/SlotModeSwitch.tsx`
  - `src/components/SlotSmartUnlock.tsx`
- Deploy / upgrade workflows migrated:
  - `.github/workflows/deploy-slot-casino.yml`
  - `.github/workflows/upgrade-slot-payable.yml`

## Dependencies still in main monorepo (to isolate next)

These paths were shared and are still referenced by the Slot page:

| Path (in xArtists) | Role |
|--------------------|------|
| `apps/frontend/src/config/slotEconomy.ts` | Bets, progressive, settle |
| `apps/frontend/src/config/scStatus.ts` | `canSpinSlot`, `SLOT_CASINO_ADDRESS` |
| `apps/frontend/src/hooks/useSlotTx.ts` | On-chain spin TX |
| `apps/frontend/src/lib/slotHouseGuard.ts` | House balance guard |
| `contracts/slot-casino/` | Rust SC |

Copy them into this repo when building the standalone app.

## Install (standalone — planned)

```bash
git clone https://github.com/Neltud/xArtists-Slot.git
cd xArtists-Slot
# after scaffolding Vite + React + MultiversX SDK:
npm install
npm run dev
npm run build
```

## Deploy SC (manual)

Workflows require secrets `SC_DEPLOYER_PEM` and confirmation strings:

- Deploy: `DEPLOY_MAINNET`
- Upgrade payable: `UPGRADE_SLOT_PAYABLE`

## Links

- Main product: https://neltud.github.io/xArtists/
- Main repo: https://github.com/Neltud/xArtists

MIT — same license as xArtists.
