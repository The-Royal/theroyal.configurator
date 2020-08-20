var KEYBOARDS = KEYBOARDS || [];
sukari = {};
KEYBOARDS.push(sukari);

sukari.id = 'sukari_rev1';

// config
sukari.config = {
    vendorId: '0x4b4b',
    productId: '0x1001',
    deviceVersion: '0x0001',
    manufacturer: 'The-Royal',
    product: 'Sukari',
    description: 'A "True Gasket" Ortho',
    matrixRowPins: ['B4', 'B5', 'B6', 'B7', 'B0'],
    matrixColumnPins: ['B1', 'B2', 'C7', 'C6', 'C5', 'C4', 'D6', 'C2', 'D0', 'D1', 'D5', 'D2'],
    diodeDirection: 'COL2ROW',
    matrixHasGhost: false,
    backlightLevels: 0,
    usbMaxPowerConsumption: 100,
    debouncingDelay: 5,
    tappingTerm: 200,
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
    extrakeyEnabled: false,
    consoleEnabled: false,
    commandEnabled: false,
    sleepLedEnabled: false,
    nkroEnabled: true,
    backlightEnabled: false,
    rgbLightEnabled: false
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
        label: 'Bottom Row',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Big-Grid'
            },
            {
                code: 1,
                name: 'Big-Space'
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
            value: 'ESC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k01',
            value: '1',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k02',
            value: '2',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k03',
            value: '3',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k04',
            value: '4',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k05',
            value: '5',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k06',
            value: '6',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k07',
            value: '7',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k08',
            value: '8',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k09',
            value: '9',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0A',
            value: '0',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k0B',
            value: 'MINUS',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        row2: [
          {
            id: 'k10',
            value: 'TAB',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k11',
            value: 'Q',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k12',
            value: 'W',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k13',
            value: 'E',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k14',
            value: 'R',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k15',
            value: 'T',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k16',
            value: 'Y',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k17',
            value: 'U',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k18',
            value: 'I',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k19',
            value: 'O',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k1A',
            value: 'P',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k1B',
            value: 'BSPC',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        row3: [
          {
            id: 'k20',
            value: 'LCTL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k21',
            value: 'A',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k22',
            value: 'S',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k23',
            value: 'D',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k24',
            value: 'F',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k25',
            value: 'G',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k26',
            value: 'H',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k27',
            value: 'J',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k28',
            value: 'K',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k29',
            value: 'L',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k2A',
            value: 'SCOL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k2B',
            value: 'QUOTE',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        row4: [
          {
            id: 'k30',
            value: 'LSFT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k31',
            value: 'Z',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k32',
            value: 'X',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k33',
            value: 'C',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k34',
            value: 'V',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k35',
            value: 'B',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k36',
            value: 'N',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k37',
            value: 'M',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k38',
            value: 'COMMA',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k39',
            value: 'DOT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k3A',
            value: 'SLSH',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k3B',
            value: 'ENTER',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ],
        row5: [
          {
            id: 'k40',
            value: 'DEL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k41',
            value: 'LGUI',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k42',
            value: 'MENU',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k43',
            value: 'LALT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k44',
            value: 'PGUP',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k45',
            value: 'SPACE',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k46',
            value: 'SPACE',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k47',
            value: 'PGDN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k48',
            value: 'LEFT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k49',
            value: 'DOWN',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k4A',
            value: 'UP',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k4B',
            value: 'RIGHT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          }
        ]
        [
          {
            id: 'k40',
            value: 'DEL',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k100'
          },
          {
            id: 'k41',
            value: 'LALT',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          },
          {
            id: 'k42',
            value: 'SPACE',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k700'
          },
          {
            id: 'k4A',
            value: 'RGUI',
            type: 'normal',
            secondary: null,
            showMenu: false,
            shape: 'k150'
          },
          {
            id: 'k4B',
            value: 'RCTL',
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
        layer.push(ks.row3);
        layer.push(ks.row4);
        layer.push(ks.row5[zones[1].value]);
        keymap.push(layer);
    }

    return keymap;
};
