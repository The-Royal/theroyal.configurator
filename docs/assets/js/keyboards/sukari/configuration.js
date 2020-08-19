var KEYBOARDS = KEYBOARDS || [];
sukari = {};
KEYBOARDS.push(sukari);

sukari.id = 'sukari_rev1';

// config
sukari.config = {
    vendorId: '0xFEED',
    productId: '0x62AC',
    deviceVersion: '0x0001',
    manufacturer: 'The-Royal',
    product: 'Sukari',
    description: 'A "True Gasket" Ortho',
    matrixRowPins: ['D0', 'D1', 'D3', 'F5', 'B2'],
    matrixColumnPins: ['F0', 'F7', 'F6', 'F4', 'F1', 'E6', 'D6', 'D2', 'B4', 'D7', 'B6', 'D5'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 0,
    backlightPin: 'B5',
    usbMaxPowerConsumption: 100,
    debouncingDelay: 5,
    tappingTerm: 175,
    lockingSupportEnabled: true,
    lockingResyncEnabled: true,
    commandKeyCombination: 'keyboard_report->mods == (MOD_BIT(KC_LSHIFT) | MOD_BIT(KC_RSHIFT))',
    debugEnabled: false,
    printEnabled: false,
    actionLayerEnabled: true,
    actionTappingEnabled: true,
    actionOneShotEnabled: true,
    actionMacroEnabled: true,
    actionFunctionEnabled: true,
    permissiveHold: true
};

// rules
sukari.rules = {
    mcu: 'atmega32u2',
    processorFrequency: 16000000,
    architecture: 'AVR8',
    inputClockFrequency: 16000000,
    bootloaderSize: 4096,
    bootmagicEnabled: true,
    mousekeyEnabled: true,
    extrakeyEnabled: true,
    consoleEnabled: false,
    commandEnabled: true,
    sleepLedEnabled: false,
    nkroEnabled: true,
    backlightEnabled: true,
    rgbLightEnabled: true
};

// keymap
sukari.configKeymap = {};
sukari.configKeymap.keys = [
    "K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B",
    "K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B",
    "K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B",
    "K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B",
    "K40", "K41",                          "K46",                         "K4A", "K4B"
];

sukari.configKeymap.positions = [
    ["K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", "K0A", "K0B"],
    ["K10", "K11", "K12", "K13", "K14", "K15", "K16", "K17", "K18", "K19", "K1A", "K1B"],
    ["K20", "K21", "K22", "K23", "K24", "K25", "K26", "K27", "K28", "K29", "K2A", "K2B"],
    ["K30", "K31", "K32", "K33", "K34", "K35", "K36", "K37", "K38", "K39", "K3A", "K3B"],
    ["K40", "K41", "KC_NO", "KC_NO", "KC_NO", "KC_NO", "K46", "KC_NO", "KC_NO", "KC_NO", "K4A", "K4B"]
];

// zones
sukari.zones = [
    {
        label: 'Right Shift',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'Alternate'
            }
        ]
    },
    {
        label: 'Bottom Row',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Full Space'
            },
            {
                code: 1,
                name: 'Split Space'
            }
        ]
    }
]

// ui keymap
sukari.keySections = [
    { // DEFAULT LAYER ==========================================
        row1: [
          {
            id: 'k00',
            value: 'TAB',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k01',
            value: 'Q',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: 'W',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k03',
            value: 'E',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k04',
            value: 'R',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k05',
            value: 'T',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k06',
            value: 'Y',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k07',
            value: 'U',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k08',
            value: 'I',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k09',
            value: 'O',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0A',
            value: 'P',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0B',
            value: 'BSPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ]
    }
];

sukari.keymap = function() {
    var keymap = [];
    var layer = [];
    var ks;
    var zones = sukari.zones;
    var i;

    for (i in sukari.keySections) {
        ks = sukari.keySections[i];
        layer = new Array();
        layer.push(ks.row1);
        layer.push(ks.row2);
        layer.push(ks.row3.concat(ks.rightShift[zones[0].value]));
        layer.push(ks.bottomRow[zones[1].value])
        keymap.push(layer);
    }

    return keymap;
};
