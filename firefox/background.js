/**
 * Set up uninstall page
 */
function setUninstallPage() {
    getSystemDetails((details) => {
        browser.runtime.setUninstallURL(`${webBase}/uninstall/?browser=${details.browser}&os=${details.os}&version=${details.version}`);
    });
}

/**
 * Send system details to callback
 * @param {Function} callback
 */
function getSystemDetails(callback) {
    browser.runtime.getPlatformInfo((platform) => {
        callback({
            browser: getBrowserName().toLowerCase(),
            version: browser.runtime.getManifest().version,
            os: platform.os
        });
    });
}

/**
 * Get browser name
 * @returns Browser name
 */
function getBrowserName() {
    return 'FIREFOX';
}

const webBase = 'https://addons.wesleybranton.com/addon/skip-ad-key-binder';
setUninstallPage();
