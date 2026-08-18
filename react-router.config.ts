/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Oxide Computer Company
 */

import type { Config } from '@react-router/dev/config'
import { vercelPreset } from '@vercel/react-router/vite'

export default {
  // Containers use React Router's portable Node server build. Keep Vercel as the default
  // so the existing deployment is unchanged.
  presets: process.env.DEPLOY_TARGET === 'node' ? [] : [vercelPreset()],
  ssr: true,
  // we have few routes, so skip lazy route discovery (and its /__manifest
  // endpoint) and ship the full route manifest in the initial document
  routeDiscovery: { mode: 'initial' },
} satisfies Config
