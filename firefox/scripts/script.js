/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Create action handlers for the track selection media keys
 */
function connectListener() {
    // Set handlers
    navigator.mediaSession.setActionHandler("nexttrack", null, false);
    navigator.mediaSession.setActionHandler("nexttrack", nextTrack, false);
    navigator.mediaSession.setActionHandler("previoustrack", previousTrack, false);

    // Trigger handler setting again (prevents YouTube from overwriting handlers)
    setTimeout(connectListener, 500);
}

/**
 * Handle next track button
 */
function nextTrack() {
    let skip = document.getElementsByClassName('ytp-ad-skip-button')[0];
    if (!skip) {
        skip = document.getElementsByClassName('ytp-ad-skip-button-modern')[0];
    }

    const next = document.getElementsByClassName('ytp-next-button')[0];

    if (skip) {
        if (skip.offsetParent != null) {
            skip.click();
        }
    } else if (next) {
        next.click();
    }
}

/**
 * Handle previous track button
 */
function previousTrack() {
    const previous = document.getElementsByClassName('ytp-prev-button')[0];

    if (previous) {
        if (previous.offsetParent != null) {
            previous.click();
        }
    }
}

connectListener();