// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { POLKADOT_GENESIS } from '../api/constants.js';
import { chainsPolkadotCircleSVG } from '../ui/logos/chains/index.js';
import { nodesIntegriteeSVG, nodesAssetHubSVG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodParasPolkadot: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://integritee.network',
    info: 'integritee',
    paraId: 2039,
    providers: {
      brenzi: 'wss://integritee-polkadot.chainbricks.synology.me:4110',
      Integritee: 'wss://polkadot.api.integritee.network'
    },
    text: 'Integritee Network',
    ui: {
      color: '#658ea9',
      logo: nodesIntegriteeSVG
    }
  }
];

export const prodParasPolkadotCommon: EndpointOption[] = [
  {
    info: 'PolkadotAssetHub',
    paraId: 1000,
    providers: {
      bezzera: 'wss://bezzera.integritee.network:4130',
    },
    relayName: 'polkadot',
    teleport: [-1, 1002, 1001, 1005, 1004],
    text: 'AssetHub',
    ui: {
      color: '#86e62a',
      logo: nodesAssetHubSVG
    }
  }
];

export const prodRelayPolkadot: EndpointOption = {
  dnslink: 'polkadot',
  genesisHash: POLKADOT_GENESIS,
  info: 'polkadot',
  isRelay: true,
  linked: [
    ...prodParasPolkadotCommon,
    ...prodParasPolkadot
  ],
  providers: {
    brenzi: 'wss://polkadot.chainbricks.synology.me:4100',
    'light client': 'light://substrate-connect/polkadot'
  },
  teleport: getTeleports(prodParasPolkadotCommon),
  text: 'Polkadot Relay',
  ui: {
    color: '#e6007a',
    identityIcon: 'polkadot',
    logo: chainsPolkadotCircleSVG
  }
};
