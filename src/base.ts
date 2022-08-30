import initModule from './avPluginProjectMWASM';
// import initEyetunes from './presets-eyetune';
import { checkIfEmpty, sleep } from './lib/utils';

// ---------------------------------------------
// ToDo
// - Create preRun function to import settings
//

type Config = {
  canvas: HTMLElement | null;
  settings: Settings;
  wasmFilePath: String;
  presetPack: Array<string>;
  presetPackDir: String;
};

type Settings = {
  meshX?: number;
  meshY?: number;
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
  presetPath?: string;
  titleFontPath?: string;
  menuFontPath?: string;
  useRandomPreset?: boolean;
};

export abstract class Base {
  public config: Config;
  public plugin: any;
  public settings: any;
  public localSettings: any;

  constructor(config: Config) {
    this.config = config;
    this.plugin = null;
    this.settings = {};
    this.localSettings = {
      meshX: 96,
      meshY: 54,
      fps: 30,
      textureSize: 512,
      windowWidth: 640,
      windowHeight: 360,
      presetDuration: 15,
      softCutDuration: 15,
      hardCutDuration: 60,
      hardCutEnabled: false,
      hardCutSensitivity: 0.0,
      beatSensitivity: 0.5,
      aspectCorrection: true,
      easterEgg: 0.5,
      shuffleEnabled: true,
      softCutRatingsEnabled: false,
      presetPath: '/presets',
      titleFontPath: '/title.font',
      menuFontPath: 'menu.font',
      useRandomPreset: true,
    };
  }

  // -----------------------------------------------
  public async initialize() {
    await this.initSettings(this.config.settings);

    this.plugin = await initModule(this.config).then((instance: any) => {
      return instance;
    });

    return this.plugin;
  }

  public async restart() {
    await this.plugin.projectmRestart();
  }

  // -----------------------------------------------
  public async initSettings(values: Settings) {
    this.settings = this.localSettings;

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

  // ProjectM | Manage Settings
  public async resetToDefaultSettings() {
    return (this.settings = this.localSettings);
  }
}
