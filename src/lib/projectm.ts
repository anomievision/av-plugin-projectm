import { Base } from '../base';

export class ProjectM extends Base {
  public async getMeshX() {
    return await this.plugin.projectmGetMeshX();
  }

  public async setMeshX(value: number) {
    this.localSettings.meshX = value;
    return await this.plugin.projectmSetMeshX(value);
  }

  public async getMeshY() {
    return await this.plugin.projectmGetMeshY();
  }

  public async setMeshY(value: number) {
    this.localSettings.meshY = value;
    return await this.plugin.projectmSetMeshY(value);
  }

  public async getFps() {
    return await this.plugin.projectmGetFps();
  }

  public async setFps(value: number) {
    this.localSettings.fps = value;
    await this.plugin.projectmSetFps(value);
    return await this.restart();
  }

  public async getTextureSize() {
    return await this.plugin.projectmGetTextureSize();
  }

  public async setTextureSize(value: number) {
    this.localSettings.textureSize = value;
    return await this.plugin.projectmSetTextureSize(value);
  }

  public async getPresetDuration() {
    return await this.plugin.projectmGetPresetDuration();
  }

  public async setPresetDuration(value: number) {
    this.localSettings.presetDuration = value;
    return await this.plugin.projectmSetPresetDuration(value);
  }

  public async getSoftCutDuration() {
    return await this.plugin.projectmGetSoftCutDuration();
  }

  public async setSoftCutDuration(value: number) {
    this.localSettings.softCutDuration = value;
    return await this.plugin.projectmSetSoftCutDuration(value);
  }

  public async getHardCutDuration() {
    return await this.plugin.projectmGetHardCutDuration();
  }

  public async setHardCutDuration(value: number) {
    this.localSettings.hardCutDuration = value;
    return await this.plugin.projectmSetHardCutDuration(value);
  }

  public async getHardCutEnabled() {
    return await this.plugin.projectmGetHardCutEnabled();
  }

  public async setHardCutEnabled(value: boolean) {
    this.localSettings.hardCutEnabled = value;
    return await this.plugin.projectmSetHardCutEnabled(value);
  }

  public async getHardCutSensitivity() {
    return await this.plugin.projectmGetHardCutSensitivity();
  }

  public async setHardCutSensitivity(value: number) {
    this.localSettings.hardCutSensitivity = value;
    return await this.plugin.projectmSetHardCutSensitivity(value);
  }

  public async getBeatSensitivity() {
    return await this.plugin.projectmGetBeatSensitivity();
  }

  public async setBeatSensitivity(value: number) {
    this.localSettings.beatSensitivity = value;
    await this.plugin.projectmSetBeatSensitivity(value);
    return await this.restart();
  }

  public async getAspectCorrection() {
    return await this.plugin.projectmGetAspectCorrection();
  }

  public async setAspectCorrection(value: boolean) {
    this.localSettings.aspectCorrection = value;
    return await this.plugin.projectmSetAspectCorrection(value);
  }

  public async getEasterEgg() {
    return await this.plugin.projectmGetEasterEgg();
  }

  public async setEasterEgg(value: number) {
    this.localSettings.easterEgg = value;
    return await this.plugin.projectmSetEasterEgg(value);
  }

  public async getShuffleEnabled() {
    return await this.plugin.projectmGetShuffleEnabled();
  }

  public async setShuffleEnabled(value: boolean) {
    this.localSettings.shuffleEnabled = value;
    return await this.plugin.projectmSetShuffleEnabled(value);
  }

  public async getSoftCutRatingsEnabled() {
    return await this.plugin.projectmGetSoftCutRatingsEnabled();
  }

  public async setSoftCutRatingsEnabled(value: boolean) {
    this.localSettings.softCutRatingsEnabled = value;
    await this.plugin.projectmSetSoftCutRatingsEnabled(value);
    return await this.restart();
  }

  public async getPresetPath() {
    return this.settings.presetPath;
  }

  public async setPresetPath(value: string) {
    this.localSettings.presetPath = value;
    return await this.restart();
  }

  public async getTitleFontPath() {
    return this.settings.titleFontPath;
  }

  public async setTitleFontPath(value: string) {
    this.localSettings.titleFontPath = value;
    return await this.restart();
  }

