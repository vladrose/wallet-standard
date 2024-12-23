# @tuna-wallet-standard/experimental-features

## 0.2.0

### Minor Changes

-   96e237c: Minor version bump to previously released packages

### Patch Changes

-   96e237c: Wherever a bytearray is required as input, you can now pass read-only instances of `Uint8Array` – namely ones without mutative methods like `fill` and `reverse`. This makes it so that Wallet Standard methods are _less_ strict about these inputs, and can accept a wider variety of them
-   96e237c: Updated to TypeScript 5, latest ESLint plugins, Prettier 3
-   Updated dependencies [96e237c]
-   Updated dependencies [96e237c]
-   Updated dependencies [96e237c]
    -   @tuna-wallet-standard/base@1.1.0

## 0.1.1

### Patch Changes

-   Updated dependencies [1eefb9f]
    -   @tuna-wallet-standard/base@1.0.1

## 0.1.0

### Minor Changes

-   59d90b2: Release v1.0.0 of core packages, and v0.1.0 of other packages

### Patch Changes

-   Updated dependencies [59d90b2]
    -   @tuna-wallet-standard/base@1.0.0
