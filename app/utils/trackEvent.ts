/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Oxide Computer Company
 */

export const serverTrackEvent = (event: string, url: string, referrer: string) => {
  trackEvent(event, url, referrer)
}

export const clientTrackEvent = (event: string) => {
  trackEvent(event, window.location.href, document.referrer, window.innerWidth)
}

export const trackEvent = (
  event: string,
  url: string,
  referrer: string,
  screenWidth?: number,
) => {
  // No tracking implemented so far
  return
}
