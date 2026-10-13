# Provably Fair — Slot Casino

## Flow

```
1. Player chooses client_seed (≤64 bytes, e.g. random hex)
2. spinEgld(client_seed) / spinEsdt(client_seed)  → bet escrowed
3. Wait resolve_delay_blocks (default 2)
4. resolveSpin(spin_id)  → anyone can call (anti block-shopping)
5. Event spinResolved emits roll + entropy_hash + blocks
```

If not resolved before `timeout_blocks` (default 100): `refundSpin` returns the full bet.

## Entropy formula

```
buf = client_seed
    || lock_block_be8
    || resolve_block_be8
    || spin_count_be8
    || block_random_seed (48 bytes at resolve)
    || player_address_bytes

entropy_hash = keccak256(buf)
roll         = u64_be(entropy_hash[0..8]) % 10000
```

## Outcome table (roll 0–9999)

| Outcome   | Range    | Approx % |
|-----------|----------|----------|
| Grand     | 0–7      | 0.08 %   |
| Line3     | 8–207    | 2.00 %   |
| Diagonal  | 208–407  | 2.00 %   |
| Pair      | 408–1007 | 6.00 %   |
| Lose      | rest     | ~89.9 %  |

## Limits

- Not a threshold VRF / drand oracle — relies on chain `block_random_seed` + commit-delay
- External audit recommended before significant TVL
