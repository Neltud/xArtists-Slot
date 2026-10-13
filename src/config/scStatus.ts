/**
 * Slot-only SC readiness (standalone).
 */
import { SLOT_CASINO_ADDRESS, SLOT_CASINO_LIVE } from './contracts'

export { SLOT_CASINO_ADDRESS, SLOT_CASINO_LIVE } from './contracts'

export function isUsableScAddress(addr: string | undefined | null): boolean {
  return !!addr && addr.startsWith('erd1') && addr.length >= 60
}

export function canSpinSlot(): boolean {
  return SLOT_CASINO_LIVE && isUsableScAddress(SLOT_CASINO_ADDRESS)
}

export function slotReceiverOrThrow(): string {
  if (!canSpinSlot()) throw new Error('Slot not ready')
  return SLOT_CASINO_ADDRESS
}

export function slotStatusLabel(): string {
  if (canSpinSlot()) return 'Ouvert · spin on-chain'
  if (isUsableScAddress(SLOT_CASINO_ADDRESS)) return 'Bientôt disponible · simulation active'
  return 'Simulation'
}
