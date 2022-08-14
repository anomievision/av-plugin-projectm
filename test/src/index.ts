import avPluginProjectM from 'av-plugin-projectm';

const canvas = {
  canvas: document.getElementById('canvas'),
  settings: {},
  presetPack: [
    // 'bltc201',
    //'yin',
    // 'stock',
    // 'milkdrop-original',
    // 'eyetune',
    // 'milkdrop',
    // 'milkdrop_104',
    // 'milkdrop_200',
    'mischa_collection',
    // 'tryptonaut',
    // 'projectm',
  ],
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

  // ProjectM | Preset Controls

  // // GetPlaylistSize
  // result = await avPlugin.projectmGetPlaylistSize();
  // console.log(result);

  // // GetPresetIndex
  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetPresetIndex(
  //     'Zylot - Inside The Planar Portal.milk'
  //   );
  //   console.log("Index: " + result);
  // }, 10000);

  // // IsPresetActive
  // setTimeout(async () => {
  //   result = await avPlugin.projectmIsPresetActive(50);
  //   console.log('IsPresetActive: ' + result);
  // }, 10000);

  // // GetPresetFilename
  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetPresetFilename(3);
  //   console.log(result);
  // }, 10000);

  // // GetPresetName
  // setTimeout(async () => {
  //   result = await avPlugin.projectmGetPresetName(3);
  //   console.log(result);
  // }, 10000);

  // // AddPresetFile
  // setTimeout(async () => {
  //   result = await avPlugin.projectmAddPresetFile();
  //   console.log(result);
  // }, 10000);

  // // InsertPresetFile
  // setTimeout(async () => {
  //   result = await avPlugin.projectmInsertPresetFile();
  //   console.log(result);
  // }, 10000);

  // // ClearPresetPlaylist
  // setTimeout(async () => {
  //   await avPlugin.clearPresetPlaylist();
  //   console.log('ClearPresetPlaylist');
  // }, 10000);

  // // IsPresetPositionValid
  // setTimeout(async () => {
  //   result = await avPlugin.isPresetPositionValid();
  //   console.log('IsPresetPositionValid: ' + result);
  // }, 10000);

  // // SelectPreviousPreset
  // setTimeout(async () => {
  //   result = await avPlugin.selectPreviousPreset();
  //   console.log('SelectPreviousPreset: Activated');
  // }, 20000);

  // // SelectNextPreset
  // setTimeout(async () => {
  //   result = await avPlugin.selectNextPreset();
  //   console.log('SelectNextPreset: Activated');
  // }, 10000);

  // // SelectRandomPreset
  // setTimeout(async () => {
  //   result = await avPlugin.selectRandomPreset();
  //   console.log('SelectRandomPreset: Activated');
  // }, 20000);

  // // IsPresetLocked
  // setTimeout(async () => {
  //   result = await avPlugin.isPresetLocked();
  //   console.log('IsPresetLocked: Activated');
  // }, 10000);

  // // LockPreset
  // setTimeout(async () => {
  //   result = await avPlugin.lockPreset(true);
  //   console.log('LockPreset: Activated');
  // }, 15000);

  // setTimeout(async () => {
  //   result = await avPlugin.isPresetLocked();
  //   console.log('IsPresetLocked: Activated');
  // }, 20000);

  // // LockPreset
  // setTimeout(async () => {
  //   result = await avPlugin.lockPreset();
  //   console.log('LockPreset: Activated');
  // }, 25000);

  // setTimeout(async () => {
  //   result = await avPlugin.isPresetLocked();
  //   console.log('IsPresetLocked: Activated');
  // }, 30000);

  // // GetPresetRating
  // setTimeout(async () => {
  //   result = await avPlugin.getPresetRating(2, 'soft');
  //   console.log('GetPresetRating:Soft: ' + result);
  // }, 10000);

  // setTimeout(async () => {
  //   result = await avPlugin.getPresetRating(2, 'hard');
  //   console.log('GetPresetRating:Hard: ' + result);
  // }, 12000);

  // // SetPresetRating
  // setTimeout(async () => {
  //   result = await avPlugin.setPresetRating(2, 5, 'soft');
  //   console.log('SetPresetRating:Soft: ' + result);
  // }, 10000);

  // setTimeout(async () => {
  //   result = await avPlugin.setPresetRating(2, 4, 'hard');
  //   console.log('SetPresetRating:Hard: ' + result);
  // }, 12000);

  // setTimeout(async () => {
  //   result = await avPlugin.getPresetRating(2, 'soft');
  //   console.log('GetPresetRating:Soft: ' + result);
  // }, 10000);

  // setTimeout(async () => {
  //   result = await avPlugin.getPresetRating(2, 'hard');
  //   console.log('GetPresetRating:Hard: ' + result);
  // }, 12000);

  // // PopulatePresetMenu
  // setTimeout(async () => {
  //   result = await avPlugin.populatePresetMenu();
  //   console.log('PopulatePresetMenu: Activated');
  // }, 30000);

  // // GetErrorLoadingCurrentPreset
  // setTimeout(async () => {
  //   result = await avPlugin.getErrorLoadingCurrentPreset();
  //   console.log('GetErrorLoadingCurrentPreset: ' + result);
  // }, 30000);

  // // UploadToVFS
  // setTimeout(async () => {
  //   result = await avPlugin.uploadToVFS(
  //     './example.milk',
  //     'presets/example.milk'
  //   );
  //   console.log('UploadToVFS: ' + result);
  // }, 10000);
}

main();
