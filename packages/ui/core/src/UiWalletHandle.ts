import type { IdentifierArray } from '@tuna-wallet-standard/base';

export type UiWalletHandle = {
    readonly '~uiWalletHandle': unique symbol;
    readonly features: IdentifierArray;
};
