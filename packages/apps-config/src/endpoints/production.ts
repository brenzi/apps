// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chains3dpassSVG, chainsAlephSVG, chainsAnalogSVG, chainsBittensorPNG, chainsChainflipPNG, chainsCommuneaiPNG, chainsCreditcoinPNG, chainsDebioSVG, chainsFragnovaPNG, chainsJurPNG, chainsLiberlandPNG, chainsLogionPNG, chainsMyriadPNG, chainsSpannerPNG, chainsTanglePNG, chainsTorusPNG, chainsVaraPNG, chainsVtbPNG } from '../ui/logos/chains/index.js';
import { nodesAresOdysseySVG, nodesAutonomysPNG, nodesCentrifugePNG, nodesCereSVG, nodesChainxSVG, nodesCompetitorsClubPNG, nodesCrownSterlingPNG, nodesCrustSVG, nodesDatahighwayPNG, nodesDockPNG, nodesEdgewareWhitePNG, nodesEfinitySVG, nodesElysiumPNG, nodesHanyonycashPNG, nodesHumanodePNG, nodesInnovatorPNG, nodesJoystreamSVG, nodesKulupuSVG, nodesKusariSVG, nodesMathSVG, nodesMinixPNG, nodesNftmartPNG, nodesNodleSVG, nodesPolkadexSVG, nodesPolymeshSVG, nodesRiochainSVG, nodesRobonomicsSVG, nodesSherpaxPNG, nodesSoraSubstrateSVG, nodesStafiPNG, nodesSubgameSVG, nodesSubsocialSVG, nodesSwapdexSVG, nodesTanssiSVG, nodesTernoaSVG, nodesThebifrostPNG, nodesTscsPNG, nodesUniartsPNG, nodesUnitnetworkPNG } from '../ui/logos/nodes/index.js';

export * from './productionRelayKusama.js';
export * from './productionRelayPolkadot.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: Omit<EndpointOption, 'teleport'>[] = [];
