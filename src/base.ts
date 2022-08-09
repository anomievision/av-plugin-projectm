import initModule from './avPluginProjectMLibrary';
import { checkIfEmpty, sleep } from './lib/utils';

// ---------------------------------------------
// ToDo
// - Create preRun function to import settings
//

type Config = {
  canvas: HTMLElement | null;
  settings: Settings;
};

type Settings = {
  meshY?: number;
  meshX?: number;
  fps?: number;
  textureSize?: number;
  windowWidth?: number;
  windowHeight?: number;
  presetDuration?: number;
  softCutDuration?: number;
  hardCutDuration?: number;
  hardCutEnabled?: boolean;
  hardCutSensitivity?: number;
  beatSensitivity?: number;
  aspectCorrection?: boolean;
  easterEgg?: number;
  shuffleEnabled?: boolean;
  softCutRatingsEnabled?: boolean;
  presetUrl?: string;
  ready?: boolean;
  update?: boolean;
};

const defaultSettings = {
  meshY: 48,
  meshX: 48,
  fps: 60,
  textureSize: 1024,
  windowWidth: 1280,
  windowHeight: 720,
  presetDuration: 30,
  softCutDuration: 3,
  hardCutDuration: 60,
  hardCutEnabled: false,
  hardCutSensitivity: '2.0',
  beatSensitivity: '0.0',
  aspectCorrection: true,
  easterEgg: '0.0',
  shuffleEnabled: true,
  softCutRatingsEnabled: false,
  presetUrl: '/presets',
  ready: true,
  update: false,
};

export abstract class Base {
  public config: Config;
  public plugin: any;
  public settings: any;

  constructor(config: Config) {
    this.config = config;
    this.plugin = null;
    this.settings = {};
  }

  public async initialize() {
    await this.initSettings(this.config.settings);

    this.plugin = await initModule(this.config).then((instance: any) => {
      return instance;
    });

    return this.plugin;
  }

  public async initSettings(values: Settings) {
    this.settings = defaultSettings;
    console.log(defaultSettings);
    if (!checkIfEmpty(values)) {
      Object.entries(values).forEach(([vKey, vValue]) => {
        Object.keys(this.settings).forEach(sKey => {
          if (sKey == vKey) {
            this.settings[sKey] = vValue;
          }
        });
      });
    }

    return (this.config.settings = this.settings);
  }

  public async patchSettings(key: string, value: number | boolean) {
    return Object.keys(this.settings).forEach(async (sKey, sIndex) => {
      if (sKey == key) {
        this.settings[sKey] = value;
        console.log(this.settings[sKey]);
        await this.plugin.patchSettings(sIndex, this.settings[sKey]);
      }
    });
  }

  public async resetToDefaultSettings() {
    return (this.settings = defaultSettings);
  }
}
