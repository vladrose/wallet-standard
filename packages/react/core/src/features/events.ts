import type { Wallet, WalletWithFeatures } from '@tuna-wallet-standard/base';
import type { StandardEventsFeature } from '@tuna-wallet-standard/features';
import { StandardEvents } from '@tuna-wallet-standard/features';

export function walletHasStandardEventsFeature(wallet: Wallet): wallet is WalletWithFeatures<StandardEventsFeature> {
    return StandardEvents in wallet.features;
}
