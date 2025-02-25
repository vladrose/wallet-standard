import type { IdentifierString } from '@tuna-wallet-standard/base';
import type { SignTransactionInput } from './signTransaction.js';

/** TODO: docs */
export type SignAndSendTransactionFeature = {
    /** Name of the feature. */
    'experimental:signAndSendTransaction': {
        /** Version of the feature implemented by the {@link "@tuna-wallet-standard/base".Wallet}. */
        version: SignAndSendTransactionVersion;

        /**
         * Sign transactions using the account's secret key and send them to the chain.
         *
         * @param inputs Inputs for signing and sending transactions.
         *
         * @return Outputs of signing and sending transactions.
         */
        signAndSendTransaction: SignAndSendTransactionMethod;
    };
};

/** TODO: docs */
export type SignAndSendTransactionVersion = '1.0.0';

/** TODO: docs */
export type SignAndSendTransactionMethod = (
    ...inputs: SignAndSendTransactionInput[]
) => Promise<SignAndSendTransactionOutput[]>;

/** Input for signing and sending transactions. */
export interface SignAndSendTransactionInput extends SignTransactionInput {
    /** Chain to use. */
    chain: IdentifierString;
}

/** Output of signing and sending transactions. */
export interface SignAndSendTransactionOutput {
    /** Transaction signature, as raw bytes. */
    signature: Uint8Array;
}
