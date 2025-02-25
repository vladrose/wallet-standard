import type { WalletWithFeatures } from '@tuna-wallet-standard/base';
import type { StandardConnectFeature } from './connect.js';
import type { StandardDisconnectFeature } from './disconnect.js';
import type { StandardEventsFeature } from './events.js';

/**
 * Type alias for some or all {@link "@tuna-wallet-standard/base".Wallet.features} implemented within the reserved `standard`
 * namespace.
 *
 * @group Features
 */
export type StandardFeatures = StandardConnectFeature | StandardDisconnectFeature | StandardEventsFeature;

/**
 * Type alias for a {@link "@tuna-wallet-standard/base".Wallet} that implements some or all {@link StandardFeatures}.
 *
 * @group Features
 */
export type WalletWithStandardFeatures = WalletWithFeatures<StandardFeatures>;

export * from './connect.js';
export * from './disconnect.js';
export * from './events.js';
