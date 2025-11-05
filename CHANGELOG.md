## 0.4.1 - 2025-11-06

### Fixed

- `AccountDisplay` verified color.

## 0.4.0 - 2025-11-05

### Added

- `EthIdenticon` component for ethereum addresses.
- `AccountDisplay` works with ethereum addresses.

## 0.3.3 - 2025-11-01

### Fixed

- `AccountDisplay` not showing the address when not setting `maxAddrLength` parameter

## 0.3.2 - 2025-10-27

### Fixed

- `AccountDisplay` styles not injected when building in prod mode

## 0.3.1 - 2025-10-26

### Fixed

- `AccountDisplay` moves the ellipsis character out of position when using `maxAddrLength`

## 0.3.0 - 2025-10-26

### Added

- `AccountDisplay` component to show Identicon, name and address of an account.

## 0.2.0 - 2025-10-14

### Added

- `useTokenInput` headless `HTMLInput` component for bigint <-> token input.
- `formatValue(value, decimals)` utility to format a token value
- `formatToken(value, token)` utility to format a token amount (`formatValue(value, decimals)` + symbol)
- `getChainTokenProperties(chainSpec)` utility to get the token properties from a chainspec.

## 0.1.0 - 2025-05-02

### Changed

Initial release
