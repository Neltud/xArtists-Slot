# xArtists-Slot (Primordial Slot)

**Extracted from the main [xArtists](https://github.com/Neltud/xArtists) monorepo on 2026-10-13.**

This repository hosts the **Slot / Primordial Slot** fun spin game (MultiversX mainnet).
It is intentionally **out of scope** of the core xArtists product (Phygital RWA, NFT gallery, LIA agents, TCA Academy, $TRO utility).

## Status

- Smart contract previously live on mainnet (house ~0.5 EGLD, `isPayable=false` for REAL mode).
- Front-end page, mode switch (FUN / REAL), pots strip and related components lived under `apps/frontend` of the main repo.
- All Slot surface was removed from xArtists on 2026-10-13 so the main dApp stays focused.

## Next steps (this repo)

1. Copy the Slot SC (Rust) + ABI from the original monorepo.
2. Copy `SlotPage.tsx`, `components/slot/*`, related config (`scStatus`, addresses).
3. Stand-alone Vite + React + MultiversX SDK front-end.
4. Deploy to its own GitHub Pages (or other host).

## Links

- Main product: https://neltud.github.io/xArtists/
- Main repo: https://github.com/Neltud/xArtists

MIT — same license as xArtists.
