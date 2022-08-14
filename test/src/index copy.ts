import avPluginProjectM from 'av-plugin-projectm';

const canvas = {
  canvas: document.getElementById('canvas'),
  settings: {},
};

let avPlugin = new avPluginProjectM(canvas);

async function start() {
  return avPlugin.initialize();
}

function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function main() {
  await start();
  console.log(avPlugin);

  let result;
  // // MeshX
  // result = await avPlugin.projectmGetMeshX();
  // console.log('Test:MeshX: ' + result);

  // await avPlugin.projectmSetMeshX(46);

  // result = await avPlugin.projectmGetMeshX();
  // console.log('Test2:MeshX: ' + result);

  // // MeshY
  // result = await avPlugin.projectmGetMeshY();
  // console.log('Test:MeshY: ' + result);

  // await avPlugin.projectmSetMeshY(56);

  // result = await avPlugin.projectmGetMeshY();
  // console.log('Test2:MeshY: ' + result);

  // // FPS
  // result = await avPlugin.projectmGetFps();
  // console.log('Test:Fps: ' + result);

  // await avPlugin.projectmSetFps(60);

  // result = await avPlugin.projectmGetFps();
  // console.log('Test2:Fps: ' + result);

  // // Texture Size
  // result = await avPlugin.projectmGetTextureSize();
  // console.log('Test:TextureSize: ' + result);

  // await avPlugin.projectmSetTextureSize(60);

  // result = await avPlugin.projectmGetTextureSize();
  // console.log('Test2:TextureSize: ' + result);

  // PresetDuration
  // result = await avPlugin.projectmGetPresetDuration();
  // console.log('Test:PresetDuration: ' + result);

  // await avPlugin.projectmSetPresetDuration(39);

  // result = await avPlugin.projectmGetPresetDuration();
  // console.log('Test2:PresetDuration: ' + result);

  // // SoftCutDuration
  // result = await avPlugin.projectmGetSoftCutDuration();
  // console.log('Test:SoftCutDuration: ' + result);

  // await avPlugin.projectmSetSoftCutDuration(1);

  // result = await avPlugin.projectmGetSoftCutDuration();
  // console.log('Test2:SoftCutDuration: ' + result);

  // // HardCutDuration
  // result = await avPlugin.projectmGetHardCutDuration();
  // console.log('Test:HardCutDuration: ' + result);

  // await avPlugin.projectmSetHardCutDuration(5);

  // result = await avPlugin.projectmGetHardCutDuration();
  // console.log('Test2:HardCutDuration: ' + result);

  // // HardCutEnabled
  // result = await avPlugin.projectmGetHardCutEnabled();
  // console.log('Test:HardCutEnabled: ' + result);

  // await avPlugin.projectmSetHardCutEnabled(true);

  // result = await avPlugin.projectmGetHardCutEnabled();
  // console.log('Test2:HardCutEnabled: ' + result);

  // // HardCutSensitivity
  // result = await avPlugin.projectmGetHardCutSensitivity();
  // console.log('Test:HardCutSensitivity: ' + result);

  // await avPlugin.projectmSetHardCutSensitivity(3.6);

  // result = await avPlugin.projectmGetHardCutSensitivity();
  // console.log('Test2:HardCutSensitivity: ' + result);

  // // BeatSensitivity
  // result = await avPlugin.projectmGetBeatSensitivity();
  // console.log('Test:BeatSensitivity: ' + result);

  // await avPlugin.projectmSetBeatSensitivity(5.9);

  // result = await avPlugin.projectmGetBeatSensitivity();
  // console.log('Test2:BeatSensitivity: ' + result);

  // // AspectCorrection
  // result = await avPlugin.projectmGetAspectCorrection();
  // console.log('Test:AspectCorrection: ' + result);

  // await avPlugin.projectmSetAspectCorrection(false);

  // result = await avPlugin.projectmGetAspectCorrection();
  // console.log('Test2:AspectCorrection: ' + result);

  // // EasterEgg
  // result = await avPlugin.projectmGetEasterEgg();
  // console.log('Test:EasterEgg: ' + result);

  // await avPlugin.projectmSetEasterEgg(7.8);

  // result = await avPlugin.projectmGetEasterEgg();
  // console.log('Test2:EasterEgg: ' + result);

  // // ShuffleEnabled
  // result = await avPlugin.projectmGetShuffleEnabled();
  // console.log('Test:ShuffleEnabled: ' + result);

  // await avPlugin.projectmSetShuffleEnabled(false);

  // result = await avPlugin.projectmGetShuffleEnabled();
  // console.log('Test2:ShuffleEnabled: ' + result);

  // // SoftCutRatingsEnabled
  // result = await avPlugin.projectmGetSoftCutRatingsEnabled();
  // console.log('Test:SoftCutRatingsEnabled: ' + result);

  // await avPlugin.projectmSetSoftCutRatingsEnabled(true);

  // result = await avPlugin.projectmGetSoftCutRatingsEnabled();
  // console.log('Test2:SoftCutRatingsEnabled: ' + result);

  // // PresetUrl
  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetPresetUrl();
  //   console.log('Test:PresetUrl: ' + result);
  // }, 5000);

  // setTimeout(async () => await avPlugin.projectmSetPresetUrl('/hello'), 10000);

  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetPresetUrl();
  //   console.log('Test2:PresetUrl: ' + result);
  // }, 15000);

  // setTimeout(
  //   async () => await avPlugin.projectmSetPresetUrl('/presets'),
  //   20000
  // );

  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetPresetUrl();
  //   console.log('Test3:PresetUrl: ' + result);
  // }, 25000);

  // // TitleFontPath
  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetTitleFontPath();
  //   console.log('Test:TitleFontPath: ' + result);
  // }, 5000);

  // setTimeout(
  //   async () => await avPlugin.projectmSetTitleFontPath('/rar.font'),
  //   10000
  // );

  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetTitleFontPath();
  //   console.log('Test2:TitleFontPath: ' + result);
  // }, 15000);

  // setTimeout(
  //   async () => await avPlugin.projectmSetTitleFontPath('/none'),
  //   20000
  // );

  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetTitleFontPath();
  //   console.log('Test3:TitleFontPath: ' + result);
  // }, 25000);

  // // MenuFontPath
  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetMenuFontPath();
  //   console.log('Test:MenuFontPath: ' + result);
  // }, 5000);

  // setTimeout(
  //   async () => await avPlugin.projectmSetMenuFontPath('/rar.font'),
  //   10000
  // );

  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetMenuFontPath();
  //   console.log('Test2:MenuFontPath: ' + result);
  // }, 15000);

  // setTimeout(
  //   async () => await avPlugin.projectmSetMenuFontPath('/none'),
  //   20000
  // );

  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetMenuFontPath();
  //   console.log('Test3:MenuFontPath: ' + result);
  // }, 25000);

  // SetToastMessage
  // await avPlugin.projectmSendToastMessage('Rawr from the block!');

  // Presets
}

main();