  public async getMenuFontPath() {
    return this.settings.menuFontPath;
  }

  public async setMenuFontPath(value: string) {
    this.localSettings.menuFontPath = value;
    return await this.restart();
  }

  // ProjectM | Actions
  public async sendToastMessage(value: string) {
    const message = value;
    const byteCount = this.plugin.lengthBytesUTF8(message) + 1;

    const messagePointer = this.plugin._malloc(byteCount);
    this.plugin.stringToUTF8(message, messagePointer, byteCount);

    await this.plugin.projectmSendToastMessage(messagePointer);

    this.plugin._free(messagePointer);
  }

  // ProjectM | Preset Controls
  public async getPlaylistSize() {
    return await this.plugin.projectmGetPlaylistSize();
  }

  public async getPresetIndex(value: string) {
    const presetName = value;
    const byteCount = this.plugin.lengthBytesUTF8(presetName) + 1;

    const presetNamePointer = this.plugin._malloc(byteCount);
    this.plugin.stringToUTF8(presetName, presetNamePointer, byteCount);

    const result = await this.plugin.projectmGetPresetIndex(presetNamePointer);

    this.plugin._free(presetNamePointer);

    return result;
  }

  public async isPresetActive(value: number) {
    return await this.plugin.projectmIsPresetActive(value);
  }

  public async getPresetFilename(value: number) {
    const result = await this.plugin.projectmGetPresetFilename(value);
    const resultStr = this.plugin.UTF8ToString(result);
    return resultStr;
  }

  public async getPresetName(value: number) {
    const result = await this.plugin.projectmGetPresetName(value);
    const resultStr = this.plugin.UTF8ToString(result);
    this.plugin._free(result);
    return resultStr;
  }

  // public async addPresetFile(
  //   filepath: string,
  //   name: string,
  //   ratingList: number,
  //   ratingListLength: number
  // ) {
  //   const result = await this.plugin.projectmAddPresetFile(value);
  //   const resultStr = this.plugin.UTF8ToString(result);
  //   return resultStr;
  // }

  // public async insertPresetFile(
  //   filepath: string,
  //   name: string,
  //   ratingList: number,
  //   ratingListLength: number
  // ) {
  //   const result = await this.plugin.projectmInsertPresetFile(value);
  //   const resultStr = this.plugin.UTF8ToString(result);
  //   return resultStr;
  // }

  public async isPresetPositionValid() {
    return this.plugin.projectmIsPresetPositionValid();
  }

  public async clearPresetPlaylist() {
    return this.plugin.projectmClearPresetPlaylist();
  }

  public async selectPreviousPreset(value: boolean = false) {
    return this.plugin.projectmSelectPreviousPreset(value);
  }

  public async selectNextPreset(value: boolean = false) {
    return this.plugin.projectmSelectNextPreset(value);
  }

  public async selectRandomPreset(value: boolean = false) {
    return this.plugin.projectmSelectRandomPreset(value);
  }

  public async isPresetLocked() {
    return this.plugin.projectmIsPresetLocked();
  }

  public async lockPreset(value: boolean = false) {
    return this.plugin.projectmLockPreset(value);
  }

  public async getPresetRating(index: number, type: string) {
    let ratingType;
    if (type == 'soft') {
      ratingType = 0;
    } else if (type == 'hard') {
      ratingType = 1;
    }

    return this.plugin.projectmGetPresetRating(index, ratingType);
  }

  public async setPresetRating(index: number, rating: number, type: string) {
    let ratingType;
    if (type == 'soft') {
      ratingType = 0;
    } else if (type == 'hard') {
      ratingType = 1;
    }

    return this.plugin.projectmSetPresetRating(index, rating, ratingType);
  }

  public async selectPresetPosition(value: number) {
    return this.plugin.projectmSelectPresetPosition(value);
  }

  public async selectPreset(index: number, value: boolean = false) {
    return this.plugin.projectmSelectPreset(index, value);
  }

  public async removePreset(value: number) {
    return this.plugin.projectmRemovePreset(value);
  }

  public async populatePresetMenu() {
    return this.plugin.projectmPopulatePresetMenu();
  }

  public async getErrorLoadingCurrentPreset() {
    return this.plugin.projectmGetErrorLoadingCurrentPreset();
  }
}
