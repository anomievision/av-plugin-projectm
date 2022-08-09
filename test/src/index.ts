import avPluginProjectM from 'av-plugin-projectm';

const canvas = {
    canvas: document.getElementById("canvas"),
    settings: {
        windowWidth: 640,
        windowHeight: 360,
    },
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
    
    // sleep(10000);
    
    // avPlugin.patchSettings("windowWidth", 1280);
    // avPlugin.patchSettings("windowHeight", 720);
};

main();