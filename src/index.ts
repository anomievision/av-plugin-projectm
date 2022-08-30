import { Base } from './base';
// import { Canvas } from './lib/canvas';
import { ProjectM } from './lib/projectm';
import { applyMixins } from './lib/utils';

class avPluginProjectM extends Base {}
interface avPluginProjectM extends Base {}

applyMixins(avPluginProjectM, [ProjectM]);

export default avPluginProjectM;
