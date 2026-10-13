/**
 * Minimal send stub for standalone Slot.
 * Replace with full MultiversX sdk-dapp / xPortal integration when wiring the wallet.
 */
import { useCallback } from 'react'

export type SendResult = { sessionId: string | null; error: string | null }

export function useSendTransaction() {
  const send = useCallback(
    async (
      _txs: object[],
      _opts?: { processingMessage?: string; successMessage?: string; errorMessage?: string },
    ): Promise<SendResult> => {
      return {
        sessionId: null,
        error: 'Wallet not wired in standalone Slot — use Mode Fun or integrate xPortal.',
      }
    },
    [],
  )
  return { send }
}
