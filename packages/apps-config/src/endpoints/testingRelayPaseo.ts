// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chainsAmplitudeSVG, chainsCoretimeKusamaSVG, chainsFrequencyPaseoSVG, chainsHydrationPaseoSVG, chainsKreivoSVG, chainsLaosSigmaPNG, chainsMyxcavPNG, chainsNeurowebTestnetPNG, chainsPaseoPNG, chainsPeoplePolkadotSVG, chainsPopNetworkSVG, chainsQfNetworkPNG, chainsWatrPNG, chainsWeTEESVG } from '@polkadot/apps-config/ui/logos/chains';
import { nodesAjunaPNG, nodesAssetHubSVG, nodesAventusSVG, nodesBajunPNG, nodesBifrostSVG, nodesBridgeHubSVG, nodesDarwiniaKoiSVG, nodesFintraSVG, nodesHeimaPaseoPNG, nodesHyperbridgePNG, nodesIdealNetworkSVG, nodesIdncSVG, nodesIntegriteeSVG, nodesKiltIconSVG, nodesMandalaPNG, nodesMusePNG, nodesMyriadPaseoSVG, nodesNodleSVG, nodesRegionxPNG, nodesRexSVG, nodesXodePNG, nodesZeitgeistPNG } from '@polkadot/apps-config/ui/logos/nodes';

import { PASEO_GENESIS } from '../api/constants.js';
// import { testnetParachainSVG } from '../ui/logos/nodes/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasPaseo: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://integritee.network',
    info: 'integritee',
    paraId: 2039,
    providers: {
      Integritee: 'wss://paseo.api.integritee.network' // https://github.com/polkadot-js/apps/issues/11817
    },
    text: 'Integritee Network (Paseo)',
    ui: {
      color: '#658ea9',
      logo: nodesIntegriteeSVG
    }
  }
];

export const testParasPaseoCommon: EndpointOption[] = [];

export const testRelayPaseo: EndpointOption = {
  dnslink: 'paseo',
  genesisHash: PASEO_GENESIS,
  info: 'paseo',
  isPeopleForIdentity: true,
  isRelay: true,
  linked: [
    ...testParasPaseoCommon,
    ...testParasPaseo
  ],
  providers: {
    //Amforc: 'wss://paseo.rpc.amforc.com',
    //Dwellir: 'wss://paseo-rpc.n.dwellir.com',
    //IBP1: 'wss://rpc.ibp.network/paseo',
    //IBP2: 'wss://paseo.dotters.network',
    //StakeWorld: 'wss://pas-rpc.stakeworld.io'
    // Zondax: 'wss://api2.zondax.ch/pas/node/rpc' // https://github.com/polkadot-js/apps/issues/11199
    // 'light client': 'light://substrate-connect/paseo'
  },
  teleport: getTeleports(testParasPaseoCommon),
  text: 'Paseo',
  ui: {
    color: '#38393F',
    identityIcon: 'polkadot',
    logo: chainsPaseoPNG
  }
};
