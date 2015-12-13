cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/phonegap-nfc/www/phonegap-nfc.js",
        "id": "phonegap-nfc.NFC",
        "pluginId": "phonegap-nfc",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.plugin.power-management/www/PowerManagement.js",
        "id": "org.apache.cordova.plugin.power-management.PowerManagement",
        "pluginId": "org.apache.cordova.plugin.power-management",
        "clobbers": [
            "window.powerManagement"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "phonegap-nfc": "0.6.6",
    "org.apache.cordova.plugin.power-management": "0.1.0",
    "cordova-plugin-device": "1.1.0"
}
// BOTTOM OF METADATA
});